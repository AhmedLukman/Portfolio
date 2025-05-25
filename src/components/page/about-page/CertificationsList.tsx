import React from "react";
import ListItemWrapper from "./ListItemWrapper";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { CERTIFICATIONS } from "@/lib/data";
import { BorderButton } from "./BorderButton";

const CertificationsList = () => {
  return (
    <ul className="w-full space-y-8">
      {CERTIFICATIONS.map(
        ({ organization, description, title, year, file }, index) => (
          <ListItemWrapper index={index} key={index}>
            <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-300 border-slate-500">
              <CardHeader as="h3">
                <span className="purple-gradient text-xl">{title}</span>
              </CardHeader>
              <CardBody as="p">{description}</CardBody>
              <CardFooter
                as="footer"
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col text-body">
                  <span>{organization}</span>
                  <time className="sm:hidden">{year}</time>
                </div>
                <div className="flex items-center sm:gap-4">
                  <time className="text-body hidden sm:block">{year}</time>
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
