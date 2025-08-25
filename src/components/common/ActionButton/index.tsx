import { useAppSelector } from "@/lib/hook";
import { Button } from "../Button";
import { cn } from "@/lib/utils/cn";

export const ActionButton = ({ className }: { className?: string }) => {
  const isAuthenticated = useAppSelector((state) => {
    return state.auth.isAuthenticated;
  });
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
