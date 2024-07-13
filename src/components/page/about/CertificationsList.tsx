import ListItemWrapper from "@/components/ui/ListItemWrapper";
import { BorderButton } from "@/components/ui/BorderButton";
import { CERTIFICATIONS } from "@/lib/data";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";

const CertificationsList = () => {
  return (
    <ul className="w-full mt-8 space-y-8">
      {CERTIFICATIONS.map(
        ({ organization, description, title, date, file }, index) => (
          <ListItemWrapper index={index} key={index}>
            <Card className="bg-transparent border hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-300 border-slate-500">
              <CardHeader as="header">
                <h3 className="purple-gradient-text text-xl">{title}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-slate-300">{description}</p>
              </CardBody>
              <CardFooter as="footer" className="flex justify-between">
                <p className="text-slate-300">{organization}</p>
                <div className="space-x-6">
                  <time className="text-slate-300">{date}</time>
                  <BorderButton
                    file={`${file}.pdf`}
                    borderRadius="2rem"
                    className="bg-[#0a0e14] border-slate-800"
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
