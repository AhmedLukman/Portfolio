"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import ImageTemplate from "/public/assets/images/portfolio-image-template.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div className="relative">
        <Image
          src={ImageTemplate}
          className="w-[500px]"
          priority
          alt="Error image illustration"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-center flex flex-col items-center">
          <p className="text-heading">
            <FontAwesomeIcon icon={faCircleExclamation} className="mb-1" />
            <br />
            Something went wrong!
          </p>
        </div>
      </div>
      <Button onPress={() => reset()}>Try again</Button>
    </div>
  );
}
