import { Button } from "@heroui/button";

const SideNavFooter = () => {
  return (
    <footer className="flex justify-center">
      <Button
        variant="shadow"
        className="border-small border-white/50 bg-gradient-to-br from-indigo-500 to-pink-600 text-white shadow-pink-500/30"
      >
        Download CV
      </Button>
    </footer>
  );
};

export default SideNavFooter;
