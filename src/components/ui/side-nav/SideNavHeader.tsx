import Image from "next/image"
import Logo from "public/assets/images/logo.png"

const SideNavHeader = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-5">
      <Image src={Logo} alt="Logo" width={40} height={40} />
      <span className="relative inline-flex overflow-hidden rounded-xl p-px focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 focus:outline-hidden">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Developer
        </span>
      </span>
    </header>
  )
}

export default SideNavHeader
