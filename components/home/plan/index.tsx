"use client";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ServicesList from "../services/services-list";

export default function PlanYourTrip() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const headingAnimation = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  const paraAnimation = {
    offscreen: {
      opacity: 0,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="w-screen centralise min-h-screen h-auto bg-light-sky-blue px-8 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3rem] rounded-tr-[3rem]">
      <div
        className="container max_width_container mx-auto"
      >
        <h2
          className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] mt-[68px] font-normal  leading-normal"
        >
          Plan Your Trip
        </h2>

        <p
          className="self-stretch section_para mb-16 text-black text-[1.9rem] font-poppinsR  font-normal mt-4 leading-[2.5rem]"
        >
          Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
          aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
          pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
          consequat faucibus tortor amet est.
        </p>

        <ServicesList />

        <div className="w-[100%] mx-auto mt-5">
          <Image
            src={"/images/home/plan-trip/map.svg"}
            width={1000}
            height={1000}
            alt="map"
            className="w-screen"
          />
        </div>
      </div>
    </div>
  );
}
