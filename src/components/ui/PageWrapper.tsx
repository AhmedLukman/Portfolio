import React, { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto max-w-4xl py-12">{children}</div>;
};

export default PageWrapper;
