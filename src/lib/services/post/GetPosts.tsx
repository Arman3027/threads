"use client";

import { Post } from "@/components/ui/Post";
import { useGetPostsQuery } from "@/store/services/posts/PostsApi";
import { PostsType, type GetPostsApiQueryArgProps } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

export const GetPosts = ({ search, limit = 10 }: GetPostsApiQueryArgProps) => {
  const [AllPosts, setAllPosts] = useState<PostsType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);
  const { data, isLoading, isError, error, isFetching } = useGetPostsQuery(
    {
      search,
      limit,
      page,
    },
    { skip: !hasMore }
  );

  useEffect(() => {
    if (data?.body?.data) {
      setAllPosts((prev) => {
        return [...prev, ...(data?.body?.data as PostsType[])];
      });

      if (data?.body?.data.length < limit) {
        setHasMore(false);
      }
    }
  }, [data]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching, hasMore]
  );

  if (isLoading) {
    return (
      <div className="m-7 text-base font-medium text-center">Loading...</div>
    );
  }

  if (isError) {
    return (
      <div className="m-7 text-base font-medium text-center">
        Error loading posts.
      </div>
    );
  }
  if (!isLoading && AllPosts.length === 0) {
    return (
      <div className="m-7 text-base font-medium text-center">
        No posts found.
      </div>
    );
  }
  if (data?.body.data) {
    return (
      <>
        {AllPosts.map((p, index) => {
          if (index === AllPosts.length - 1) {
            return (
              <div ref={lastPostRef} key={p.id}>
                <Post
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
              </div>
            );
          }

          return (
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
          );
        })}
        {isFetching && hasMore && (
          <div className="m-7 text-base font-medium text-center">
            Loading more...
          </div>
        )}
      </>
    );
  }
};
