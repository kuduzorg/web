import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await query<{
      id: string; name: string; risk_level: "low" | "medium" | "high";
      confirmed_cases: number; risk_contact_count: number; hospitals: number; vets: number; last_case: string;
    }>(`SELECT id, name, risk_level, confirmed_cases, risk_contact_count, hospitals, vets, last_case FROM rabies_city_data ORDER BY id`);

    const data = Object.fromEntries(result.rows.map((city) => [city.id, {
      id: city.id, name: city.name, riskLevel: city.risk_level,
      confirmedCases: city.confirmed_cases, riskContactCount: city.risk_contact_count,
      hospitals: city.hospitals, vets: city.vets, lastCase: city.last_case,
    }]));
    return NextResponse.json(data, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } });
  } catch (error) {
    console.error("Rabies API error:", error);
    return NextResponse.json({ error: "Risk verileri alınamadı." }, { status: 500 });
  }
}
