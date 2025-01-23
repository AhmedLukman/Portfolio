import Introduction from "../components/page/about-page/Introduction";
import Mastery from "../components/page/about-page/Mastery";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
      <Mastery />
    </PageWrapper>
  );
};

export default AboutPage;
