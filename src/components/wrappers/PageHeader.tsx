import { cn } from "@heroui/theme"
import { PropsWithChildren } from "react"
import GradientBorder from "../ui/GradientBorder"

const PageHeader = ({
  children,
  borderClassName = "max-w-xl",
}: PropsWithChildren & {
  borderClassName?: string
}) => {
  return (
    <header>
      <h1 className="mb-1 text-center text-2xl font-bold tracking-wide lg:text-3xl">
        {children}
      </h1>
      <GradientBorder className={cn("mx-auto", borderClassName)} />
    </header>
  )
}

export default PageHeader
