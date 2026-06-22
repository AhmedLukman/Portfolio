"use client"

import { useNavigation } from "@/lib/contexts/NavigationContext"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@heroui/react"
import { Ripple } from "m3-ripple"
import SideNavContent from "./SideNavContent"

const MobileSideNav = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation()

  return (
    <>
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          isIconOnly
          variant="tertiary"
          aria-haspopup="menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="overflow-hidden bg-[#262c35]/80 text-white"
        >
          <Ripple />
          <FontAwesomeIcon
            aria-hidden="true"
            icon={isMobileMenuOpen ? faXmark : faBars}
            className="h-5 w-5"
          />
        </Button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            aria-label="Mobile navigation menu"
            id="mobile-navigation"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 h-full w-full bg-[#0a0e14]/50 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-sm flex-col justify-between p-6">
              <SideNavContent />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileSideNav
