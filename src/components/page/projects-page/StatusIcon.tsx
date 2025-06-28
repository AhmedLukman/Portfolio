import { ProjectStatus, TProjectStatus } from "@/lib/constants"
import { faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "@heroui/tooltip"

const StatusIcon = ({ status }: { status: TProjectStatus }) => {
  return (
    <>
      {status === ProjectStatus.completed && (
        <Tooltip content={ProjectStatus.completed} color="success">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
        </Tooltip>
      )}
      {status === ProjectStatus.pending && (
        <Tooltip content={ProjectStatus.pending} color="warning">
          <FontAwesomeIcon
            title="Pending"
            icon={faClock}
            className="text-yellow-500"
          />
        </Tooltip>
      )}
    </>
  )
}

export default StatusIcon
