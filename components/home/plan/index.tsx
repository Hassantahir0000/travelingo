"use client";

import Image from "next/image";
import ServicesList from "../services/services-list";
import { useScroll } from "@/utils/context";


export default function PlanYourTrip() {

  const {
    scrollTo,
    howItWorksRef,
    langLearnerRef,
    langTranslatorRef,
    planYourTripRef,
  } = useScroll();

  return (
    <div ref={planYourTripRef} className="w-screen min-h-screen h-auto bg-light-sky-blue px-8 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3rem] rounded-tr-[3rem]">
      <div className="container mx-auto">
        <h2 className="self-stretch font-poppinsM text-[2rem] md:text-[4.25rem] mt-[38px] mb-0 font-normal section_heading leading-normal">
          Plan Your Trip
        </h2>

        <p className="self-stretch section_para text-black text-[0.8rem] mb-[30px] font-poppinsR font-normal mt-2 md:mb-5 md:leading-[2.2rem]">
          Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
          aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
          pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
          consequat faucibus tortor amet est.
        </p>
      </div>

      <ServicesList />

      <div className="w-[90%] mx-auto mt-5">
        <Image
          src={"/images/home/plan-trip/map.svg"}
          width={1000}
          height={1000}
          alt="map"
          className="w-screen"
        />
      </div>
    </div>
  );
}
