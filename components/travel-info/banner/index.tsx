"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function TravelInfoBanner({
  destination,
}: {
  destination: string | null;
}) {
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

  console.log("destination: ", destination);

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      className="w-screen h-screen centralise"
    >
      <Image
        src={`/images/travel-info/${
          destination === "France"
            ? "france"
            : destination === "Germany"
            ? "germany"
            : destination === "Iran"
            ? "iran"
            : "usa"
        }.png`}
        width={1000}
        height={1000}
        className="w-full h-[120vh] object-cover"
        alt=""
      />

      <div className="flex justify-center items-center ">
        <motion.div
          variants={animation(0)}
          className="max_width_container_banner banner_first_panel bg-blue-blur/50  absolute bottom-[10rem] pt-[3rem] pb-[2.875rem] px-[2.75rem] rounded-[30px] backdrop-blur-[0.5rem] md:w-[90%] block mx-auto"
        >
          <div className="md:flex-row banner_heading_main_container flex-col flex">
            <div className="banner_heading_container flex-col justify-start items-start gap-[34px] inline-flex md:w-[70%]">
              <h2 className="banner_heading self-stretch font-poppinsM  text-white text-[5.5rem] leading-[6rem]">
                {destination}
              </h2>
            </div>
            <div className="banner_para text-white font-poppinsR  text-[1rem] md:w-[30%] mt-[4rem] ">
              Dive into the heart of each destination with tailored cultural
              insights, visa guidance, and essential travel tips. Our app
              provides in-depth country-specific information to enrich your
              journey and ensure a seamless travel experience. Explore the world
              confidently with every detail you need right at your fingertips.
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={animation(0.2)}
          className="second_banner banner_second_panel  bg-blue-blur/50  absolute items-center  bottom-10 py-5 px-[1.75rem] rounded-full backdrop-blur-[0.5rem] md:w-[90%] block mx-auto"
        >
          <div className="flex items-center justify-between">
            <div className="flex ">
              <Image
                src={"/icons/play-button.svg"}
                width={100}
                height={100}
                alt="PlayStore"
                className="h-10"
              />
              <div className="self-stretch font-poppinsR   text-white text-[30px] uppercase font-normal  leading-normal">
                Get on play store
              </div>
            </div>

            <Image
              src={"/icons/arrow.svg"}
              width={100}
              height={100}
              alt="PlayStore"
              className="h-10"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
