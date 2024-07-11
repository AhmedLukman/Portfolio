import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
const Mastery = () => {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <div className="flex gap-5 mt-8">
        <Card className="w-full h-72 group">
          <CardHeader className="absolute z-20 top-1 flex-col items-start">
            <h3 className="text-slate-200 font-bold text-xl">Front-End</h3>
          </CardHeader>
          <CardBody className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              aliquam.
            </p>
          </CardBody>
          <div className="inset-0 absolute bg-black/60 z-10" />
          <Image
            priority
            fill
            alt=""
            className="z-0 w-full h-full object-cover object-right"
            src="/assets/images/frontend.jpg"
          />
        </Card>

        <Card isPressable className="w-full h-72">
          <CardHeader className="absolute z-20 top-1 flex-col items-start">
            <h4 className="text-slate-200 font-bold text-xl">Back-End</h4>
          </CardHeader>
          <CardBody className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              aliquam.
            </p>
          </CardBody>
          <div className="inset-0 absolute bg-black/60 z-10" />
          <Image
            fill
            alt=""
            className="z-0 w-full h-full object-cover"
            src="/assets/images/backend.jpg"
          />
        </Card>
        <Card isPressable className="w-full h-72">
          <CardHeader className="absolute z-20 top-1 flex-col items-start">
            <h4 className="text-slate-200 font-bold text-xl">UI/UX</h4>
          </CardHeader>
          <CardBody className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              aliquam.
            </p>
          </CardBody>
          <div className="inset-0 absolute bg-black/60 z-10" />
          <Image
            fill
            alt=""
            className="z-0 w-full h-full object-cover"
            src="/assets/images/design.jpg"
          />
        </Card>
      </div>
    </section>
  );
};

export default Mastery;
