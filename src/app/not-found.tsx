import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import ImageTemplate from "/public/assets/images/portfolio-image-template.png"

const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative">
        <Image
          src={ImageTemplate}
          className="w-[500px]"
          priority
          alt="Error image illustration"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-1 text-center text-3xl font-bold">
          <p className="text-heading">
            404 <FontAwesomeIcon icon={faTriangleExclamation} />
            <br />
            Page not found
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
