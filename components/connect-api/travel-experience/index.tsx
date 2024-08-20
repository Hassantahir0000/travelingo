"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function TravelExperience() {
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
      className="w-screen z-[100]   shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] h-auto bg-pale-cyan py-[6rem] mt-[-2rem] rounded-tl-[3rem] rounded-tr-[3rem] "
    >
      <div className="container mx-auto">
        <div className="flex travel_experience_container flex-row mx-auto justify-between items-center w-full h-full my-auto pb-[7rem] pt-[2rem]">
          <div className="w-[50%] travel_experience_content_container">
            <motion.h2
              variants={animation(0)}
              className="self-stretch section_heading font-poppinsM text-black text-[4.25rem]  leading-[5rem]"
            >
              Unlock Seamless <br></br> Travel Experiences
            </motion.h2>

            <motion.p
              variants={animation(0.4)}
              className="self-stretch section_para  text-black text-[2.5rem] mt-3  font-poppinsR ml-4"
            >
              Features
            </motion.p>

            <div className="ml-8 mt-5">
              <motion.p
                variants={animation(0.6)}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                Up-to-date Visa Information
              </motion.p>
              <motion.p
                variants={animation(0.8)}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                Cultural Guides and Local Insights
              </motion.p>

              <motion.p
                variants={animation(1)}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                Travel Budgeting Tools
              </motion.p>
              <motion.p
                variants={animation(1.2)}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                Language Learning
              </motion.p>
              <motion.p
                variants={animation(1.4)}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR  mt-1"
              >
                Easy Integration and Reliable Data
              </motion.p>
            </div>

            <motion.button
              variants={animation(1.6)}
              className="border-2 border-black rounded-full px-6 w-[100%] items-center gap-x-5 py-3 mt-[3rem]  text-black flex justify-between"
            >
              <p className="text-black text-[1.5rem] font-poppinsR">
                Request a Demo
              </p>

              <Image
                src={"/icons/arrow-black.svg"}
                width={30}
                height={30}
                alt=""
              />
            </motion.button>
          </div>

          <motion.div
            variants={animation(0.2)}
            className="w-[50%] flex items-center justify-center my-auto"
          >
            <Image
              src={"/images/connect-api/travel-exp.png"}
              width={800}
              height={800}
              alt=""
              className="w-[40rem] m-auto h-auto "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
