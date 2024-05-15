import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) {
    // SSR should use vercel url
    return `https://${process.env.VERCEL_URL}`;
  }
  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function getUrl(path: string) {
  return `${getBaseUrl()}${path}`;
}

export const generateRandomDate = () => {
  const startDate = dayjs();
  const endDate = dayjs().add(7, "day");

  const randomDays = Math.floor(Math.random() * endDate.diff(startDate, "day"));
  const randomDate = startDate.add(randomDays, "day");

  return randomDate.format("YYYY-MM-DD HH:mm:ss");
};
