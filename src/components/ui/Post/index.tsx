"use client";
import { TimePassedSince } from "@/lib/utils";
import Image from "next/image";
import type { PostProps } from "./type";
import { CopyLinkBtn } from "@/components/common/CopyLinkBtn";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Post = ({ Post, className }: PostProps) => {
  return (
    <div
      className={cn(
        "w-full min-h-24 py-4 px-5 sm:px-8 flex gap-2 border-t border-gray-200 dark:border-gray-800",
        className && className
      )}
    >
      <div>
        <Image
          src="/Image/unknownPerson.jpg"
          alt={Post.author.full_name}
          height={42}
          width={42}
          className="rounded-full min-h-6  min-w-6"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h5 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
              {Post.author.full_name}
            </h5>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              •
            </span>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {TimePassedSince(Post.created_at)}
            </span>
          </div>
          <CopyLinkBtn PostID={Post.id} />
        </div>
        <Link href={`/post/${Post.id}`}>
          <p className="text-sm sm:text-base font-normal text-gray-700 dark:text-gray-300">
            {Post.content}
          </p>
        </Link>
      </div>
    </div>
  );
};
