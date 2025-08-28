"use client";

import { PostSkeleton } from "@/components/common/Loadings/PostSkeleton";
import { Post } from "@/components/ui/Post";
import { useGetPostQuery } from "@/store/services/posts";
import { PostIdProps } from "@/types";

export const GetSinglePost = ({ postId }: PostIdProps) => {
  const { data, isLoading, isError } = useGetPostQuery(postId);

  if (isLoading) {
    return <PostSkeleton className="border-t first:border-t" />;
  }
  if (isError) {
    return (
      <div className="flex h-24 w-full items-center justify-center text-base font-medium text-center">
        Error loading posts.
      </div>
    );
  }
  if (data?.body.data) {
    return (
      <Post
        Post={{
          id: data.body.data.id,
          content: data.body.data.content,
          author: {
            id: data.body.data.author.id,
            email: data.body.data.author.email,
            full_name: data.body.data.author.full_name,
            joined_at: data.body.data.author.joined_at,
          },
          created_at: data.body.data.created_at,
        }}
      />
    );
  }
};
