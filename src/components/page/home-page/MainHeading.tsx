import PageHeader from "../../wrappers/PageHeader";

const MainHeading = () => {
  return (
    <PageHeader borderClassName="max-w-2xl">
      <span className="flex flex-col justify-center gap-0 sm:flex-row sm:gap-3">
        <span>Ahmed Lukman</span>
        <span className="rotate-90 text-[#ffc0cb] sm:rotate-0">|</span>
        <span className="purple-gradient">Full Stack Developer</span>
      </span>
    </PageHeader>
  );
};

export default MainHeading;
