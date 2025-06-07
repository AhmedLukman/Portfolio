import { ProjectStatus, TProjectStatus } from "@/lib/constants";
import { Chip } from "@heroui/chip";

const StatusChip = ({ status }: { status: TProjectStatus }) => {
  return (
    <>
      {status === ProjectStatus.completed && (
        <Chip color="success" className="text-white">
          Completed
        </Chip>
      )}
      {status === ProjectStatus.pending && (
        <Chip color="warning" className="text-white">
          {status}
        </Chip>
      )}
    </>
  );
};

export default StatusChip;
