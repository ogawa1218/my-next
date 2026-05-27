// Single-instance, in-memory sliding-window rate limiter. Good enough as a
// first line of defence against form spam on Vercel — for stricter limits
// across serverless instances, swap for Upstash Redis or a Supabase RPC.

const buckets = new Map<string, number[]>();
let lastSweep = 0;

export type RateLimitOptions = {
  windowMs: number;
  max: number;
};

export type RateLimitResult = {
  ok: boolean;
  retryAfterSec: number;
};

export function checkRateLimit(
  key: string,
  { windowMs, max }: RateLimitOptions,
): RateLimitResult {
  const now = Date.now();

  if (now - lastSweep > 5 * 60 * 1000) {
    for (const [k, v] of buckets) {
      const filtered = v.filter((t) => now - t < windowMs);
      if (filtered.length === 0) buckets.delete(k);
      else buckets.set(k, filtered);
    }
    lastSweep = now;
  }

  const recent = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  buckets.set(key, recent);

  if (recent.length > max) {
    const oldest = recent[0];
    const retryAfterSec = Math.ceil((windowMs - (now - oldest)) / 1000);
    return { ok: false, retryAfterSec: Math.max(retryAfterSec, 1) };
  }
  return { ok: true, retryAfterSec: 0 };
}

export function clientKeyFromRequest(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for") ?? "";
  const ip = fwd.split(",")[0]?.trim();
  if (ip) return ip;
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "anonymous";
}
