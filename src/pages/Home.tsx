// import { Link } from "react-router-dom";
import Hero from "@/components/custom/hero/Hero";
import WorkShowcase from "@/components/custom/showcase/WorkShowcase";
import MainService from "@/components/custom/services/MainService";
import QuickRequestService from "@/components/custom/services/QuickRequestService";
import SupportingService from "@/components/custom/services/SupportingService";
// import FeaturedExamples from "@/components/custom/services/FeaturedExamples";
import Process from "@/components/custom/process/Process";
import Closing from "@/components/custom/closing/Closing";
export default function Home() {
  return (
    <>
      <Hero />
      <WorkShowcase />
      <MainService />
      <QuickRequestService />
      <SupportingService />
      {/* <FeaturedExamples /> */}
      <Process />
      <Closing />
    </>
  );
}
