import React from "react";

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

export interface GetPostsApiQueryArgType {
  search?: string;
  page?: number;
  limit?: number;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
