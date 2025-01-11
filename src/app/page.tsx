import Introduction from "./components/page/home-page/Introduction";
import AnimatedWords from "./components/page/home-page/AnimatedWords";
import PageWrapper from "./components/wrappers/PageWrapper";
import TechAndTools from "./components/page/home-page/TechAndTools";
import Testimonials from "./components/page/home-page/Testimonials";
import CallToAction from "./components/page/home-page/CallToAction";
import MainHeading from "./components/page/home-page/MainHeading";

const Home = () => {
  return (
    <PageWrapper>
      <MainHeading />
      <Introduction />
      <TechAndTools />
      <Testimonials />
      <AnimatedWords />
      <CallToAction />
    </PageWrapper>
  );
};

export default Home;
