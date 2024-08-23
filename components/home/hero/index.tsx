"use client";

import PlayButton from "@/components/shared/play-button";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Banner() {
  const welcomeBannerAnimation = useAnimation();
  const playstoreAnimation = useAnimation();

  useEffect(() => {
    const makeHeadingAnimation = async () => {
      welcomeBannerAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "bounce",
          duration: 0.2,
        },
      });

      playstoreAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "bounce",
          duration: 0.2,
          delay: 0.4,
        },
      });
    };

    makeHeadingAnimation();
  }, []);

  return (
    <div className="w-screen h-screen centralise">
      <Image
        src="/images/home/main-bg.png"
        priority
        width={5000}
        height={5000}
        className="w-full h-full object-cover"
        alt=""
      />

      <div className="flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={welcomeBannerAnimation}
          className="container max_width_container_banner bg-blue-blur/50 absolute bottom-[10rem] banner_first_panel py-[1.875rem] px-[2.75rem] rounded-[30px] backdrop-blur-[0.5rem] md:w-[90%] block mx-auto"
        >
          <div className="banner_heading_main_container flex-col flex">
            <div className="banner_heading_container flex-col justify-center items-center gap-[34px] inline-flex">
              <h2 className="banner_heading self-stretch font-poppinsL text-white text-[2rem] font-light leading-normal">
                Welcome to Travelingo
              </h2>
              <h2 className="banner_heading self-stretch font-poppinsM  text-white text-[5.5rem] leading-[6rem]">
                Your Travel
                <br />
                Partner!
              </h2>
            </div>
            <div className="banner_para text-white font-poppinsR  text-[0.9rem] mt-5">
              Dive into the heart of each destination with tailored cultural
              insights, visa guidance, and essential travel tips. Our app
              provides in-depth country-specific information to enrich your
              journey and ensure a seamless travel experience. Explore the world
              confidently with every detail you need right at your fingertips.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={playstoreAnimation}
          className="container second_banner bg-blue-blur/50 banner_second_panel absolute items-center  bottom-10 py-5 px-[1.75rem] rounded-full backdrop-blur-[0.5rem] md:w-[90%] block mx-auto"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-x-4">
              <PlayButton />
              <div className="self-stretch flex items-center font-poppinsR banner_second_heading text-white text-[30px] uppercase font-normal leading-normal">
                <p>Get on play store</p>
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
    </div>
  );
}
