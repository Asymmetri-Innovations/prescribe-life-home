import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric characters (except spaces and hyphens)
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/-+/g, "-"); // remove duplicate -
}
