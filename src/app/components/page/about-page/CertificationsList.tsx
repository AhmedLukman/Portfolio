import React from "react";
import ListItemWrapper from "./ListItemWrapper";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { CERTIFICATIONS } from "@/app/lib/data";
import { BorderButton } from "./BorderButton";

const CertificationsList = () => {
  return (
    <ul className="w-full mt-8 space-y-8">
      {CERTIFICATIONS.map(
        ({ organization, description, title, date, file }, index) => (
          <ListItemWrapper index={index} key={index}>
            <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-300 border-slate-500">
              <CardHeader as="h3" className="purple-gradient text-xl">
                {title}
              </CardHeader>
              <CardBody as="p" className="text-slate-300">
                {description}
              </CardBody>
              <CardFooter as="footer" className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-slate-300">{organization}</span>
                  <time className="text-slate-300 sm:hidden">{date}</time>
                </div>
                <div className="flex items-center sm:gap-4">
                  <time className="text-slate-300 hidden sm:block">{date}</time>
                  <BorderButton
                    file={`${file}.pdf`}
                    borderRadius="2rem"
                    className="bg-[#0a0e14] border-slate-800 ml-auto"
                  >
                    Download
                  </BorderButton>
                </div>
              </CardFooter>
            </Card>
          </ListItemWrapper>
        )
      )}
    </ul>
  );
};

export default CertificationsList;
