import { Button } from "@nextui-org/react";
import React from "react";

const SideNavFooter = () => {
  return (
    <footer className="gap-4 flex items-center justify-center flex-col">
      <Button
        variant="shadow"
        className="text-white bg-gradient-to-br from-indigo-500 to-pink-600 border-small border-white/50 shadow-pink-500/30"
      >
        Download CV
      </Button>
    </footer>
  );
};

export default SideNavFooter;
