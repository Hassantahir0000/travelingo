"use client"

import ConnectBanner from "../../components/connect-api/banner";
import TravelExperience from "../../components/connect-api/travel-experience";
import APIFeatures from "../../components/connect-api/api-features";
import ContactUs from "../../components/connect-api/contact-us";
import Footer from "../../components/shared/footer";
import { useScroll } from "@/utils/context";

export default function ConnectAPI() {

  const { scrollTo } = useScroll();

  return (
    <main className=" min-h-screen">
      <ConnectBanner />
      <div className="absolute z-[10]">
        <TravelExperience />
        <APIFeatures />
        <ContactUs />
        <Footer
          heading={"To Know More"}
          description={
            "“For live demonstration of our api, Request a demo or schedule a call with us”"
          }
          onButtonClick={() => {
            scrollTo("contactus")
          }}
          buttonLabel={"DEMO"}
        />
      </div>
    </main>
  );
}
