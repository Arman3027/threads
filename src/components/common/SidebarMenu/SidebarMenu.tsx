"use client";
import { useState } from "react";
import { SidebarBtn } from "../SidebarBtn/SidebarBtn";
import { SidebarMenuType } from "./type";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";

export const SidebarMenu = () => {
  const [ActivedBtn, setActivedBtn] = useState<SidebarMenuType>("Home");
  return (
    <div className="w-full flex flex-col gap-6 p-1">
      <SidebarBtn
        isActive={ActivedBtn === "Home"}
        icon={<HomeIcon />}
        href="/"
      />
      <SidebarBtn
        isActive={ActivedBtn === "search"}
        icon={<SearchIcon />}
        href="/search"
      />
    </div>
  );
};
