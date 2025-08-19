"use client";

import { ArrowLeftIcon } from "@/components/icons/ArrowIcons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { exitThemeMenu, showMenu } from "@/store/features/menu/MenuSlice";
import type { SavedThemeType, ThemeSelectorProps } from "./type";

export const ThemeSelector = ({ ref }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();
  const [savedTheme, setSavedTheme] = useState<SavedThemeType>();

  useEffect(() => {
    const x = localStorage.getItem("savedTheme");
    if (x === "auto" || x === "dark" || x === "light") {
      setSavedTheme(x);
    } else {
      setSavedTheme("auto");
    }
  });

  const dispatch = useAppDispatch();
  const { isThemeSelectorActive } = useAppSelector((state) => {
    return state.menu;
  });

  return (
    <>
      {isThemeSelectorActive && (
        <div
          ref={ref}
          id="theme-menu"
          className="absolute top-0 left-0 -translate-y-full flex w-72 h-fit flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                dispatch(exitThemeMenu());
                dispatch(showMenu());
              }}
              className="size-8 cursor-pointer stroke-gray-800 text-gray-800 dark:stroke-gray-200 dark:text-gray-200"
            >
              <ArrowLeftIcon />
            </button>
            <span className="text-base font-medium text-gray-800 dark:text-gray-200">
              Appearance
            </span>
          </div>
          <div className="flex rounded-xl bg-gray-100 dark:bg-black">
            <button
              onClick={() => {
                setSavedTheme("auto");
                localStorage.setItem("savedTheme", "auto");
                const darkModeQuery = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                );
                if (darkModeQuery.matches) {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
              className={cn(
                "flex w-full cursor-pointer justify-center stroke-gray-300 px-5 py-4 text-gray-300 dark:stroke-gray-700 dark:text-gray-700",
                "auto" == savedTheme &&
                  "rounded-xl border border-gray-200 bg-white !stroke-gray-800 !text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:!stroke-gray-200 dark:!text-gray-200"
              )}
            >
              <div className="text-sm font-medium">auto</div>
            </button>
            <button
              onClick={() => {
                setTheme("light");
                setSavedTheme("light");
                localStorage.setItem("savedTheme", "light");
              }}
              className={cn(
                "flex w-full cursor-pointer justify-center stroke-gray-300 px-5 py-4 text-gray-300 dark:stroke-gray-700 dark:text-gray-700",
                "light" == savedTheme &&
                  "rounded-xl border border-gray-200 bg-white !stroke-gray-800 !text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:!stroke-gray-200 dark:!text-gray-200"
              )}
            >
              <div className="size-6">
                <SunIcon />
              </div>
            </button>
            <button
              onClick={() => {
                setTheme("dark");
                setSavedTheme("dark");
                localStorage.setItem("savedTheme", "dark");
              }}
              className={cn(
                "flex w-full cursor-pointer justify-center stroke-gray-300 px-5 py-4 text-gray-300 dark:stroke-gray-700 dark:text-gray-700",
                "dark" == savedTheme &&
                  "rounded-xl border border-gray-200 bg-white !stroke-gray-800 !text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:!stroke-gray-200 dark:!text-gray-200"
              )}
            >
              <div className="size-6">
                <MoonIcon />
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
