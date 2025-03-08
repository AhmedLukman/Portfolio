import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import SectionHeader from "../../wrappers/SectionHeader";
import { MASTERY } from "@/lib/data";
import SectionWrapper from "../../wrappers/SectionWrapper";

const Mastery = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <ul className="flex flex-col sm:flex-row gap-5">
        {MASTERY.map(({ description, title, src }) => (
          <Card
            as="li"
            key={title}
            className="w-full h-72 group border border-slate-300"
          >
            <CardHeader
              as="h3"
              className="absolute z-20 top-1 text-slate-200 text-xl"
            >
              {title}
            </CardHeader>
            <CardBody
              as="p"
              className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300"
            >
              {description}
            </CardBody>
            <div className="inset-0 absolute bg-black/60 z-10" aria-hidden />
            <Image
              priority
              fill
              alt={title}
              sizes="(max-width: 640px) 100vw, 33vw"
              className="z-0 object-cover"
              src={src}
            />
          </Card>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Mastery;
