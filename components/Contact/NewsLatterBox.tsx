"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        You can locate us here 
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Stay informed with our latest news and updates about our services and offerings.
      </p>
     

      <div className="mt-6">
        <h4 className="mb-4 text-xl font-bold">Find Us Here:</h4>
        <div id="map" className="h-64 w-full rounded-lg shadow-lg">
        <iframe
            title="Google Map of Pune"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379708.3575851506!2d73.73894525030695!3d18.520430191908342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc8e2b1e26b3fb%3A0x2e2d1e4b46006d7b!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1600562159562!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NewsLatterBox;
