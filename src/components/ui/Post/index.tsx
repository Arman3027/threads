import { TimePassedSince } from "@/lib/utils/TimePassedSince";
import Image from "next/image";
import type { PostProps } from "./type";
import { CopyLinkBtn } from "@/components/common/CopyLinkBtn";
import Link from "next/link";

export const Post = ({ Post }: PostProps) => {
  return (
    <div className="w-full min-h-24 py-4 px-8 flex gap-2  first:border-0 border-t border-gray-200 dark:border-gray-800">
      <div>
        <Image
          src="/Image/unknownPerson.jpg"
          alt={Post.author.full_name}
          height={42}
          width={42}
          className="rounded-full"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h5 className="w-fit text-lg font-medium text-gray-800 dark:text-gray-200">
              {Post.author.full_name}
            </h5>
            <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {TimePassedSince(Post.created_at)}
            </span>
          </div>
          <CopyLinkBtn PostID={Post.id} />
        </div>
        <Link href={`/`}>
          <p className="text-base font-normal text-gray-700 dark:text-gray-300">
            {Post.content}
          </p>
        </Link>
      </div>
    </div>
  );
};
