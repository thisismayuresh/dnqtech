import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Innovative Solutions by D&Q Technologies",
  description: "Explore our innovative products designed to enhance your business efficiency.",
};

const ProductsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Products"
        description="Discover our innovative solutions crafted to elevate your business operations and drive success."
      />

      <section className="mt-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Empowering Businesses with Innovation</h2>
          <p className="mt-2 text-lg text-gray-700">
            At D&Q Technologies, we are dedicated to developing innovative solutions that empower businesses to thrive. Our flagship products are meticulously designed to enhance operational efficiency and foster sustainable growth. Explore how our cutting-edge offerings can transform your business today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/about/fleet-ware-management-system.png" alt="Fleet Management" className="mb-4 rounded h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Fleetware Management System</h3>
            <p className="mb-4">
              A comprehensive solution for managing fleets, optimizing routes, and enhancing operational efficiency.
            </p>
            <p>
              With real-time tracking and analytics, this system helps businesses streamline their fleet operations, reduce costs, and improve service delivery.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/about/project-management-system.avif" alt="Project Management" className="mb-4 rounded h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Project Management App</h3>
            <p className="mb-4">
              A user-friendly application designed to streamline project planning, tracking, and collaboration for teams.
            </p>
            <p>
              Featuring task management, timelines, and team communication tools, it enhances productivity and ensures project success.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-base mb-4">
            For inquiries or to schedule a demo, please email us at <a href="mailto:support-service@dnqtech.in" className="text-blue-500">support-service@dnqtech.in</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
