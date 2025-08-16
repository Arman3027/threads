"use client";

import { ItemOptionType } from "./type";

export const ItemOptionMenu = ({ text, icon, onClick }: ItemOptionType) => {
  return (
    <button className="p-1.5 w-full" onClick={onClick}>
      <div className="cursor-pointer rounded-xl px-2 py-3 duration-200 hover:bg-gray-200/60 dark:hover:bg-gray-800/60">
        <div className="flex items-center justify-between text-base font-medium">
          <span className="text-gray-800 dark:text-gray-200">{text}</span>
          {icon && (
            <div className="size-7 stroke-gray-800 dark:stroke-gray-200">
              {icon}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};
