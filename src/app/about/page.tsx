import PageHeader from "@/components/ui/PageHeader";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Card,
  CardHeader,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <section className="mt-16">
        <p className="text-slate-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          recusandae perferendis accusantium deserunt natus soluta veniam
          mollitia obcaecati animi ad ducimus, beatae similique aliquid
          distinctio non eos asperiores placeat magni. Odio enim iste magnam
          aliquid alias exercitationem molestias at, maiores numquam saepe
          dignissimos similique accusantium fugit, dolores ratione modi aperiam
          nisi placeat reprehenderit officiis minus! Quae iure excepturi quam!
          Possimus!
        </p>
        <br />
        <p className="text-slate-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          eligendi distinctio molestiae ab culpa natus libero, rem aliquam?
          Obcaecati eaque sit ratione ab laudantium deleniti ipsum est. Est,
          quas recusandae! Autem quis distinctio beatae temporibus, quibusdam
          excepturi. A ut maiores minus quod omnis aperiam, aut esse maxime
          quibusdam libero illum mollitia incidunt adipisci tenetur beatae
          similique dolores. Dolores, eum obcaecati.
        </p>
        <br />
        <p className="text-slate-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem natus
          amet commodi architecto ratione doloribus quos, inventore sit dolorem
          consequuntur nisi, velit odio libero. Obcaecati sit quam id adipisci
          debitis. Aperiam fuga officiis recusandae consectetur facilis, et enim
          autem vitae doloribus, mollitia itaque earum accusamus nostrum.
          Corrupti placeat amet corporis vitae veniam tenetur laudantium at
          cumque animi? Dolor, magnam ex.
        </p>
      </section>
      <section className="mt-14">
        <SectionHeader className="text-center">Mastery</SectionHeader>
        <div className="flex gap-5 mt-8">
          <Popover offset={10} placement="bottom">
            <PopoverTrigger>
              <Card isPressable className="w-full h-72">
                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                  <h4 className="text-slate-200 font-bold text-xl">
                    Front-End
                  </h4>
                </CardHeader>
                <div className="inset-0 absolute bg-slate-900/60 z-10" />
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover object-right"
                  src="/assets/images/design2.jpg"
                />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="bg-[#0a0e14] text-white">
              <p className="p-2 max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cupiditate mollitia saepe sunt error numquam distinctio?
              </p>
            </PopoverContent>
          </Popover>
          <Popover offset={10} placement="bottom">
            <PopoverTrigger>
              <Card isPressable className="w-full h-72">
                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                  <h4 className="text-slate-200 font-bold text-xl">Back-End</h4>
                </CardHeader>
                <div className="inset-0 absolute bg-slate-900/60 z-10" />
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="/assets/images/backend.jpg"
                />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="bg-[#0a0e14] text-white">
              <p className="p-2 max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cupiditate mollitia saepe sunt error numquam distinctio?
              </p>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom" offset={10}>
            <PopoverTrigger>
              <Card isPressable className="w-full h-72">
                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                  <h4 className="text-slate-200 font-bold text-xl">UI/UX</h4>
                </CardHeader>
                <div className="inset-0 absolute bg-slate-900/60 z-10" />
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="/assets/images/design.jpg"
                />
              </Card>
            </PopoverTrigger>
            <PopoverContent className="bg-[#0a0e14] text-white">
              <p className="p-2 max-w-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cupiditate mollitia saepe sunt error numquam distinctio?
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
