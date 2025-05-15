import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ImageTemplate from "/public/assets/images/portfolio-image-template.png";

const NotFound = () => {
  return (
    <div className=" h-full flex justify-center items-center flex-col">
      <div className="relative">
        <Image
          src={ImageTemplate}
          className="w-[500px]"
          priority
          alt="Error image illustration"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-center flex flex-col gap-1 items-center">
          <p className="text-heading">
            404 <FontAwesomeIcon icon={faTriangleExclamation} />
          </p>
          <p>Page not found</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
