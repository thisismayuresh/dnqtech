import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "Explore insights and trends in IT services.",
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description={
          "At D&Q Technologies, we specialize in delivering innovative IT solutions tailored to meet the unique needs of businesses across various industries. Our team of experienced professionals is dedicated to providing top-notch services that empower your business. Our core services include custom software development, cloud computing solutions, cybersecurity services, IT consulting and strategy, e-commerce development, and API development and integration. We leverage the latest technologies to enhance operational efficiency, drive digital transformation, and support your business growth. Partner with us to transform your IT infrastructure and achieve your strategic goals."

        }
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
