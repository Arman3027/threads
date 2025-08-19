import type { GetPostsApiQueryArgType, PostsType } from "@/types";
import api from "../api";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation<PostsType[], PostsType>({
      query: (newPost) => ({
        url: "/posts",
        method: "post",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
    getPosts: builder.query<PostsType[], GetPostsApiQueryArgType>({
      query: ({ page, search, limit }) => ({
        url: "/posts",
        method: "get",
        params: {
          search,
          page,
          limit,
        },
      }),
      providesTags: ["Post"],
    }),
    getPost: builder.query<PostsType, string>({
      query: (postId: string) => `/posts/${postId}`,
      providesTags: ["Post"],
    }),
  }),
});

export default postApi;
export const { useGetPostsQuery } = postApi;
