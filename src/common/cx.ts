import type { ClassValue } from "clsx";
import clsx from "clsx";

export type { ClassValue } from "clsx";
export function cx(...args: ClassValue[]) {
  return clsx(...args) || undefined;
}
