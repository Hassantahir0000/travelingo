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
      className="w-screen min-h-screen h-auto bg-pale-cyan px-12 pt-2 pb-[20rem]"
    >
      <div className="container mx-auto">
        <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] mt-[68px] mb-[98px] font-normal  leading-normal">
          What to Expect
        </h2>

        <div className="flex md:flex-row flex-col gap-x-4">
          <div className="flex flex-col gap-y-4 w-[70%]">
            <motion.div
              variants={panel1Animation}
              className="bg-white rounded-[50px] px-8 py-5 flex flex-col md:flex-row justify-center"
            >
              <div className="flex flex-col mb-auto md:w-[60%] pt-4">
                <h2 className="self-stretch font-poppinsM  text-black text-[2.5rem] font-normal leading-[3rem] ">
                  Your Perfect Trip <br></br> Planner
                </h2>
                <div className=" text-black text-[1.4rem] font-poppinsL mt-5">
                  Travel planning made easy, with tailored travel information
                  from visa requirements to cultural dos and don&apos;ts,
                  ensuring you re well-prepared for any journey.
                </div>
              </div>
              <div className="md:w-[40%]">
                <Image
                  src={"/images/home/what-to-expect/perfect-trip.png"}
                  width={400}
                  height={500}
                  alt=""
                  className="mx-auto"
                />
              </div>
            </motion.div>

            <div className="flex flex-row gap-x-4">
              <motion.div
                variants={panel3Animation}
                className="bg-white rounded-[50px] h-[80%] w-[33%]"
              ></motion.div>
              <motion.div
                variants={panel4Animation}
                className="bg-white w-[67%] flex flex-row rounded-[50px] pl-8 py-6 relative "
              >
                <div className="flex flex-col w-[60%] mb-auto">
                  <h2 className="self-stretch font-poppinsM  text-black text-[2.5rem] font-normal leading-[3rem] ">
                    Break Language Barriers
                  </h2>
                  <div className=" text-black text-[1.4rem] font-poppinsL mt-5">
                    Communicate without borders, providing accurate and quick
                    translations for everyday conversations, enhancing both
                    personal and business communications.
                  </div>
                </div>
                <div className="mt-auto w-[50%]">
                  <Image
                    src={"/images/home/what-to-expect/language-barrier.png"}
                    width={500}
                    height={500}
                    alt=""
                    className=" mt-[10rem] w-[18rem] bottom-0 right-0"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={panel2Animation}
            className="bg-white rounded-[50px] p-8 flex flex-col justify-center w-[30%] h-fit"
          >
            <div className="flex flex-col mb-auto">
              <h2 className="self-stretch font-poppinsM  text-black text-[2.5rem] font-normal leading-[3rem] ">
                Speak and Sound Like Locals
              </h2>
              <div className=" text-black text-[1.4rem] font-poppinsL mt-5">
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
