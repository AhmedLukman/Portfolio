"use client"

import { Button } from "@heroui/react"
import { Ripple } from "m3-ripple"

const SideNavFooter = () => {
  return (
    <footer className="flex justify-center">
      <Button
        variant="primary"
        className="h-10 min-w-20 overflow-hidden rounded-xl border border-white/50 bg-linear-to-br from-indigo-500 to-pink-600 font-normal text-white shadow-lg shadow-pink-500/30 transition duration-150 hover:opacity-80 data-[hovered=true]:opacity-80"
      >
        <Ripple />
        Download CV
      </Button>
    </footer>
  )
}

export default SideNavFooter
