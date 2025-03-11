import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Image
        src="/assets/images/404-image.png"
        width={500}
        height={500}
        priority
        alt="404 page not found image illustration"
      />
    </div>
  );
};

export default NotFound;
