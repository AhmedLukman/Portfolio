import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { MASTERY } from "@/lib/data";
const Mastery = () => {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <div className="flex gap-5 mt-8">
        {MASTERY.map(({description, title,src}) => (
          <Card key={title} className="w-full h-72 group">
            <CardHeader className="absolute z-20 top-1 flex-col items-start">
              <h3 className="text-slate-200 font-bold text-xl">{title}</h3>
            </CardHeader>
            <CardBody className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
              <p>
                {description}
              </p>
            </CardBody>
            <div className="inset-0 absolute bg-black/60 z-10" />
            <Image
              priority
              fill
              alt=""
              className="z-0 w-full h-full object-cover"
              src={src}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Mastery;
