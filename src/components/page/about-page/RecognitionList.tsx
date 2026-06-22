import ItemWrapper from "@/components/wrappers/ItemWrapper"
import { RECOGNITIONS } from "@/lib/data"
import { Card } from "@heroui/react"
import Link from "next/link"

const RecognitionList = () => {
  return (
    <ul className="space-y-8 md:grid-cols-2 xl:gap-10">
      {RECOGNITIONS.map((recognition, index) => (
        <ItemWrapper key={index} index={index}>
          <Card
            key={index}
            className="w-full gap-0! rounded-[14px]! border border-slate-500 bg-transparent p-3 hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200"
          >
            <Card.Header className="flex flex-wrap justify-between gap-2 p-3">
              <h3 className="text-xl">
                <span className="inline-block purple-gradient!">
                  {recognition.title}
                </span>
              </h3>
            </Card.Header>
            <Card.Footer className="flex justify-end p-3">
              <Link
                className="inline-flex items-center text-slate-200 underline transition-opacity hover:opacity-80 active:opacity-50"
                href={recognition.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </Card.Footer>
          </Card>
        </ItemWrapper>
      ))}
    </ul>
  )
}

export default RecognitionList
