import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Build Your Service-Based Web App with Us",
  description: "Get in touch to create innovative web applications tailored to your business needs.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Want to develop a powerful web application? Our team specializes in creating tailored service-based web apps to elevate your business. Reach out to discuss your project today!"
      />

      <Contact />
      
      <section className="mt-10 px-4">
        <h2 className="text-xl font-bold">Our Services</h2>
        <p className="mt-2 text-base">
          We offer a range of services to help you build the perfect web application:
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>Custom Web Application Development</li>
          <li>E-commerce Solutions</li>
          <li>Content Management Systems (CMS)</li>
          <li>API Development and Integration</li>
          <li>User Experience (UX) Design</li>
          <li>Cloud-Based Applications</li>
        </ul>
        <p className="mt-4 text-base">
          Let's work together to bring your vision to life! For inquiries, please email us at <a href="mailto:support-service@dnqtech.in" className="text-blue-500">support-service@dnqtech.in</a>.
        </p>
      </section>
    </>
  );
};

export default ContactPage;
