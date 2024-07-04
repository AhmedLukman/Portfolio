import React, { PropsWithChildren } from 'react'

const SectionHeader = ({children}: PropsWithChildren) => {
  return (
    <h2 className=" text-2xl text-slate-200 font-bold">
      {children}
    </h2>
  );
}

export default SectionHeader