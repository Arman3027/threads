"use client";

import type { ChildrenProps } from "@/types";
import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: ChildrenProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
