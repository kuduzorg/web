import "server-only";

import { NextRequest } from "next/server";
import { query } from "@/lib/db";

export function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "127.0.0.1";
}

export function hasValidOrigin(request: NextRequest) {
  const originHeader = request.headers.get("origin");
  if (!originHeader) return true;

  try {
    const origin = new URL(originHeader);
    const configuredOrigin = process.env.WEB_ORIGIN?.trim();

    if (configuredOrigin && origin.origin === new URL(configuredOrigin).origin) {
      return true;
    }

    const forwardedHosts = request.headers
      .get("x-forwarded-host")
      ?.split(",")
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean) ?? [];
    const requestHosts = [
      ...forwardedHosts,
      request.headers.get("host")?.trim().toLowerCase(),
      request.nextUrl.host.toLowerCase(),
    ].filter((host): host is string => Boolean(host));

    const allowed = requestHosts.includes(origin.host.toLowerCase());
    if (!allowed) {
      console.warn("Web origin check rejected a request", {
        origin: origin.origin,
        forwardedHost: request.headers.get("x-forwarded-host"),
        host: request.headers.get("host"),
        nextUrlHost: request.nextUrl.host,
      });
    }
    return allowed;
  } catch {
    return false;
  }
}

export async function enforceRateLimit(key: string, limit = 10, windowMinutes = 15) {
  const result = await query<{ request_count: number }>(
    `INSERT INTO api_rate_limits (key, request_count, window_started_at)
     VALUES ($1, 1, now())
     ON CONFLICT (key) DO UPDATE SET
       request_count = CASE
         WHEN api_rate_limits.window_started_at < now() - ($2 * interval '1 minute') THEN 1
         ELSE api_rate_limits.request_count + 1
       END,
       window_started_at = CASE
         WHEN api_rate_limits.window_started_at < now() - ($2 * interval '1 minute') THEN now()
         ELSE api_rate_limits.window_started_at
       END
     RETURNING request_count`,
    [key, windowMinutes],
  );
  return result.rows[0].request_count <= limit;
}

export async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV !== "production";

  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    cache: "no-store",
  });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export function getOptionalFile(formData: FormData, field: string, maxBytes: number, allowedTypes: RegExp) {
  const value = formData.get(field);
  if (!(value instanceof File) || value.size === 0) return null;
  if (value.size > maxBytes || !allowedTypes.test(value.type)) throw new Error("INVALID_FILE");
  return value;
}
