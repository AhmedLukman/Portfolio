import { cn } from "@heroui/theme"
import { PropsWithChildren } from "react"

const SectionHeader = ({
  children,
  className,
  id,
}: PropsWithChildren & {
  className?: string
  id?: string
}) => {
  return (
    <h2 id={id} className={cn("text-xl font-semibold lg:text-2xl", className)}>
      {children}
    </h2>
  )
}

export default SectionHeader
