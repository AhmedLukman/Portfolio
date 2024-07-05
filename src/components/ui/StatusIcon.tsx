import React from "react";
import { Status } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";


const StatusIcon = ({ status }: {status: Status}) => {
  return (
    <>
      {status === Status.Completed && (
        <Tooltip content={Status.Completed} color="success">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
        </Tooltip>
      )}
      {status === Status.Pending && (
        <Tooltip content={Status.Pending} color="warning">
          <FontAwesomeIcon
            title="Pending"
            icon={faClock}
            className="text-yellow-500"
          />
        </Tooltip>
      )}
      {status === Status.Cancelled && (
        <Tooltip content={Status.Cancelled} color="danger">
          <FontAwesomeIcon
            title="Cancelled"
            icon={faBan}
            className="text-red-500"
          />
        </Tooltip>
      )}
    </>
  );
};

export default StatusIcon;
