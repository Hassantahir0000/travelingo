"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import blob1 from "../../../public/images/language-translator/language_translator_blob_1.png";
import blob2 from "../../../public/images/language-translator/language_translator_blob_2.png";
import { useScroll } from "@/utils/context";

export default function LanguageLearner() {
  const { features } = useScroll();

  const {
    scrollTo,
    howItWorksRef,
    langLearnerRef,
    langTranslatorRef,
    planYourTripRef,
  } = useScroll();

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
      ref={features}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
      className="w-screen relative centralise drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] language_learner_container min-h-screen h-auto bg-maya-blue px-12 pt-2 pb-[14rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] "
    >
      <Image
        src={blob1}
        alt="blob_1"
        className="absolute w-[40%] top-0 right-0 z-0"
      />
      <Image
        src={blob2}
        alt="blob_2"
        className="absolute w-[80%] bottom-0 left-0 z-0"
      />
      <div className="container mx-auto z-10 max_width_container relative">
        <motion.h2
          variants={animation(0)}
          className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] mt-[28px] font-normal  leading-normal"
        >
          Language Learner
        </motion.h2>

        <motion.p
          variants={animation(0.4)}
          className="self-stretch section_para text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]"
        >
          Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
          aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
          pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
          consequat faucibus tortor amet est.
        </motion.p>

        <motion.div className="bg-[#18a3ff97] border-[2px] border-white drop-shadow-[0_-25px_10px_rgba(255,255,255,0.25)] language_expert_container p-10 rounded-[35px] mt-[5rem]">
          <div className="flex flex-row gap-x-[30px] becoming_language_expert_container">
            <div className="w-[55%] becoming_language_expert_heading">
              <motion.h2
                variants={animation(0.6)}
                className="self-stretch section_heading font-poppinsR text-black text-[4.25rem] mt-5 font-normal  leading-[4.5rem]"
              >
                Become a Language Expert with
              </motion.h2>
              <motion.h2
                variants={animation(0.8)}
                className="self-stretch section_heading font-poppinsB text-black text-[4.25rem] my-5 font-normal  leading-[4.5rem]"
              >
                Travelingo
              </motion.h2>

              <motion.p
                variants={animation(1)}
                className="self-stretch section_para font-poppinsL  text-black text-[1.5rem]  font-normal  leading-[2.5rem]"
              >
                Lorem ipsum dolor sit amet consectetur. Auctor rhoncus at
                bibendum sed ac urna dui aliquet aliquam. Amet leo habitant amet
                quam suspendisse donec. Sit aliquet elementum elit sit sit
                phasellus. Libero urna a in cras.
              </motion.p>
            </div>

            <div className="ml-auto pr-0 w-[45%] gap-x-5 becoming_language_expert_pics_container">
              <div className="grid  grid-cols-2 h-fit gap-y-2  gap-x-5 ">
                <motion.img
                  variants={animation(1.2)}
                  src={"/images/language-learner/avatar1.png"}
                  width={800}
                  height={800}
                  alt=""
                  className="w-[15rem]"
                />
                <motion.img
                  variants={animation(1.4)}
                  src={"/images/language-learner/avatar2.png"}
                  width={800}
                  height={800}
                  alt=""
                  className="w-[15rem]"
                />
                <motion.img
                  variants={animation(1.6)}
                  src={"/images/language-learner/avatar3.png"}
                  width={800}
                  height={800}
                  alt=""
                  className="w-[15rem]"
                />
                <motion.img
                  variants={animation(1.8)}
                  src={"/images/language-learner/avatar4.png"}
                  width={800}
                  height={800}
                  alt=""
                  className="w-[15rem]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-baseline language_learner_btns">
            <button className="border-2 animate_btn ll_flient_btn border-black rounded-full px-6 w-fit items-center h-fit gap-x-5 py-3  text-black flex justify-between">
              <p className="text-black font-poppinsR">Get Fluent</p>

              <Image
                src={"/icons/arrow-small.svg"}
                width={20}
                height={20}
                alt=""
              />
            </button>

            <button className="border-2 mr-4 ll_get_api_btn border-black rounded-full px-6 w-[42.5%] items-center gap-x-5 py-3 mt-[3rem] text-black flex justify-between">
              <p className="text-black text-[1.5rem]">Get Our API</p>

              <Image
                src={"/icons/arrow-black.svg"}
                width={30}
                height={30}
                alt=""
              />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
