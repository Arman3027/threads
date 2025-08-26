import type {
  CustomResponseType,
  GetPostsApiQueryArgProps,
  PostsType,
  AddPostsForPost,
} from "@/types";
import api from "../api";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation<CustomResponseType<void>, AddPostsForPost>({
      query: (newPost) => ({
        url: "/posts",
        method: "post",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
    getPosts: builder.query<
      CustomResponseType<PostsType[]>,
      GetPostsApiQueryArgProps
    >({
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
    getPost: builder.query<CustomResponseType<PostsType>, string>({
      query: (postId: string) => `/posts/${postId}`,
      providesTags: ["Post"],
    }),
  }),
});

export default postApi;
export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery } =
  postApi;
