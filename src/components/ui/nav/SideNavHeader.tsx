import { Avatar, Chip } from '@nextui-org/react';
import React from 'react'

const SideNavHeader = () => {
  return (
    <header className="flex items-center justify-center flex-col gap-3">
      <Avatar src="https://avatars.githubusercontent.com/u/4723117?v=4" />
      <div className="flex flex-col text-white items-center gap-1.5">
        <p className=" text-white font-bold tracking-wide">Ahmed Lukman</p>
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-600 border-small border-white/50 shadow-pink-500/20",
            content: "drop-shadow shadow-black text-white text-xs",
          }}
        >
          Developer
        </Chip>
      </div>
    </header>
  );
}

export default SideNavHeader