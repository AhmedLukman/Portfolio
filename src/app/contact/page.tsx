import Image from "next/image";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";
import ContactForm from "../components/page/contact-page/ContactForm";

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHeader>Contact me</PageHeader>
      <ContactForm />
      <Image
        src="/assets/images/shakehands.png"
        className="object-contain absolute right-0 top-24 hidden 2xl:block"
        priority
        width={300}
        height={480}
        alt="Shaking hands with contract illustration"
      />
    </PageWrapper>
  );
};

export default ContactPage;
