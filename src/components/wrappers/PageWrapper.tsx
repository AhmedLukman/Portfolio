import { cn } from "@heroui/theme"

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full max-w-4xl px-5 py-10 md:px-10 xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default PageWrapper
