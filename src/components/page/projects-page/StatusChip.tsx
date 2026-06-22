import { ProjectStatus, TProjectStatus } from "@/lib/constants"
import { Chip } from "@heroui/react"

const StatusChip = ({ status }: { status: TProjectStatus }) => {
  return (
    <>
      {status === ProjectStatus.completed && (
        <Chip
          color="success"
          variant="primary"
          className="h-7! w-fit! max-w-fit! min-w-min! self-start! justify-between! rounded-full! bg-[#17c964]! px-1! py-0! text-sm! leading-5! font-normal! text-black!"
        >
          <Chip.Label className="px-2!">Completed</Chip.Label>
        </Chip>
      )}
      {status === ProjectStatus.pending && (
        <Chip
          color="warning"
          variant="primary"
          className="h-7! w-fit! max-w-fit! min-w-min! self-start! justify-between! rounded-full! bg-[#f5a524]! px-1! py-0! text-sm! leading-5! font-normal! text-black!"
        >
          <Chip.Label className="px-2!">{status}</Chip.Label>
        </Chip>
      )}
      {status === ProjectStatus.cancelled && (
        <Chip
          color="danger"
          variant="primary"
          className="h-7! w-fit! max-w-fit! min-w-min! self-start! justify-between! rounded-full! bg-[#f31260]! px-1! py-0! text-sm! leading-5! font-normal! text-white!"
        >
          <Chip.Label className="px-2!">Cancelled</Chip.Label>
        </Chip>
      )}
    </>
  )
}

export default StatusChip
