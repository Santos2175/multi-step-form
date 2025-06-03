import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to safely build and merge tailwind class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
