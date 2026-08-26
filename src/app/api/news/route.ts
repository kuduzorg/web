import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await query(
      `SELECT id, title, summary, source, tag, published_at, image_url, link
       FROM news ORDER BY published_at DESC`,
    );
    return NextResponse.json(result.rows, { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json({ error: "Haberler alınamadı." }, { status: 500 });
  }
}
