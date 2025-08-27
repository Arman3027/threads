"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { DirectionRightIcon } from "../../icons";
import { ItemOptionMenu } from "../ItemOptionMenu";
import { exitMenu, showThemeMenu } from "@/store/features/menu/MenuSlice";
import type { OptionMenuProps } from "./type";
import { showReport } from "@/store/features/reportProblem/ReportProblemSlice";

export const OptionMenu = ({ ref }: OptionMenuProps) => {
  const dispatch = useAppDispatch();
  const { isOptionMenuActive } = useAppSelector((state) => {
    return state.menu;
  });
  return (
    <>
      {isOptionMenuActive && (
        <div
          ref={ref}
          className="absolute top-0 left-0 -translate-y-full flex flex-col h-32 w-64 gap-[1px] p-[1px] rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-xs"
        >
          <div className="w-full h-full bg-white rounded-t-2xl  dark:bg-gray-900">
            <ItemOptionMenu
              text="Appearance"
              onClick={() => {
                dispatch(exitMenu());
                dispatch(showThemeMenu());
              }}
              icon={<DirectionRightIcon />}
            />
          </div>
          <div className="w-full h-full bg-white rounded-b-2xl dark:bg-gray-900">
            <ItemOptionMenu
              text="Report a problem"
              onClick={() => {
                dispatch(exitMenu());
                dispatch(showReport());
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
