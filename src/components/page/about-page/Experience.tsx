import React from "react";
import SectionHeader from "../../wrappers/SectionHeader";
import { EXPERIENCE } from "@/lib/data";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import ListItemWrapper from "./ListItemWrapper";
import { convertDate } from "@/lib/utils";
import SectionWrapper from "../../wrappers/SectionWrapper";
import Image from "next/image";

const Experience = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Experience</SectionHeader>
      <div className="relative w-full">
        {/* Timeline center line - hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-500 hidden lg:block"></div>

        <ul className="space-y-12">
          {EXPERIENCE.map(
            (
              { company, description, title, type, startDate, endDate, companyLogo },
              index
            ) => (
              <div
                key={index}
                className={`relative flex lg:${index % 2 === 0 ? "justify-end" : "justify-start"} justify-center`}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-600 z-10 hidden lg:block"></div>

                {/* Mobile vertical connector between items - hidden on desktop */}
                {index < EXPERIENCE.length - 1 && (
                  <div className="lg:hidden absolute top-full h-[3rem] left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-500"></div>
                )}

                {/* Horizontal connector line - hidden on mobile */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-slate-500 w-[calc(9.5%-8px)] ${
                    index % 2 === 0 ? "right-[50%]" : "left-[50%]"
                  } hidden lg:block`}
                />

                {/* Card container - full width on mobile, alternating on desktop */}
                <div
                  className={`w-full lg:w-[45%] ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                >
                  <ListItemWrapper index={index}>
                    <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200 border-slate-500">
                      <CardHeader
                        as="header"
                        className="flex justify-between flex-wrap gap-2"
                      >
                        <h3 className="purple-gradient text-xl">{title}</h3>
                        <Chip variant="bordered" className="text-body">
                          {type}
                        </Chip>
                      </CardHeader>
                      <CardBody as="p">{description}</CardBody>
                      <CardFooter
                        as="footer"
                        className="flex justify-between flex-wrap gap-2"
                      >
                        <div className="flex gap-2 items-center">
                          <Image alt={company} src={companyLogo} className="w-8 h-8 rounded-full" />
                          <p className="">{company}</p>
                        </div>
                        <small className="lg:mt-0 text-body">
                          <time dateTime={startDate}>
                            {convertDate(startDate)}
                          </time>{" "}
                          <span>| </span>
                          <time dateTime={endDate}>{convertDate(endDate)}</time>
                        </small>
                      </CardFooter>
                    </Card>
                  </ListItemWrapper>
                </div>
              </div>
            )
          )}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
