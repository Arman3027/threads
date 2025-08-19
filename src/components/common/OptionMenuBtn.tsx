"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { OptionMenuIcon } from "../icons/OptionMenuIcon";
import {
  exitMenu,
  exitThemeMenu,
  showMenu,
} from "@/store/features/menu/MenuSlice";
import { cn } from "@/lib/utils/cn";
import { ThemeSelector } from "./ThemeSelector";
import { OptionMenu } from "./OptionMenu";
import { useOnClickOutside } from "usehooks-ts";
import { RefObject, useRef } from "react";

export const OptionMenuBtn = () => {
  const dispatch = useAppDispatch();
  const refOpionMenu = useRef<HTMLDivElement>(null);
  const refThemeSelector = useRef<HTMLDivElement>(null);
  const { isOptionMenuActive, isThemeSelectorActive } = useAppSelector(
    (state) => {
      return state.menu;
    }
  );
  useOnClickOutside(
    [refOpionMenu, refThemeSelector] as RefObject<HTMLDivElement>[],
    () => {
      dispatch(exitThemeMenu());
      dispatch(exitMenu());
    }
  );
  return (
    <div>
      <div className="relative">
        <OptionMenu ref={refOpionMenu as RefObject<HTMLDivElement>} />
        <ThemeSelector ref={refThemeSelector as RefObject<HTMLDivElement>} />
      </div>
      <button
        className={cn(
          "cursor-pointer mb-4 flex justify-center items-center size-10 stroke-gray-400 hover:stroke-gray-800 dark:stroke-gray-600 dark:hover:stroke-gray-200 transition-all",
          (isOptionMenuActive || isThemeSelectorActive) &&
            "stroke-gray-800 dark:storke-gray-200"
        )}
        onClick={() => {
          dispatch(showMenu());
        }}
      >
        <OptionMenuIcon />
      </button>
    </div>
  );
};
