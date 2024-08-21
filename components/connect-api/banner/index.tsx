"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function ConnectBanner() {
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

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      className="w-screen centralise h-[120vh]"
    >
      <Image
        src="/images/connect-api/banner.png"
        width={500}
        height={500}
        className="w-full h-full object-cover"
        alt=""
      />

      <div className="flex justify-center items-center">
        <motion.div
          variants={animation(0)}
          className="banner_first_panel max_width_container_banner bg-blue-blur/50  absolute bottom-[2rem] py-[2.875rem] px-[2.75rem] rounded-[30px] backdrop-blur-[0.5rem] md:w-[90%] block mx-auto"
        >
          <div className="banner_heading_main_container flex-col flex">
            <div className="banner_heading_container flex-col justify-center items-center inline-flex md:w-[70%]">
              <h2 className="banner_heading self-stretch font-poppinsL text-white text-[5.5rem]">
                Travelingo
              </h2>
              <h2 className="self-stretch banner_heading font-poppinsM  text-white text-[5.5rem]">
                Connect API
              </h2>
            </div>
            <div className="banner_para text-white font-poppinsR  text-md md:w-[30%] mt-5 md:mt-auto">
              Integrate comprehensive travel information effortlessly with
              Travelingo Connect API. Access visa details, cultural insights,
              travel budgeting, and language learning resources—all in one
              place.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
