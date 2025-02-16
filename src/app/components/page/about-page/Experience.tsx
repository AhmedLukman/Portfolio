import React from "react";
import SectionHeader from "../../wrappers/SectionHeader";
import { EXPERIENCE } from "@/app/lib/data";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import ListItemWrapper from "./ListItemWrapper";
import { convertDate } from "@/app/lib/utils";

const Experience = () => {
  return (
    <section className="mt-14">
      <SectionHeader className="text-center">Experience</SectionHeader>
      <ul className="w-full mt-8 space-y-8">
        {EXPERIENCE.map(
          (
            { company, description, title, type, startDate, endDate },
            index
          ) => (
            <ListItemWrapper index={index} key={index}>
              <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200 border-slate-500">
                <CardHeader as="header" className="flex justify-between">
                  <h3 className="purple-gradient text-xl">{title}</h3>
                  <Chip variant="bordered" className="text-slate-300">
                    {type}
                  </Chip>
                </CardHeader>
                <CardBody>
                  <p className="text-slate-300">{description}</p>
                </CardBody>
                <CardFooter as="footer" className="flex justify-between">
                  <p className="text-slate-300">{company}</p>
                  <div>
                    <time dateTime={startDate} className="text-slate-300">
                      {convertDate(startDate)}
                    </time>{" "}
                    <span className="text-slate-300">| </span>
                    <time dateTime={endDate} className="text-slate-300">
                      {convertDate(endDate)}
                    </time>
                  </div>
                </CardFooter>
              </Card>
            </ListItemWrapper>
          )
        )}
      </ul>
    </section>
  );
};

export default Experience;
