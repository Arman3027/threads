"use client";

import { MainLayout } from "@/components/common/MainLayout";
import { GetPosts } from "@/lib/services/post/GetPosts";
import type { MainPostsSectionProps } from "./type";
export const MainPostsSection = ({ title }: MainPostsSectionProps) => {
  return (
    <MainLayout title={title}>
      <GetPosts />
    </MainLayout>
  );
};
