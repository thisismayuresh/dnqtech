import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import ProductsPage from "./products/page";
import Services from "./services/page";

export const metadata: Metadata = {
  title: "D&Q Technology",
  description: "This is Home for D&Q Technologies",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <Services/>
      <ProductsPage/>
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
