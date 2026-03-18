export function formatDate(date: Date | string, relative = false): string {
  const d = new Date(date);
  if (relative) {
    const diff = (new Date().getTime() - d.getTime()) / 1000;
    if (diff < 60) return `${Math.floor(diff)} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  }
  return d.toISOString();
}

export function convertTZ(date: Date | string, tz: string): Date {
  const d = new Date(date);
  const offset = d.getTimezoneOffset() * 60000;
  const utc = d.getTime() + offset;
  const tzOffset = new Date().toLocaleString("en-US", { timeZone: tz });
  return new Date(utc + (new Date(tzOffset).getTime() - utc));
}

export function timer<T>(fn: () => T): { result: T; ms: number } {
  const start = Date.now();
  const result = fn();
  return { result, ms: Date.now() - start };
}