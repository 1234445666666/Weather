import type { IWeaterData } from "../../types/weather.types";

export function isValidNotification(obj: unknown): obj is IWeaterData {
  if (typeof obj !== "object" || obj === null) return false;

  const post = obj as Record<string, unknown>;
  return (
    typeof post.name === "string" &&
    typeof post.main === "object" &&
    typeof post.weather === "object" &&
    typeof post.wind === "object" &&
    typeof post.sys === "object"
  );
}

export function notifyWeather(data: unknown): Promise<IWeaterData> {
  return new Promise((resolve, reject) => {
    if (isValidNotification(data)) {
      resolve(data);
    } else {
      reject(new Error("Invalid data"));
    }
  });
}
