import Link from "next/link";
import { OptionMenuBtn } from "../common/OptionMenuBtn";
import { SidebarMenu } from "../common/SidebarMenu/SidebarMenu";
import { ThreadsIcon } from "../icons/ThreadsIcon";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full flex flex-col justify-between items-center w-20 p-1">
      <div className="p-4  hover:scale-[1.08] transition-all">
        <Link href={"/"} className="w-full">
          <ThreadsIcon />
        </Link>
      </div>
      <SidebarMenu />
      <OptionMenuBtn />
    </div>
  );
};
