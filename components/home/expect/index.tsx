"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function WhatToExpect() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const panel1Animation = {
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

  const panel2Animation = {
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

  const panel3Animation = {
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
        delay: 0.6,
      },
    },
  };

  const panel4Animation = {
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
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      ref={ref}
      className="w-screen min-h-screen flex flex-col centralise expect_container h-auto bg-pale-cyan px-12 pt-2 pb-[20rem]"
    >
      <div className="w-full max_width_container">
        <h2 className="self-stretch font-poppinsM text-[4.25rem] mt-[38px] mb-[50px] font-normal section_heading leading-normal">
          What to Expect
        </h2>

        <div className="flex flex-row gap-x-4 extent_panels_container">
          <div className="flex flex-col gap-y-4 expect_left_panel_container w-[70%]">
            <motion.div
              variants={panel1Animation}
              className="bg-white expect_panel_1 rounded-[30px] px-8 py-5 gap-x-[40px] flex flex-col md:flex-row justify-center"
            >
              <div className="flex flex-col expect_panel_desc">
                <h2 className="expect_panel_heading self-stretch font-poppinsM  text-dodger-blue text-[2.2rem] font-normal leading-[3rem] ">
                  Your Perfect Trip <br></br> Planner
                </h2>
                <div className="expect_panel_para text-black text-[1.0rem] font-poppinsL mt-5">
                  Travel planning made easy, with tailored travel information
                  from visa requirements to cultural dos and don&apos;ts,
                  ensuring you re well-prepared for any journey.
                </div>
              </div>
              <div className="my-auto md:w-[40%]">
                <Image
                  src={"/images/home/what-to-expect/perfect-trip.png"}
                  width={400}
                  height={500}
                  alt=""
                  className="mx-auto min-w-[250px]"
                />
              </div>
            </motion.div>

            <div className="flex expect_lower_panel_container flex-row gap-x-4">
              <motion.div
                variants={panel3Animation}
                className="expect_panel_3 expect_panel_heading bg-white rounded-[30px] h-[80%] w-[33%]"
              ></motion.div>
              <motion.div
                variants={panel2Animation}
                className="bg-white expect_panel_4 w-[67%] flex flex-row rounded-[30px] pl-8 py-6 relative "
              >
                <div className="flex flex-col w-[60%] expect_panel_desc">
                  <h2 className="expect_panel_heading self-stretch font-poppinsM  text-dodger-blue text-[2.2rem] font-normal leading-[3rem] ">
                    Break Language Barriers
                  </h2>
                  <div className="expect_panel_para text-black text-[1.0rem] font-poppinsL mt-5">
                    Communicate without borders, providing accurate and quick
                    translations for everyday conversations, enhancing both
                    personal and business communications.
                  </div>
                </div>
                <div className="w-[50%] my-auto">
                  <Image
                    src={"/images/home/what-to-expect/language-barrier.png"}
                    width={500}
                    height={500}
                    alt=""
                    className="mt-[10rem] w-[18rem] my-auto bottom-0 right-0"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={panel3Animation}
            className="bg-white expect_panel_2 rounded-[30px] p-8 flex flex-col justify-center w-[30%] h-fit"
          >
            <div className="flex flex-col expect_panel_desc">
              <h2 className="self-stretch font-poppinsM expect_panel_heading text-dodger-blue text-[2.2rem] font-normal leading-[3rem] ">
                Speak and Sound Like Locals
              </h2>
              <div className="expect_panel_para text-black text-[1.0rem] font-poppinsL mt-5">
                Travel planning made easy, with tailored travel information from
                visa requirements to cultural dos and don&apos;ts, ensuring you
                re well-prepared for any journey.
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src={"/images/home/what-to-expect/speak-sound.png"}
                width={400}
                height={500}
                alt=""
                className="mx-auto "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
