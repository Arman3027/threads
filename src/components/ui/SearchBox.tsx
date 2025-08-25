"use client";
import { ThreadsIcon } from "../icons/ThreadsIcon";
import { Button } from "../common/Button";
import { Footer } from "../common";
import { GetPosts } from "@/lib/services/post/GetPosts";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hook";
import { ActionButton } from "../common/ActionButton";

export const SearchBox = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex flex-col justify-start items-center gap-2 lg:p-4 lg:w-3xl w-screen">
      <p className="text-base font-medium text-black dark:text-white m-2 hidden lg:block ">
        search
      </p>
      <div className="lg:rounded-t-2xl bg-white dark:bg-gray-900 border-[1px] border-gray-200 dark:border-gray-800 w-full h-fit py-4 lg:py-10 px-8">
        <div className="relative lg:hidden flex justify-center items-center">
          <div className="size-8">
            <ThreadsIcon />
          </div>
          <ActionButton className="absolute right-0 mr-0.5" />
        </div>
        <input
          className="w-full border rounded-xl my-10 lg:m-0 border-gray-200 bg-gray-100 px-4 py-2 dark:border-gray-800 dark:bg-black text-base font-medium text-gray-800 outline-none placeholder:text-gray-300 dark:text-gray-200 dark:placeholder:text-gray-700"
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="pt-3 pb-1">
          {text.length >= 3 ? (
            <GetPosts search={text} />
          ) : (
            <div className="w-full text-center">we need more character</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
