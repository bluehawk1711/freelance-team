function getDailyKey(ip: string): string {
  const date = new Date().toISOString().slice(0, 10);
  return `${ip}:${date}`;
}

const store = new Map<string, number>();

export function checkRateLimit(request: Request): { allowed: boolean; remaining: number; reset: string } {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "127.0.0.1";
  const key = getDailyKey(ip);
  const max = 5;

  const count = store.get(key) ?? 0;

  if (count >= max) {
    const reset = new Date();
    reset.setUTCHours(23, 59, 59, 999);
    return { allowed: false, remaining: 0, reset: reset.toISOString() };
  }

  store.set(key, count + 1);

  const remaining = max - (count + 1);
  return { allowed: true, remaining, reset: "" };
}

setInterval(() => {
  const today = new Date().toISOString().slice(0, 10);
  for (const key of store.keys()) {
    if (!key.endsWith(`:${today}`)) {
      store.delete(key);
    }
  }
}, 60_000);
