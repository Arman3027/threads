"use client";

import { useEffect } from "react";
import { useAppDispatch } from "../hook";
import { setIsAuthenticated } from "@/store/features/isAuthenticated/AuthenticatedSlice";
import Cookies from "js-cookie";
import { ChildrenProps } from "@/types";

export const AuthProvider = ({ children }: ChildrenProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authenticatedStatus = Cookies.get("id");
    if (authenticatedStatus) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  });

  return children;
};
