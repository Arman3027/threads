import Link from "next/link";

import type { HeaderType } from "./type";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import { Button } from "../Button/Button";

export const Header = ({ title }: HeaderType) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-between bg-white/85 px-4 backdrop-blur-xl lg:sticky lg:w-[unset] lg:flex-col lg:items-stretch lg:justify-center lg:bg-gray-100 lg:px-0 lg:backdrop-blur-none dark:bg-gray-900/85 lg:dark:bg-black">
      <h1 className="hidden py-6 text-center text-base font-semibold text-gray-900 lg:inline-block dark:text-gray-100">
        {title}
      </h1>
      <div className="relative flex w-full items-center justify-start sm:justify-center lg:hidden">
        <Link href="/" className="size-9">
          <ThreadsIcon />
        </Link>
        <Button className="absolute right-0 mr-0.5" href="/login">
          Login
        </Button>
      </div>
      <div className="hidden items-center lg:flex z-40">
        <div className="absolute bottom-0 h-0 w-full px-8">
          <div className="border-t border-gray-200 dark:border-gray-800"></div>
        </div>
        <div className="absolute bottom-[-1.5rem] left-0 size-6 bg-gray-100 before:absolute before:left-0 before:size-8 before:rounded-tl-2xl before:border-t before:border-l before:border-gray-200 before:bg-white dark:bg-black dark:before:border-gray-800 dark:before:bg-gray-900"></div>
        <div className="absolute bottom-[-1.5rem] right-0 size-6 bg-gray-100 before:absolute before:right-0 before:size-8 before:rounded-tr-2xl before:border-t before:border-r before:border-gray-200 before:bg-white dark:bg-black dark:before:border-gray-800 dark:before:bg-gray-900"></div>
      </div>
    </div>
  );
};
