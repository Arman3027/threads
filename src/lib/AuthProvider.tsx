"use client";

import { useEffect } from "react";
import { useAppDispatch } from "./hook";
import { setIsAuthenticated } from "@/store/features/isAuthenticated/AuthenticatedSlice";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authenticatedStatus = localStorage.getItem("id");
    if (authenticatedStatus) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  });

  return children;
};
