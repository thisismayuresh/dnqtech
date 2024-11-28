import { Feature } from "@/types/feature";
import { FaCode, FaMobileAlt, FaRocket, FaLayerGroup, FaBrain, FaShoppingCart, FaChartLine, FaBug, FaClipboardList, FaIndustry, FaBullhorn } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaCode className="w-10 h-10" />, // Tailored Web App Development
    title: "Tailored Web App Development",
    paragraph:
      "We specialize in creating robust web applications tailored to meet your business needs, enhancing user engagement and operational efficiency.",
  },
  {
    id: 2,
    icon: <FaMobileAlt className="w-10 h-10" />, // Mobile App Development
    title: "Mobile App Development",
    paragraph:
      "Our team excels in developing user-friendly mobile applications for iOS and Android, ensuring seamless performance and innovative features.",
  },
  {
    id: 3,
    icon: <FaRocket className="w-10 h-10" />, // Cutting-Edge Technology
    title: "Cutting-Edge Technology",
    paragraph:
      "We utilize the latest technologies, including Next.js and Tailwind CSS, to build fast, scalable, and aesthetically pleasing applications.",
  },
  {
    id: 4,
    icon: <FaLayerGroup className="w-10 h-10" />, // Scalable Solutions
    title: "Scalable Solutions",
    paragraph:
      "Our solutions are designed to scale with your business, ensuring that your applications grow as you do without compromising performance.",
  },
  {
    id: 5,
    icon: <FaBrain className="w-10 h-10" />, // AIML
    title: "AIML",
    paragraph:
      "AIML provides innovative solutions to streamline your operations and enhance productivity through advanced algorithms and intelligent systems.",
  },
  {
    id: 6,
    icon: <FaShoppingCart className="w-10 h-10" />, // Ecommerce Solution
    title: "Ecommerce Solution",
    paragraph:
      "Our ecommerce solutions are designed to maximize online sales and enhance customer experiences.",
  },
  {
    id: 7,
    icon: <FaChartLine className="w-10 h-10" />, // Data and Analytics
    title: "Data and Analytics",
    paragraph:
      "Leverage data insights to drive informed decisions and optimize your business strategies.",
  },
  {
    id: 8,
    icon: <FaBug className="w-10 h-10" />, // Application Testing Services
    title: "Application Testing Services",
    paragraph:
      "Ensure quality and performance with our comprehensive application testing services.",
  },
  {
    id: 9,
    icon: <FaClipboardList className="w-10 h-10" />, // Consulting Services
    title: "Consulting Services",
    paragraph:
      "Our experts provide strategic consulting to help you navigate challenges and achieve your goals.",
  },
  {
    id: 10,
    icon: <FaIndustry className="w-10 h-10" />, // Industry Specific Solutions
    title: "Industry Specific Solutions",
    paragraph:
      "Tailored solutions designed to meet the unique needs of various industries.",
  },
  {
    id: 11,
    icon: <FaBullhorn className="w-10 h-10" />, // Digital Marketing
    title: "Digital Marketing",
    paragraph:
      "Maximize your online presence and drive growth with our digital marketing strategies.",
  },
];

export default featuresData;
