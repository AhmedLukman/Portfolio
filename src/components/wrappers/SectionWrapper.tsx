import { cn } from "@heroui/theme";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={cn("mt-10 space-y-8 xl:mt-12", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
