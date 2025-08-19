"use client";

import { MainLayout } from "@/components/common/MainLayout";
import { GetPosts } from "@/lib/services/post/GetPosts";
import { Post } from "../Post";
import type { MainPostsSectionProps } from "./type";
import type { PostsType } from "@/types";

export const MainPostsSection = ({ title }: MainPostsSectionProps) => {
  return (
    <MainLayout title={title}>
      <GetPosts />
    </MainLayout>
  );
};
