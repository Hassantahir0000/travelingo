"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function LanguageTranslator() {
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
      className="w-screen centralise language_translator_container drop-shadow-[0_0px_20px_rgba(255,255,255,0.60)] relative z-30 min-h-screen h-auto bg-maya-blue px-12 pt-2 pb-[14rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] "
    >
      <div className="container max_width_container mx-auto lang_translator_panel">
        <motion.h2
          variants={animation(0)}
          className="self-stretch section_heading font-poppinsM text-white text-[4.25rem] mt-[28px] font-normal  leading-normal"
        >
          Language Translator
        </motion.h2>

        <motion.p
          variants={animation(0.2)}
          className="self-stretch section_para text-white text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]"
        >
          Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
          aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
          pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
          consequat faucibus tortor amet est.
        </motion.p>

        <motion.div
          variants={animation(0.6)}
          className="bg-[#18A1FF] border-[1px] border-white drop-shadow-[0_0px_20px_rgba(255,255,255,0.60)] lang_panel rounded-[20px]  mt-[5rem]"
        >
          <div className="flex flex-row gap-x-[50px] px-10 py-[3rem] lang_translator_panel">
            <div className="w-[40%] panel_img flex justify-center items-center">
              <Image
                src={"/images/language-translator/img-translator.png"}
                width={800}
                height={800}
                alt=""
                className="w-[22rem] m-auto h-auto "
              />
            </div>
            <div className="w-[100%] p-5">
              <h2 className="self-stretch font-poppinsM text-black text-[2.8rem] lang_translator_panel_heading font-normal  leading-[3.5rem]">
                Image Translator
              </h2>

              <p className="self-stretch lang_translator_panel_para font-poppinsL text-black text-[1.0rem] w-[90%]  font-normal   mt-5">
                Dive into the heart of each destination with tailored cultural
                insights, visa guidance, and essential travel tips. Our app
                provides in-depth country-specific information to enrich your
                journey and ensure a seamless travel experience. Explore the
                world confidently with every detail you need right at your
                fingertips.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-x-10 mt-[2rem] lang_translator_panel_container">
          <motion.div
            variants={animation(1)}
            className="bg-[#18A1FF] drop-shadow-[0_0px_20px_rgba(255,255,255,0.60)] w-[55%] lang_panel border-[1px] border-white rounded-[20px] "
          >
            <div className="flex flex-row  lang_translator_panel py-[2rem] px-[2rem]">
              <div className="w-[40%]  panel_img flex justify-center items-center">
                <Image
                  src={"/images/language-translator/text-to-voice.png"}
                  width={800}
                  height={800}
                  alt=""
                  className="w-[18rem] m-auto h-auto "
                />
              </div>
              <div className="w-[100%] p-5">
                <h2 className="self-stretch font-poppinsM lang_translator_panel_heading text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
                  Text to Voice
                </h2>

                <p className="self-stretch lang_translator_panel_para font-poppinsR text-black text-[1.0rem] w-[90%]  font-normal   mt-5">
                  Dive into the heart of each destination with tailored cultural
                  insights, visa guidance, and essential travel tips. Our app
                  provides in-depth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={animation(1.4)}
            className="bg-[#18A1FF] drop-shadow-[0_0px_20px_rgba(255,255,255,0.60)]  w-[45%] lang_panel border-[1px] border-white rounded-[20px] "
          >
            <div className="flex h-full flex-row items-center justify-center lang_translator_panel">
              <Image
                src={"/images/language-translator/play-button.png"}
                width={800}
                height={800}
                alt=""
                className="w-[6rem] m-auto h-auto "
              />
            </div>
          </motion.div>
        </div>

        <div className="flex gap-x-10 mt-[2rem] lang_translator_panel_container">
          <motion.div
            variants={animation(1.8)}
            className="bg-[#18A1FF] drop-shadow-[0_0px_20px_rgba(255,255,255,0.5)] w-[35%] lang_panel border-[1px] border-white rounded-[20px] "
          >
            <div className="flex mx-auto h-full flex-row items-center justify-center  py-[1rem] px-[2rem] lang_translator_panel">
              <div className=" p-5 flex flex-col justify-center  mx-auto w-[100%] ">
                <h2 className="self-stretch font-poppinsM lang_translator_panel_heading text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
                  Voice to Text
                </h2>

                <p className="self-stretch lang_translator_panel_para font-poppinsR text-black text-[1.0rem] w-[90%]  font-normal   mt-5">
                  Dive into the heart of each destination with tailored cultural
                  insights, visa guidance, and essential travel tips. Our app
                  provides in-depth.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={animation(2.2)}
            className="bg-[#18A1FF] lang_panel w-[65%] rounded-[20px] border-[1px] border-white"
          >
            <div className="flex flex-row items-center lang_translator_panel  py-[1rem] px-[2rem]">
              <div className="w-[40%] flex justify-center panel_img items-center">
                <Image
                  src={"/images/language-translator/conversation.png"}
                  width={800}
                  height={800}
                  alt=""
                  className="w-[15rem] m-auto h-auto "
                />
              </div>
              <div className="w-[100%] p-5">
                <h2 className="self-stretch font-poppinsM lang_translator_panel_heading text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
                  Conversation Translator
                </h2>

                <p className="self-stretch lang_translator_panel_para font-poppinsR text-black text-[1.0rem] w-[90%]  font-normal   mt-5">
                  Dive into the heart of each destination with tailored cultural
                  insights, visa guidance, and essential travel tips. Our app
                  provides in-depth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
