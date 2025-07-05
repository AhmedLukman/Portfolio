import ItemWrapper from "@/components/wrappers/ItemWrapper"
import { RECOGNITIONS } from "@/lib/data"
import { Card, CardFooter, CardHeader } from "@heroui/card"
import { Link } from "@heroui/link"
import NextLink from "next/link"

const RecognitionList = async () => {
  return (
    <ul className="space-y-8 md:grid-cols-2 xl:gap-10">
      {RECOGNITIONS.map((recognition, index) => (
        <ItemWrapper key={index} index={index}>
          <Card
            key={index}
            as="li"
            className="w-full border border-slate-500 bg-transparent p-3 hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200"
          >
            <CardHeader
              as="header"
              className="flex flex-wrap justify-between gap-2"
            >
              <h3 className="purple-gradient text-xl">{recognition.title}</h3>
            </CardHeader>
            <CardFooter as="footer" className="flex justify-end">
              <Link
                isExternal
                as={NextLink}
                className="text-slate-200 underline"
                href={recognition.url}
              >
                Visit
              </Link>
            </CardFooter>
          </Card>
        </ItemWrapper>
      ))}
    </ul>
  )
}

export default RecognitionList
