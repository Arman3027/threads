"use client";
import { useGetPostsQuery } from "@/store/services/posts/postsApi";
import { GetPostsApiQueryArgType } from "@/types";

export const GetPosts = ({
  search,
  limit = 10,
  page = 1,
}: GetPostsApiQueryArgType) => {
  const { data, isLoading, isError, error } = useGetPostsQuery({
    search,
    limit,
    page,
  });
  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return error;
  }
  if (data) {
    return data;
  }
};
