import React from "react";
import type HttpStatusCode from "@/lib/constants/HttpStatusCode";

export type StatusCode = HttpStatusCode;
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
export interface PostIdProps {
  postId: string;
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

export type LoginBodyType = Pick<UserType, "email" | "password">;

export interface ReportType {
  id: string;
  message: string;
}

export type AddRemportBodyType = Omit<ReportType, "id">;

import type { IUser } from "./user";
import type { IPaginationOptions } from "./pagination";
import { PaginationType } from "./responseTypes";

export interface AddPostsBodyType extends Pick<PostsType, "content"> {
  author: string;
}

export interface PostsOptionType extends Omit<PaginationoptionsType, "data"> {
  search?: string;
}

export type AddPostsInput = Pick<PostsType, "content">;
export type AddPostsForPost = {
  content: string;
  created_at: string;
};
