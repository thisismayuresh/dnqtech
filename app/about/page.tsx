import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About D&Q",
  description: "This is About Page for D&Q Website",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About D&Q Technologies"
        description="D&Q Technologies is a leading IT company specializing in a wide range of services, including web application development, mobile application development, and cloud solutions. Our mission is to empower businesses with innovative technology solutions that enhance operational efficiency and drive growth."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
