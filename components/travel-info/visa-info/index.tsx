"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import Collapseable from "../collapseable";

export default function VisaInfo({ data }: { data: any }) {
  const animation = (delay: number) => ({
    offscreen: {
      opacity: 0,
      y: 30, // Use the parameter here
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
        delay: delay,
      },
    },
  });

  console.log("Visa Info: ", data);

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      className="w-screen z-[100] centralise visa_info_container visa_info_container shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] h-auto bg-[#F0F0F0] px-12 pt-[3rem] pb-[20rem] mt-[-12rem] rounded-[4rem] "
    >
      <div className="container max_width_container mx-auto">
        <div className="w-full">
          <motion.h2
            variants={animation(0)}
            className="self-stretch section_heading_white_bg section_heading font-poppinsM text-black text-[4.25rem] font-normal  leading-normal"
          >
            VISA INFO
          </motion.h2>

          <motion.p
            variants={animation(0.2)}
            className="self-stretch section_para_white_bg text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]"
          >
            Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
            aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
            pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
            consequat faucibus tortor amet est.
          </motion.p>
        </div>

        <div className="flex flex-col ">
          <Collapseable
            data={data && data[0]?.targetCountries[0]?.visatype}
            name={"Visa Type"}
            image={"/images/travel-info/visa-info/visa-type.png"}
          />

          <Collapseable
            data={data && data[0]?.targetCountries[0]?.documentsRequired}
            name={"Documents Required"}
            image={"/images/travel-info/visa-info/documents.png"}
          />
          <Collapseable
            data={data && data[0]?.targetCountries[0]?.embassyInfo}
            name={"Embassy Info"}
            image={"/images/travel-info/visa-info/embassy.png"}
          />
          <Collapseable
            data={data && data[0]?.targetCountries[0]?.healthAndInsurance}
            name={"Health Insurance"}
            image={"/images/travel-info/visa-info/health.png"}
          />
          <Collapseable
            data={data && data[0]?.targetCountries[0]?.extensionAndOverstay}
            name={"Extension and Overstay"}
            image={"/images/travel-info/visa-info/extension.png"}
          />
        </div>
      </div>
    </motion.section>
  );
}
