"use client";

import { PostSkeleton } from "@/components/common/Loadings/PostSkeleton";
import { Post } from "@/components/ui/Post";
import { useGetPostsQuery } from "@/store/services/posts";
import { PostsType, type GetPostsApiQueryArgProps } from "@/types";
import { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";

export const GetPosts = ({ search, limit = 10 }: GetPostsApiQueryArgProps) => {
  const [allPosts, setAllPosts] = useState<PostsType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);
  const { data, isLoading, isError, isFetching } = useGetPostsQuery(
    {
      search,
      limit,
      page,
    },
    { skip: !hasMore }
  );
  useEffect(() => {
    setAllPosts([]);
    setPage(1);
    setHasMore(true);
  }, [search, limit]);

  useEffect(() => {
    if (data?.body?.data) {
      setAllPosts((prev) => {
        return [...prev, ...(data?.body?.data as PostsType[])];
      });

      if (data?.body?.data.length < limit) {
        setHasMore(false);
      }
    }
  }, [data, limit]);

  if (isLoading) {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  }
  if (isError) {
    return (
      <div className="flex h-24 w-full items-center justify-center text-base font-medium text-center">
        Error loading posts.
      </div>
    );
  }
  if (!isLoading && allPosts.length === 0) {
    return (
      <div className="flex h-24 w-full items-center justify-center text-base font-medium text-center">
        No posts found.
      </div>
    );
  }
  if (data?.body.data) {
    return (
      <Virtuoso
        className="no-scrollbar"
        data={allPosts}
        endReached={() => {
          if (!isFetching && hasMore) {
            setPage((prev) => prev + 1);
          }
        }}
        overscan={200}
        useWindowScroll
        itemContent={(index, post) => (
          <Post
            Post={{
              id: post.id,
              content: post.content,
              author: {
                id: post.author.id,
                email: post.author.email,
                full_name: post.author.full_name,
                joined_at: post.author.joined_at,
              },
              created_at: post.created_at,
            }}
            className={index === 0 ? "border-t-0" : ""}
          />
        )}
      />
    );
  }
};
