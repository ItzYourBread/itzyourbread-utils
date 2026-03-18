import fetch, { RequestInit } from "node-fetch";

export async function retryFetch(url: string, options: RequestInit = {}, retries = 3, delay = 500): Promise<any> {
  let lastError: any;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      lastError = err;
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw lastError;
}

export function buildQuery(obj: Record<string, any>): string {
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

export function rateLimit(fn: Function, delay: number) {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      return fn(...args);
    }
  };
}