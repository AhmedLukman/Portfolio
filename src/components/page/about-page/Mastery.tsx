import { MASTERY } from "@/lib/data"
import { Card, CardHeader } from "@heroui/card"
import Image from "next/image"
import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"
import MasteryBody from "./MasteryBody"

const Mastery = () => {
  const getSizesByIndex = (index: number) => {
    switch (index) {
      case 0:
        return "(min-width: 1280px) 284px, (min-width: 1220px) 257px, (min-width: 1040px) calc(17.5vw + 47px), (min-width: 880px) calc(7.14vw + 184px), (min-width: 640px) calc(5vw + 197px), calc(100vw - 57px)"
      case 1:
        return "(min-width: 640px) 287px, (min-width: 380px) calc(100vw - 57px), calc(26.67vw + 207px)"
      case 2:
        return "(min-width: 640px) 430px, (min-width: 520px) calc(100vw - 57px), 413px"
    }
  }

  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Mastery</SectionHeader>
      <ul className="flex flex-col gap-5 sm:flex-row">
        {MASTERY.map(({ description, title, src }, index) => (
          <Card
            as="li"
            key={title}
            className="group h-72 w-full border border-slate-300"
          >
            <CardHeader as="h3" className="absolute top-1 z-20 text-xl">
              {title}
            </CardHeader>
            <MasteryBody>{description}</MasteryBody>
            <div className="absolute inset-0 z-10 bg-black/60" aria-hidden />
            <Image
              priority
              fill
              alt={title}
              sizes={getSizesByIndex(index)}
              className="z-0 object-cover"
              src={src}
            />
          </Card>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default Mastery
