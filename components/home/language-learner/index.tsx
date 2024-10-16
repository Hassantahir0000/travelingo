"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import blob1 from "../../../public/images/language-translator/language_translator_blob_1.png";
import blob2 from "../../../public/images/language-translator/language_translator_blob_2.png";
import { useScroll } from "@/utils/context";
import { useEffect } from "react";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/navigation";

export default function LanguageLearner() {
  const { features } = useScroll();
  const { width } = useWindowSize();
  const router = useRouter();

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  const animation9 = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const upAnimation = async () => {
      if (inView) {
        await delay(200);

        animation1.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation2.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation3.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation4.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation5.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation6.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation7.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation8.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });

        await delay(200);

        animation9.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });
      }
    };

    upAnimation();
  }, [inView]);

  return (
    <div
      ref={features}
      className="w-screen relative centralise drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] language_learner_container min-h-screen h-auto bg-maya-blue px-12 pt-2 pb-[14rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] "
    >
      <div ref={ref}>
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
        <div id="languagelearner" className="container mx-auto z-10 max_width_container relative">
          <motion.h2
            animate={animation1}
            initial={{ y: 30, opacity: 0 }}
            className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] mt-[28px] font-normal  leading-normal"
          >
            Language Learner
          </motion.h2>

          <motion.p
            animate={animation2}
            initial={{ y: 30, opacity: 0 }}
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
                  animate={animation3}
                  initial={{ y: 30, opacity: 0 }}
                  className="self-stretch section_heading font-poppinsR text-black text-[4.25rem] mt-5 font-normal  leading-[4.5rem]"
                >
                  Become a Language Expert with
                </motion.h2>
                <motion.h2
                  animate={animation4}
                  initial={{ y: 30, opacity: 0 }}
                  className="self-stretch section_heading font-poppinsB text-black text-[4.25rem] my-5 font-normal  leading-[4.5rem]"
                >
                  Travelingo
                </motion.h2>

                <motion.p
                  animate={animation5}
                  initial={{ y: 30, opacity: 0 }}
                  className="self-stretch section_para font-poppinsL  text-black text-[1.5rem]  font-normal  leading-[2.5rem]"
                >
                  Lorem ipsum dolor sit amet consectetur. Auctor rhoncus at
                  bibendum sed ac urna dui aliquet aliquam. Amet leo habitant
                  amet quam suspendisse donec. Sit aliquet elementum elit sit
                  sit phasellus. Libero urna a in cras.
                </motion.p>
              </div>

              <div className="ml-auto pr-0 w-[45%] gap-x-5 flex justify-end becoming_language_expert_pics_container">
                <div className="grid grid-cols-2 h-fit gap-5 place-items-center ">
                  <motion.img
                    animate={animation6}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/language-learner/avatar1.png"}
                    width={800}
                    height={800}
                    alt=""
                    className="w-[100%]"
                  />
                  <motion.img
                    animate={animation7}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/language-learner/avatar2.png"}
                    width={800}
                    height={800}
                    alt=""
                    className="w-[100%]"
                  />
                  <motion.img
                    animate={animation8}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/language-learner/avatar3.png"}
                    width={800}
                    height={800}
                    alt=""
                    className="w-[100%]"
                  />
                  <motion.img
                    animate={animation9}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/language-learner/avatar4.png"}
                    width={800}
                    height={800}
                    alt=""
                    className="w-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-baseline language_learner_btns">
              <button className="border-2 animate_btn ll_flient_btn border-black rounded-full px-6 w-fit items-center h-fit gap-x-5 py-3 text-black flex justify-between">
                <p className="text-black font-poppinsR">Get Fluent</p>

                <Image
                  src={"/icons/arrow-small.svg"}
                  width={20}
                  height={20}
                  alt=""
                />
              </button>

              <button onClick={()=>{
                router.push('/connect-api')
              }} className="border-2 mr-4 ll_get_api_btn border-black rounded-full px-6 w-[42.5%] items-center gap-x-5 py-3 mt-[3rem] text-black flex justify-between">
                <p className="text-black text-[1.5rem] get_our_api_btn">
                  Get Our API
                </p>

                <Image
                  src={"/icons/arrow-black.svg"}
                  width={width! < 900 ? 16 : 30}
                  height={width! < 900 ? 16 : 30}
                  alt=""
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
