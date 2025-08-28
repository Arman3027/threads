import { cn } from "@/lib/utils";
import { ButtonSkeletonProps } from "./type";

export const ButtonSkeleton = ({ className }: ButtonSkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-gray-300 dark:bg-gray-800  h-10 w-20",
        className && className
      )}
    ></div>
  );
};
