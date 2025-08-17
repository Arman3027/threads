import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostsApiType } from "./type";

export const apiSlice = createApi({
  reducerPath: "api", // Unique name for the reducer
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsApiType[], void>({
      query: () => "posts",
    }),
    getPostById: builder.query<PostsApiType, number>({
      query: (id) => `posts/${id}`,
    }),
    createPost: builder.mutation<PostsApiType, Partial<PostsApiType>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});
