import { Status } from "@/lib/constants";
import { Chip } from "@nextui-org/react";
import React from "react";

const StatusChip = ({ status }: { status: Status }) => {
  return (
    <>
      {status === Status.Completed && (
        <Chip color="success" className="text-white">
          Completed
        </Chip>
      )}
      {status === Status.Pending && (
        <Chip color="warning" className="text-white">
          {status}
        </Chip>
      )}
      {status === Status.Cancelled && (
        <Chip color="danger" className="text-white">
          {status}
        </Chip>
      )}
    </>
  );
};

export default StatusChip;
