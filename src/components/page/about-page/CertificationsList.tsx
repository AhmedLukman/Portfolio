import { CERTIFICATIONS } from "@/lib/data"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import Image from "next/image"
import ItemWrapper from "../../wrappers/ItemWrapper"
import { BorderButton } from "./BorderButton"

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
                className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
              >
                <div className="flex items-center gap-2">
                  <Image
                    alt={organization}
                    src={logo}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-body">{organization}</span>
                </div>
                <div className="flex w-full items-center justify-between sm:w-auto sm:gap-4">
                  <time dateTime={year} className="text-sm text-body">
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
  )
}

export default CertificationsList
