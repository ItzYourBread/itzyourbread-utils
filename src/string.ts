export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "…" : str;
}

export function cleanString(str: string): string {
  return str.replace(/[^\w\s]/gi, "").trim().replace(/\s+/g, " ");
}

export function slugify(str: string, style: "camel" | "snake" | "kebab" = "kebab"): string {
  const cleaned = cleanString(str).toLowerCase().split(" ");
  switch (style) {
    case "camel":
      return cleaned.map((word, i) => i === 0 ? word : capitalize(word)).join("");
    case "snake":
      return cleaned.join("_");
    case "kebab":
      return cleaned.join("-");
  }
}

export function randomString(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}