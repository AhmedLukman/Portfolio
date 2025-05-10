import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import SectionHeader from "../../wrappers/SectionHeader";
import { MASTERY } from "@/lib/data";
import SectionWrapper from "../../wrappers/SectionWrapper";

const Mastery = () => {
  const getSizesByIndex = (index: number) => {
    switch (index) {
      case 0:
        return "(min-width: 1280px) 284px, (min-width: 1220px) 257px, (min-width: 1040px) calc(17.5vw + 47px), (min-width: 880px) calc(7.14vw + 184px), (min-width: 640px) calc(5vw + 197px), calc(100vw - 57px)";
      case 1:
        return "(min-width: 640px) 287px, (min-width: 380px) calc(100vw - 57px), calc(26.67vw + 207px)";
      case 2:
        return "(min-width: 640px) 430px, (min-width: 520px) calc(100vw - 57px), 413px";
    }
  };

  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <ul className="flex flex-col sm:flex-row gap-5">
        {MASTERY.map(({ description, title, src }, index) => (
          <Card
            as="li"
            key={title}
            className="w-full h-72 group border border-slate-300"
          >
            <CardHeader as="h3" className="absolute z-20 top-1  text-xl">
              {title}
            </CardHeader>
            <CardBody
              as="p"
              className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {description}
            </CardBody>
            <div className="inset-0 absolute bg-black/60 z-10" aria-hidden />
            <Image
              priority
              fill
              alt={title}
              sizes={getSizesByIndex(index)}
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
