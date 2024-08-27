"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useScroll } from "@/utils/context";

export default function HowItWorks() {
  const { howItWorksRef } = useScroll();

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
      ref={howItWorksRef}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3 }}
      className="w-screen drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] centralise how_travelingo_container relative z-40 min-h-screen h-auto bg-sky-blue px-12 pt-2 pb-[8rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] "
    >
      <div className="flex max_width_container relative how_travelingo_works_container">
        <Image
          className="absolute right-0 w-[50%]"
          src={"/images/blob.svg"}
          width={500}
          height={500}
          alt=""
        />

        <div className="how_to_travel_heading">
          <motion.h2
            variants={animation(0.2)}
            className="self-stretch section_heading text-black text-[6.25rem] mt-[68px] font-poppinsM  font-normal  leading-[6.5rem] w-[40%]"
          >
            How <br></br> Travelingo <br></br> Works
          </motion.h2>

          <motion.button
            variants={animation(0.4)}
            className=" bg-black rounded-full how_travelling_works_play_store_btn px-6 w-full items-center gap-x-5 py-5 mt-[3rem] text-black flex justify-between duration-400 hover:bg-gray-700"
          >
            <div className="flex gap-x-5">
              <Image
                src={"/icons/play-button.svg"}
                width={30}
                height={30}
                alt=""
              />
              <p className="text-white text-[1.5rem] font-poppinsR">
                GET ON PLAY STORE
              </p>
            </div>
            <Image
              className="opacity-1"
              src={"/icons/arrow.svg"}
              width={30}
              height={30}
              alt=""
            />
          </motion.button>
        </div>

        <div className="how_to_travel_panels_container flex flex-col z-[10] ml-auto w-[50%] gap-y-5 mt-8">
          <motion.div
            variants={animation(0.6)}
            className="rounded-[50px] how_to_travel_panel border-4 border-black flex flex-row gap-x-[2rem] bg-black/10 px-3 py-1 relative"
          >
            <h2 className="self-stretch pl-4 font-poppinsM how_travel_panel_number text-black m-auto text-[7.0rem] font-normal leading-normal">
              01
            </h2>
            <p className="self-stretch  text-black text-[1.0rem] font-poppinsR m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={animation(0.8)}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem] bg-black/10 px-3 py-1 relative"
          >
            <h2 className="self-stretch pl-4 font-poppinsM how_travel_panel_number text-black m-auto text-[7.0rem]   font-normal  leading-normal">
              02
            </h2>
            <p className="self-stretch  text-black text-[1.0rem] font-poppinsR m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={animation(1)}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem] bg-black/10 px-3 py-1 relative"
          >
            <h2 className="self-stretch pl-4 font-poppinsM how_travel_panel_number text-black m-auto text-[7.0rem]   font-normal  leading-normal">
              03
            </h2>
            <p className="self-stretch font-poppinsR text-black text-[1.0rem] m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={animation(1.2)}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem] bg-black/10 px-3 py-1 relative"
          >
            <h2 className="self-stretch pl-4 font-poppinsM how_travel_panel_number text-black m-auto text-[7.0rem]   font-normal  leading-normal">
              04
            </h2>
            <p className="self-stretch font-poppinsR text-black text-[1.0rem] m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={animation(1.4)}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem] bg-black/10 px-3 py-1 relative"
          >
            <h2 className="self-stretch pl-4 font-poppinsM how_travel_panel_number text-black m-auto text-[7.0rem]   font-normal  leading-normal">
              05
            </h2>
            <p className="self-stretch font-poppinsR text-black text-[1.0rem] m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
