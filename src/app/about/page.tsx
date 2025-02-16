import Experience from "../components/page/about-page/Experience";
import Introduction from "../components/page/about-page/Introduction";
import Mastery from "../components/page/about-page/Mastery";
import { WhyStandOutWithNoSSR } from "../components/page/about-page/WhyStandOutWithNoSSR";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
      <Mastery />
      <WhyStandOutWithNoSSR />
      <Experience />
    </PageWrapper>
  );
};

export default AboutPage;
