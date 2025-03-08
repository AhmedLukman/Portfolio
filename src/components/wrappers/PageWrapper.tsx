import { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto max-w-4xl py-10 px-5 md:px-10 xl:px-0">{children}</div>
  );
};

export default PageWrapper;