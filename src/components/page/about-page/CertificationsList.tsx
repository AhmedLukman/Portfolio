import React from "react";
import ItemWrapper from "../../wrappers/ItemWrapper";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { CERTIFICATIONS } from "@/lib/data";
import { BorderButton } from "./BorderButton";
import Image from "next/image";

const CertificationsList = () => {
  return (
    <ul className="w-full space-y-8">
      {CERTIFICATIONS.map(
        ({ organization, description, title, year, file, logo }, index) => (
          <ItemWrapper index={index} key={index}>
            <Card className="border border-slate-500 bg-transparent hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-300">
              <CardHeader as="h3">
                <span className="purple-gradient text-xl">{title}</span>
              </CardHeader>
              <CardBody as="p">{description}</CardBody>
              <CardFooter
                as="footer"
                className="flex flex-row items-center justify-between"
              >
                <div className="flex flex-col text-body">
                  <div className="flex items-center gap-2">
                    <Image
                      alt={organization}
                      src={logo}
                      className="h-8 w-8 rounded-full"
                    />
                    <span>{organization}</span>
                  </div>
                  <time className="sm:hidden">{year}</time>
                </div>
                <div className="flex items-center sm:gap-4">
                  <time
                    dateTime={year}
                    className="hidden text-sm text-body sm:block"
                  >
                    {year}
                  </time>
                  <BorderButton
                    file={`${file}.pdf`}
                    borderRadius="2rem"
                    className="ml-auto border-slate-800 bg-[#0a0e14]"
                  >
                    Download
                  </BorderButton>
                </div>
              </CardFooter>
            </Card>
          </ItemWrapper>
        ),
      )}
    </ul>
  );
};

export default CertificationsList;
