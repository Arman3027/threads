export interface PostsType {
  id: string;
  content: string;
  author: {
    id: string;
    email: string;
    full_name: string;
    joined_at: string;
  };
  created_at: string;
}

export interface GetPostsApiQueryArgProps {
  search?: string;
  page?: number;
  limit?: number;
}

export interface PostIdProps {
  postId: string;
}

export interface AddPostsBodyType extends Pick<PostsType, "content"> {
  author: string;
}

export interface PostsOptionType extends Omit<PaginationoptionsType, "data"> {
  search?: string;
}

export type AddPostsInputType = Pick<PostsType, "content">;
export type AddPostsForPostType = {
  content: string;
  created_at: string;
};
