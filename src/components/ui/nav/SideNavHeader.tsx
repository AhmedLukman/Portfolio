import { Avatar } from "@nextui-org/react";
import React from "react";

const SideNavHeader = () => {
  return (
    <header className="flex items-center justify-center flex-col gap-3">
      <Avatar src="https://avatars.githubusercontent.com/u/4723117?v=4" />
      <div className="flex flex-col text-white items-center gap-1.5">
        <p className=" text-white tracking-wide">Ahmed Lukman</p>
        <span className="relative inline-flex  overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Developer
          </span>
        </span>
      </div>
    </header>
  );
};

export default SideNavHeader;
