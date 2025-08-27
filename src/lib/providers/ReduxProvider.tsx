"use client";
import React from "react";

import { Store } from "@/store/store";

import { Provider } from "react-redux";
import type { ChildrenProps } from "@/types";

export const ReduxProvider = ({ children }: ChildrenProps) => {
  return <Provider store={Store}>{children}</Provider>;
};
