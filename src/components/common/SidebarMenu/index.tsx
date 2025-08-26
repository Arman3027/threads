"use client";
import { useEffect, useState } from "react";
import { SidebarBtn } from "../SidebarBtn";
import type { SidebarMenuType } from "./type";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { usePathname } from "next/navigation";

export const SidebarMenu = () => {
  const pathname = usePathname();
  const [ActivedBtn, setActivedBtn] = useState<SidebarMenuType>(
    pathname === "/" ? "Home" : pathname === "/search" ? "search" : ""
  );
  useEffect(() => {
    setActivedBtn(
      pathname === "/" ? "Home" : pathname === "/search" ? "search" : ""
    );
  }, [pathname]);
  return (
    <div className="w-full flex flex-row lg:flex-col gap-6 p-1">
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
