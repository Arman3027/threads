"use client";
import type { CopyLinkBtnType } from "./type";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { togglePostMenu } from "@/store/features/menu/MenuSlice";
import { ItemOptionMenu } from "../ItemOptionMenu";
import { LinkIcon } from "@/components/icons/LinkIcon";
import { RefObject, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { MoreIcon } from "@/components/icons/MoreIcon";

export const CopyLinkBtn = ({ PostID }: CopyLinkBtnType) => {
  const refSvg = useRef<SVGSVGElement>(null);
  const refMenu = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();
  const { activePost } = useAppSelector((state) => {
    return state.menu;
  });
  const isPostActive: boolean = activePost === PostID;
  const toggleMenu = () => {
    dispatch(togglePostMenu(PostID));
  };
  useOnClickOutside(refMenu as RefObject<HTMLElement>, (e) => {
    dispatch(togglePostMenu(null));
  });
  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex size-8 cursor-pointer items-center justify-center rounded-full text-gray-400 duration-200 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800"
      >
        <MoreIcon ref={refSvg as RefObject<SVGSVGElement>} />
      </button>
      {isPostActive && (
        <button className="absolute right-0 bottom-0 w-48 -translate-x-1/6 translate-y-5/6">
          <ItemOptionMenu
            ref={refMenu as RefObject<HTMLButtonElement>}
            className="border py-1 px-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl"
            text="Copy link"
            icon={<LinkIcon />}
            onClick={() => {
              dispatch(togglePostMenu(null));
              console.log("object");
            }}
          />
        </button>
      )}
    </div>
  );
};
