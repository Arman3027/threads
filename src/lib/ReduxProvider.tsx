"use client";
import React from "react";

import { Store } from "@/store/store";

import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={Store}>{children}</Provider>;
};
