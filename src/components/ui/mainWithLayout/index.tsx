"use client";
import { ReportProblem } from "@/components/ui";
import { Sidebar } from "@/components/ui";
import { MainWithLayoutProps } from "./type";
import { ActionButton } from "@/components/common/ActionButton";

export default function MainWithLayout({ children }: MainWithLayoutProps) {
  return (
    <div className="relative flex justify-center items-center w-full">
      <ActionButton className="fixed top-0 right-0 mr-4 mt-4 hidden lg:block" />
      <div className="flex flex-col w-screen lg:w-[unset] z-0">{children}</div>
      <Sidebar />
      <ReportProblem />
    </div>
  );
}
