import {
  ClientTooltip,
  ClientTooltipContent,
  ClientTooltipTrigger,
} from "@/components/ui/ClientTooltip"
import { ProjectStatus, TProjectStatus } from "@/lib/constants"
import {
  faCheckCircle,
  faClock,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { cn } from "@heroui/react"

const statusIconClassName =
  "inline-flex h-7 items-center justify-center leading-none"

const StatusIcon = ({ status }: { status: TProjectStatus }) => {
  const icon =
    status === ProjectStatus.completed
      ? faCheckCircle
      : status === ProjectStatus.pending
        ? faClock
        : faTimesCircle

  return (
    <ClientTooltip delay={0}>
      <ClientTooltipTrigger className={statusIconClassName}>
        <span className={statusIconClassName}>
          <FontAwesomeIcon
            icon={icon}
            className={cn("block", {
              "text-green-500": status === ProjectStatus.completed,
              "text-yellow-500": status === ProjectStatus.pending,
              "text-red-500": status === ProjectStatus.cancelled,
            })}
          />
        </span>
      </ClientTooltipTrigger>
      <ClientTooltipContent
        className={cn(
          "rounded-[13px]! px-2.5! py-1! text-sm! leading-5!",
          {
            "bg-green-500! text-black!": status === ProjectStatus.completed,
            "bg-yellow-500! text-black!": status === ProjectStatus.pending,
            "bg-red-500! text-white!": status === ProjectStatus.cancelled,
          },
        )}
      >
        <span className="text-inherit">{status}</span>
      </ClientTooltipContent>
    </ClientTooltip>
  )
}

export default StatusIcon
