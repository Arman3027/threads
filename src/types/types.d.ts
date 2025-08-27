import React from "react";
import type HttpStatusCode from "@/lib/constants/HttpStatusCode";

export type StatusCode = HttpStatusCode;

export interface ChildrenProps {
  children: React.ReactNode;
}
