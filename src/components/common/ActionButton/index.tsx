"use client";

import { useIsClient } from "usehooks-ts";
import { useAppSelector } from "@/lib/hook";
import { Button } from "../Button";
import { cn } from "@/lib/utils";
import { ButtonSkeleton } from "../Loadings/ButtonSkeleton";

export const ActionButton = ({ className }: { className?: string }) => {
  const isClient = useIsClient();
  const isAuthenticated = useAppSelector((state) => {
    return state.auth.isAuthenticated;
  });

  if (!isClient) {
    return <ButtonSkeleton className={cn("relative z-10", className)} />;
  }

  return isAuthenticated ? (
    <Button href="/post/new" className={cn("relative z-10", className)}>
      Send Post
    </Button>
  ) : (
    <Button href="/login" className={cn("relative z-10", className)}>
      Login
    </Button>
  );
};
