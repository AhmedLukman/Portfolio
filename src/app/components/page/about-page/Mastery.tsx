import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import SectionHeader from "../../wrappers/SectionHeader";
import { MASTERY } from "@/app/lib/data";

const Mastery = () => {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <ul className="flex flex-col sm:flex-row gap-5 mt-8">
        {MASTERY.map(({ description, title, src }) => (
          <Card as="li" key={title} className="w-full h-72 group">
            <CardHeader className="absolute z-20 top-1 flex-col items-start">
              <h3 className="text-slate-200 text-xl">{title}</h3>
            </CardHeader>
            <CardBody className="z-20 absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-300">
              <p>{description}</p>
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
    </section>
  );
};

export default Mastery;
