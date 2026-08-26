import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { query } from "@/lib/db";
import { enforceRateLimit, getClientIp, hasValidOrigin } from "@/lib/api-security";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(320),
  subject: z.enum(["gonullu", "oneri", "hata", "basin", "diger"]),
  message: z.string().trim().min(10).max(10_000),
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) return NextResponse.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });
  const ip = getClientIp(request);
  try {
    if (!await enforceRateLimit(`contact:${ip}`, 5, 15)) return NextResponse.json({ error: "Çok fazla mesaj gönderildi. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Form bilgileri geçersiz." }, { status: 400 });
    const result = await query<{ id: string }>(
      "INSERT INTO contact_messages(name,email,subject,message,ip_address) VALUES($1,$2,$3,$4,$5) RETURNING id",
      [parsed.data.name, parsed.data.email, parsed.data.subject, parsed.data.message, ip],
    );
    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Mesaj kaydedilemedi." }, { status: 500 });
  }
}
