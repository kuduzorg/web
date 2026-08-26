import "server-only";

import { Pool, type PoolClient, type QueryResultRow } from "pg";
import { rabiesData } from "@/data/rabies-data";

const globalForDb = globalThis as unknown as { postgresPool?: Pool; schemaReady?: Promise<void> };

export const db = globalForDb.postgresPool ?? new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

if (process.env.NODE_ENV !== "production") globalForDb.postgresPool = db;

async function initializeSchema() {
  const client = await db.connect();
  try {
    await client.query("BEGIN");
    await client.query(`
      CREATE TABLE IF NOT EXISTS news (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        title text NOT NULL,
        summary text NOT NULL DEFAULT '',
        source text NOT NULL DEFAULT '',
        tag text NOT NULL DEFAULT 'BİLGİ',
        published_at timestamptz NOT NULL DEFAULT now(),
        image_url text,
        link text
      );
      CREATE TABLE IF NOT EXISTS reports (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at timestamptz NOT NULL DEFAULT now(),
        first_name text NOT NULL,
        last_name text NOT NULL,
        phone_number text NOT NULL,
        description text NOT NULL,
        location text NOT NULL,
        photo_data bytea,
        photo_type text,
        client_ip inet,
        status text NOT NULL DEFAULT 'pending'
      );
      CREATE TABLE IF NOT EXISTS contribution_requests (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at timestamptz NOT NULL DEFAULT now(),
        type text NOT NULL,
        subject text NOT NULL,
        content text NOT NULL,
        source_url text,
        submitter_name text,
        submitter_email text,
        media_data bytea,
        media_type text,
        media_name text,
        status text NOT NULL DEFAULT 'pending',
        ip_address inet
      );
      CREATE TABLE IF NOT EXISTS contact_messages (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at timestamptz NOT NULL DEFAULT now(),
        name text NOT NULL,
        email text NOT NULL,
        subject text NOT NULL,
        message text NOT NULL,
        status text NOT NULL DEFAULT 'pending',
        ip_address inet
      );
      CREATE TABLE IF NOT EXISTS rabies_city_data (
        id varchar(4) PRIMARY KEY,
        name text NOT NULL,
        risk_level text NOT NULL CHECK (risk_level IN ('low', 'medium', 'high')),
        confirmed_cases integer NOT NULL DEFAULT 0 CHECK (confirmed_cases >= 0),
        risk_contact_count integer NOT NULL DEFAULT 0 CHECK (risk_contact_count >= 0),
        hospitals integer NOT NULL DEFAULT 0 CHECK (hospitals >= 0),
        vets integer NOT NULL DEFAULT 0 CHECK (vets >= 0),
        last_case text NOT NULL DEFAULT '-',
        updated_at timestamptz NOT NULL DEFAULT now()
      );
      CREATE TABLE IF NOT EXISTS api_rate_limits (
        key text PRIMARY KEY,
        request_count integer NOT NULL,
        window_started_at timestamptz NOT NULL
      );
    `);

    for (const city of Object.values(rabiesData)) {
      await client.query(
        `INSERT INTO rabies_city_data
          (id, name, risk_level, confirmed_cases, risk_contact_count, hospitals, vets, last_case)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
         ON CONFLICT (id) DO NOTHING`,
        [city.id, city.name, city.riskLevel, city.confirmedCases, city.riskContactCount, city.hospitals, city.vets, city.lastCase],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export async function ensureDatabase() {
  globalForDb.schemaReady ??= initializeSchema();
  return globalForDb.schemaReady;
}

export async function query<T extends QueryResultRow>(text: string, values: unknown[] = []) {
  await ensureDatabase();
  return db.query<T>(text, values);
}

export async function withTransaction<T>(callback: (client: PoolClient) => Promise<T>) {
  await ensureDatabase();
  const client = await db.connect();
  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
