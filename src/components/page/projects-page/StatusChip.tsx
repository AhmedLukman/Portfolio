import { ProjectStatus, TProjectStatus } from "@/lib/constants"
import { Chip } from "@heroui/chip"

const StatusChip = ({ status }: { status: TProjectStatus }) => {
  return (
    <>
      {status === ProjectStatus.completed && (
        <Chip color="success">Completed</Chip>
      )}
      {status === ProjectStatus.pending && (
        <Chip color="warning">{status}</Chip>
      )}
      {status === ProjectStatus.cancelled && (
        <Chip color="danger">Cancelled</Chip>
      )}
    </>
  )
}

export default StatusChip
