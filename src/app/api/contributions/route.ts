import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { query } from "@/lib/db";
import { enforceRateLimit, getClientIp, getOptionalFile, hasValidOrigin, verifyTurnstile } from "@/lib/api-security";

export const runtime = "nodejs";

const contributionSchema = z.object({
  type: z.enum(["correction", "new_content", "data_update", "suggestion"]),
  subject: z.string().trim().min(2).max(200),
  content: z.string().trim().min(10).max(20_000),
  source: z.union([z.literal(""), z.string().url().max(2_000)]).optional().default(""),
  name: z.string().trim().max(160).optional().default(""),
  email: z.union([z.literal(""), z.string().email().max(320)]).optional().default(""),
  token: z.string().min(1).max(4_096),
});

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) return NextResponse.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });
  const ip = getClientIp(request);

  try {
    if (!await enforceRateLimit(`contribution:${ip}`, 5, 15)) {
      return NextResponse.json({ error: "Çok fazla istek gönderildi." }, { status: 429 });
    }

    const formData = await request.formData();
    const parsed = contributionSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) return NextResponse.json({ error: "Form bilgileri geçersiz." }, { status: 400 });
    if (!await verifyTurnstile(parsed.data.token, ip)) {
      return NextResponse.json({ error: "Güvenlik doğrulaması başarısız." }, { status: 403 });
    }

    const media = getOptionalFile(formData, "media", 10 * 1024 * 1024, /^(image\/|video\/|application\/pdf$|application\/msword$|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document$)/);
    const mediaData = media ? Buffer.from(await media.arrayBuffer()) : null;
    const result = await query<{ id: string }>(
      `INSERT INTO contribution_requests
        (type, subject, content, source_url, submitter_name, submitter_email, media_data, media_type, media_name, ip_address)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id`,
      [parsed.data.type, parsed.data.subject, parsed.data.content, parsed.data.source || null,
        parsed.data.name || null, parsed.data.email || null, mediaData, media?.type ?? null, media?.name ?? null, ip],
    );
    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_FILE") {
      return NextResponse.json({ error: "Dosya türü veya boyutu geçersiz." }, { status: 400 });
    }
    console.error("Contribution API error:", error);
    return NextResponse.json({ error: "Katkı kaydedilemedi." }, { status: 500 });
  }
}
