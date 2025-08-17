import Link from "next/link";
import { OptionMenuBtn } from "../common/OptionMenuBtn";
import { SidebarMenu } from "../common/SidebarMenu/SidebarMenu";
import { ThreadsIcon } from "../icons/ThreadsIcon";

export const Sidebar = () => {
  return (
    <div className=" backdrop-blur-sm lg:backdrop-blur-none fixed bottom-0 lg:top-0 lg:left-0 h-16 lg:h-full flex flex-col justify-center lg:justify-between items-center w-full lg:w-20 pb-2 lg:pb-0 p-1">
      <div className="p-4 hover:scale-[1.08] transition-all hidden lg:block">
        <Link href={"/"} className="w-full">
          <ThreadsIcon />
        </Link>
      </div>
      <SidebarMenu />
      <div className="hidden lg:block">
        <OptionMenuBtn />
      </div>
    </div>
  );
};
