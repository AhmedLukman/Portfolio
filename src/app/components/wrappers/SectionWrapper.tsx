import { PropsWithChildren } from "react";

const SectionWrapper = ({ children }: PropsWithChildren) => {
  return <section className="mt-20 space-y-8">{children}</section>;
};

export default SectionWrapper;
