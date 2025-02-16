import Experience from "../components/page/about-page/Experience";
import Introduction from "../components/page/about-page/Introduction";
import Mastery from "../components/page/about-page/Mastery";
import WhyStandOut from "../components/page/about-page/WhyStandOut";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
      <Mastery />
      <WhyStandOut />
      <Experience />
    </PageWrapper>
  );
};

export default AboutPage;
