import AnimatedWords from "@/components/page/home-page/AnimatedWords";
import CallToAction from "@/components/page/home-page/CallToAction";
import Introduction from "@/components/page/home-page/Introduction";
import MainHeading from "@/components/page/home-page/MainHeading";
import TechAndTools from "@/components/page/home-page/TechAndTools";
import Testimonials from "@/components/page/home-page/Testimonials";
import PageWrapper from "@/components/wrappers/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <MainHeading />
      <Introduction />
      <TechAndTools />
      <AnimatedWords />
      <Testimonials />
      <CallToAction />
    </PageWrapper>
  );
};

export default Home;
