import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { query } from "@/lib/db";
import { enforceRateLimit, getClientIp, getOptionalFile, hasValidOrigin, verifyTurnstile } from "@/lib/api-security";

export const runtime = "nodejs";

const reportSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  phoneNumber: z.string().trim().min(10).max(30),
  description: z.string().trim().min(10).max(5_000),
  location: z.string().trim().min(1).max(500),
  token: z.string().min(1).max(4_096),
});

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) return NextResponse.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });
  const ip = getClientIp(request);

  try {
    if (!await enforceRateLimit(`report:${ip}`, 5, 15)) {
      return NextResponse.json({ error: "Çok fazla istek gönderildi." }, { status: 429 });
    }

    const formData = await request.formData();
    const parsed = reportSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) return NextResponse.json({ error: "Form bilgileri geçersiz." }, { status: 400 });
    if (!await verifyTurnstile(parsed.data.token, ip)) {
      return NextResponse.json({ error: "Güvenlik doğrulaması başarısız." }, { status: 403 });
    }

    const photo = getOptionalFile(formData, "photo", 5 * 1024 * 1024, /^image\/(jpeg|png|webp)$/);
    const photoData = photo ? Buffer.from(await photo.arrayBuffer()) : null;
    const result = await query<{ id: string }>(
      `INSERT INTO reports
        (first_name, last_name, phone_number, description, location, photo_data, photo_type, client_ip)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`,
      [parsed.data.firstName, parsed.data.lastName, parsed.data.phoneNumber, parsed.data.description,
        parsed.data.location, photoData, photo?.type ?? null, ip],
    );
    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_FILE") {
      return NextResponse.json({ error: "Fotoğraf JPEG, PNG veya WebP ve en fazla 5 MB olmalıdır." }, { status: 400 });
    }
    console.error("Report API error:", error);
    return NextResponse.json({ error: "Bildirim kaydedilemedi." }, { status: 500 });
  }
}
