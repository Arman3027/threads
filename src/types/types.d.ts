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

export interface GetPostsApiQueryArgProps {
  search?: string;
  page?: number;
  limit?: number;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
export interface UserType {
  id: string;
  full_name: string;
  email: string;
  password: string;
  joined_at: string;
}

export interface RegisterBodyType extends Omit<UserType, "id" | "joined_at"> {
  confirm_password: string;
}

export type LoginBodyType = Pick<IUser, "email" | "password">;
