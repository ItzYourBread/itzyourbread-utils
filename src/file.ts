import fs from "fs";
import path from "path";

export function formatBytes(bytes: number): string {
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 B";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

export function exists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

export function readJSON(filePath: string): any {
  if (!exists(filePath)) throw new Error("File does not exist");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

export function writeJSON(filePath: string, data: any): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

export function normalizePath(filePath: string): string {
  return path.normalize(filePath);
}