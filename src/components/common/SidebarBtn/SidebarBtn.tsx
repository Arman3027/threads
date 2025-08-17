"use client";

import { cn } from "@/lib/utils/cn";
import { SidebarBtnType } from "./type";
import Link from "next/link";

export const SidebarBtn = ({
  isActive,
  icon,
  href,
  onClick,
}: SidebarBtnType) => {
  return (
    <Link className=" w-full" href={href} onClick={onClick}>
      <div className="cursor-pointer rounded-xl duration-200 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 p-2">
        <div className="flex items-center justify-center text-base font-medium">
          <div
            className={cn(
              "size-7 stroke-gray-400 text-gray-400 dark:stroke-gray-600 dark:text-gray-600",
              isActive &&
                "stroke-gray-800 text-gray-800 dark:stroke-gray-200 dark:text-gray-200"
            )}
          >
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
};
