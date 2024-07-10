import React from 'react'
import {
  Card,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import Image from "next/image";
import SectionHeader from '@/components/ui/SectionHeader';
const Mastery = () => {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <div className="flex gap-5 mt-8">
        <Popover offset={10} placement="bottom">
          <PopoverTrigger>
            <Card isPressable className="w-full h-72">
              <CardHeader className="absolute z-20 top-1 flex-col items-start">
                <h4 className="text-slate-200 font-bold text-xl">Front-End</h4>
              </CardHeader>
              <div className="inset-0 absolute bg-black/60 z-10" />
              <Image
                fill
                alt=""
                className="z-0 w-full h-full object-cover object-right"
                src="/assets/images/frontend.jpg"
              />
            </Card>
          </PopoverTrigger>
          <PopoverContent className="bg-purple-900 text-white">
            <p className="p-2 max-w-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              cupiditate mollitia saepe sunt error numquam distinctio?
            </p>
          </PopoverContent>
        </Popover>
        <Popover offset={10} placement="bottom">
          <PopoverTrigger>
            <Card isPressable className="w-full h-72">
              <CardHeader className="absolute z-20 top-1 flex-col items-start">
                <h4 className="text-slate-200 font-bold text-xl">Back-End</h4>
              </CardHeader>
              <div className="inset-0 absolute bg-black/60 z-10" />
              <Image
                fill
                alt=""
                className="z-0 w-full h-full object-cover"
                src="/assets/images/backend.jpg"
              />
            </Card>
          </PopoverTrigger>
          <PopoverContent className="bg-purple-900 text-white">
            <p className="p-2 max-w-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              cupiditate mollitia saepe sunt error numquam distinctio?
            </p>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom" offset={10}>
          <PopoverTrigger>
            <Card isPressable className="w-full h-72">
              <CardHeader className="absolute z-20 top-1 flex-col items-start">
                <h4 className="text-slate-200 font-bold text-xl">UI/UX</h4>
              </CardHeader>
              <div className="inset-0 absolute bg-black/60 z-10" />
              <Image
                fill
                alt=""
                className="z-0 w-full h-full object-cover"
                src="/assets/images/design.jpg"
              />
            </Card>
          </PopoverTrigger>
          <PopoverContent className="bg-purple-900 text-white">
            <p className="p-2 max-w-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              cupiditate mollitia saepe sunt error numquam distinctio?
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}

export default Mastery