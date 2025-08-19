"use client";

import type { ChildrenProps } from "@/types";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: ChildrenProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
