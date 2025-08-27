"use client";

import { GetPosts } from "@/lib/services/post/GetPosts";
import type { MainPostsSectionProps } from "./type";
import dynamic from "next/dynamic";

const MainLayout = dynamic<{
  title: string;
  children: React.ReactNode;
}>(
  () => import("@/components/common/MainLayout").then((mod) => mod.MainLayout),
  {
    loading: () => <div></div>,
  }
);

export const MainPostsSection = ({ title }: MainPostsSectionProps) => {
  return (
    <MainLayout title={title}>
      <GetPosts />
    </MainLayout>
  );
};
