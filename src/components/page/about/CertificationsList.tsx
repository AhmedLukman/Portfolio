import ListItemWrapper from "@/components/ui/ListItemWrapper";
import { EXPERIENCE } from "@/lib/data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import React from "react";

const CertificationsList = () => {
  return (
    <ul className="w-full mt-8 space-y-8">
      {EXPERIENCE.map(
        ({ company, description, title, type, startDate, endDate }, index) => (
          <ListItemWrapper index={index} key={index}>
            <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200 border-slate-500">
              <CardHeader as="header">
                <h3 className="purple-gradient-text text-xl">{title}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-slate-300">{description}</p>
              </CardBody>
              <CardFooter as="footer" className="flex justify-between">
                <p className="text-slate-300">{company}</p>
                <time className="text-slate-300">{startDate}</time>
              </CardFooter>
            </Card>
          </ListItemWrapper>
        )
      )}
    </ul>
  );
};

export default CertificationsList;
