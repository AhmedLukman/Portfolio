import ListItemWrapper from "@/components/ui/ListItemWrapper";
import StatusChip from "@/components/ui/StatusChip";
import { Status } from "@/lib/constants";
import { EXPERIENCE } from "@/lib/data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import React from "react";

const ExperienceList = () => {
  return (
    <ul className="w-full mt-8 space-y-8">
      {EXPERIENCE.map(
        ({ company, description, title, type, startDate, endDate }, index) => (
          <ListItemWrapper index={index} key={index}>
            <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200 border-slate-500">
              <CardHeader as="header" className="flex justify-between">
                <h3 className="purple-gradient-text text-xl">{title}</h3>
                <div className="space-x-3">
                  <Chip variant="bordered" className="text-slate-300">
                    {type}
                  </Chip>
                  <StatusChip status={Status.Completed} />
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-slate-300">{description}</p>
              </CardBody>
              <CardFooter as="footer" className="flex justify-between">
                <p className="text-slate-300">{company}</p>
                <div>
                  <time dateTime={startDate} className="text-slate-300">{startDate}</time>{" "}
                  <span className="text-slate-300">| </span>
                  <time dateTime={endDate} className="text-slate-300">{endDate}</time>
                </div>
              </CardFooter>
            </Card>
          </ListItemWrapper>
        )
      )}
    </ul>
  );
};

export default ExperienceList;
