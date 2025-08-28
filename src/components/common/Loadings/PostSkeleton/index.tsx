import { cn } from "@/lib/utils";
import { PostSkeletonProps } from "./type";

export const PostSkeleton = ({ className }: PostSkeletonProps) => {
  return (
    <div
      className={cn(
        "w-full animate-pulse min-h-24 py-4 px-8 flex gap-2 border-t first:border-t-0 border-gray-200 dark:border-gray-800",
        className && className
      )}
    >
      <div>
        <div className="rounded-full size-[38px] bg-gray-300 dark:bg-gray-800 animate-pulse"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="rounded-full animate-pulse h-5 w-40 bg-gray-300 dark:bg-gray-800"></div>
          <div className=" rounded-full animate-pulse h-6 w-6 bg-gray-300 dark:bg-gray-800"></div>
        </div>
        <div className=" rounded-full animate-pulse h-4 w-96 bg-gray-300 dark:bg-gray-800"></div>
      </div>
    </div>
  );
};
