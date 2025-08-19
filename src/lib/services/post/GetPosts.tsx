"use client";

import { Post } from "@/components/ui/Post";
import { useGetPostsQuery } from "@/store/services/posts/PostsApi";
import type { GetPostsApiQueryArgProps } from "@/types";

export const GetPosts = ({
  search,
  limit = 10,
  page = 1,
}: GetPostsApiQueryArgProps) => {
  const { data, isLoading, isError, error } = useGetPostsQuery({
    search,
    limit,
    page,
  });

  if (isLoading) {
    return (
      <div className="m-7 text-base font-medium text-center">Loading...</div>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <div className="m-7 text-base font-medium text-center">
        Error loading posts.
      </div>
    );
  }

  if (!data?.body.data) {
    return (
      <div className="m-7 text-base font-medium text-center">
        No posts found.
      </div>
    );
  }
  return (
    <>
      {data.body.data.map((p) => (
        <Post
          key={p.id}
          Post={{
            id: p.id,
            content: p.content,
            author: {
              id: p.author.id,
              email: p.author.email,
              full_name: p.author.full_name,
              joined_at: p.author.joined_at,
            },
            created_at: p.created_at,
          }}
        />
      ))}
    </>
  );
};
