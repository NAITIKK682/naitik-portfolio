// This is used to merge tailwind css class names. Instead of writing a lot of classnames inside a html/jsx tag, you just use tailwind merge and clsx to write those classnames.

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
