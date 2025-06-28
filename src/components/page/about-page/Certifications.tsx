import React from "react";
import SectionHeader from "../../wrappers/SectionHeader";
import CertificationsList from "./CertificationsList";
import SectionWrapper from "../../wrappers/SectionWrapper";

const Certifications = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">
        Certifications &amp; Achievements
      </SectionHeader>
      <CertificationsList />
    </SectionWrapper>
  );
};

export default Certifications;
