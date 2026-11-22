"use client"

import { RippleLink } from "@/components/ui/Ripple"

const SideNavFooter = () => {
  return (
    <footer className="flex justify-center">
      <RippleLink
        href="/Ahmed-Lukman-Software-Engineer-Resume.pdf"
        download
        prefetch={false}
        className="inline-flex items-center justify-center px-4 h-10 min-w-20 overflow-hidden rounded-xl border border-white/50 bg-linear-to-br from-indigo-500 to-pink-600 font-normal text-white shadow-lg shadow-pink-500/30 transition duration-150 hover:opacity-80 data-[hovered=true]:opacity-80"
      >
        Download Resume
      </RippleLink>
    </footer>
  )
}

export default SideNavFooter
