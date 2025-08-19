import { ClassValue } from "clsx";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: ClassValue;
}
