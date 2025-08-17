"use client";
import { useState } from "react";
import { SidebarBtn } from "../SidebarBtn/SidebarBtn";
import { SidebarMenuType } from "./type";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { usePathname } from "next/navigation";

export const SidebarMenu = () => {
  const pathname = usePathname();
  const [ActivedBtn, setActivedBtn] = useState<SidebarMenuType>(
    pathname === "/" ? "Home" : "search"
  );
  return (
    <div className="w-full flex flex-row lg:flex-col gap-6 p-1">
      <SidebarBtn
        isActive={ActivedBtn === "Home"}
        icon={<HomeIcon />}
        href="/"
        onClick={() => {
          setActivedBtn("Home");
        }}
      />
      <SidebarBtn
        isActive={ActivedBtn === "search"}
        icon={<SearchIcon />}
        href="/search"
        onClick={() => {
          setActivedBtn("search");
        }}
      />
    </div>
  );
};
