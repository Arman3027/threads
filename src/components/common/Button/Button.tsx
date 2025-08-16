import Link from "next/link";
import { propType } from "./type";
import { cn } from "@/lib/utils/cn";

export const Button = ({ children, href, className }: propType) => {
  return (
    <Link
      href={href}
      className={cn(
        "cursor-pointer rounded-xl bg-gray-900 px-4 py-2 text-base font-semibold text-gray-100 dark:bg-white dark:text-gray-900",
        className
      )}
    >
      {children}
    </Link>
  );
};
