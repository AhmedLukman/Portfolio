import { Button } from "@heroui/button";

const SideNavFooter = () => {
  return (
    <footer className="flex justify-center">
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
