"use client"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@heroui/button"
import Image from "next/image"
import ImageTemplate from "public/assets/images/portfolio-image-template.png"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative">
        <Image
          src={ImageTemplate}
          className="w-[500px]"
          priority
          alt="Error image illustration"
        />
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center text-3xl font-bold">
          <p className="text-heading">
            <FontAwesomeIcon icon={faCircleExclamation} className="mb-1" />
            <br />
            Something went wrong!
          </p>
        </div>
      </div>
      <Button onPress={() => reset()}>Try again</Button>
    </div>
  )
}
