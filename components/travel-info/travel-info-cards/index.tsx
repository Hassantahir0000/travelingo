"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function TravelInfoCards() {
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
      className="w-screen centralise z-[100] travel_info_card_container h-auto bg-[#94D4FF] px-12 pt-[3rem] pb-[20rem] mt-[-1rem] rounded-tl-[3rem] rounded-tr-[3rem] "
    >
      <div className="container max_width_container mx-auto flex flex-col items-center gap-y-8">
        <div className="w-full mb-[130px]">
          <motion.h2
            variants={animation(0)}
            className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] font-normal  leading-normal"
          >
            Travel Info
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

        <div className="grid grid-cols-3 w-[95%] travel_info_cards_container">
          <motion.img
            variants={animation(0.4)}
            src={"/images/travel-info/info-cards/visa-info.png"}
            width={500}
            height={500}
            alt=""
          />

          <motion.img
            variants={animation(0.6)}
            src={"/images/travel-info/info-cards/travel-budget.png"}
            width={500}
            height={500}
            alt=""
          />
          <motion.img
            variants={animation(0.8)}
            src={"/images/travel-info/info-cards/weather.png"}
            width={500}
            height={500}
            alt=""
          />

          <motion.img
            variants={animation(1)}
            src={"/images/travel-info/info-cards/food.png"}
            width={500}
            height={500}
            alt=""
          />
          <motion.img
            variants={animation(1.2)}
            src={"/images/travel-info/info-cards/culture.png"}
            width={500}
            height={500}
            alt=""
          />
          <motion.img
            variants={animation(1.4)}
            src={"/images/travel-info/info-cards/customs.png"}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </motion.section>
  );
}
