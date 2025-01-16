"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SideNavContent from "./SideNavContent";
import { useState } from "react";

const MobileSideNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-[#262c35]/80 text-white"
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faXmark : faBars}
            className="h-5 w-5"
          />
        </Button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 w-full h-full bg-[#0a0e14]/50 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col justify-between p-6 h-full max-w-sm mx-auto">
              <SideNavContent />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSideNav;
