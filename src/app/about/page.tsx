import Introduction from "../components/page/about-page/Introduction";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
    </PageWrapper>
  );
};

export default AboutPage;
