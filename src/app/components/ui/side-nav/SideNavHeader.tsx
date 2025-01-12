import { Avatar } from "@nextui-org/avatar";

const SideNavHeader = () => {
  return (
    <header className="flex items-center justify-center flex-col gap-3">
      <Avatar src="/assets/images/avatar.svg" size="lg" className="bg-gradient-to-br from-pink-200 to-purple-200" alt="" />
      <div className="flex flex-col text-white items-center gap-1.5">
        <h2 className=" text-white tracking-wide">Ahmed Lukman</h2>
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
