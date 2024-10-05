"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useScroll } from "@/utils/context";
import elipse from "../../../public/images/how-it-works/how-travelingo-works-elipse.png";
import { useEffect } from "react";

export default function HowItWorks() {
  const { howItWorksRef } = useScroll();

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
    threshold: 0.2,
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
      ref={howItWorksRef}
      className="w-screen drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] centralise how_travelingo_container relative z-40 min-h-screen h-auto bg-sky-blue px-12 pt-2 pb-[8rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] "
    >
      <div ref={ref}>
      <div className="flex max_width_container relative how_travelingo_works_container">
        {/* <Image
          className="absolute right-0 w-[50%]"
          src={"/images/blob.svg"}
          width={500}
          height={500}
          alt=""
        /> */}

      <div className="absolute right-20 top-0 w-fit">
      <Image
          className="w-[100%]"
          src={elipse}
          alt=""
        />
      </div>
  

        <div className="how_to_travel_heading">
          <motion.h2
            animate={animation1}
            initial={{ y: 30, opacity: 0 }}
            className="self-stretch section_heading text-black text-[6.25rem] mt-[68px] font-poppinsM  font-normal  leading-[6.5rem] w-[40%]"
          >
            How <br></br> Travelingo <br></br> Works
          </motion.h2>

          <motion.button
            animate={animation2}
            initial={{ y: 30, opacity: 0 }}
            className="bg-black rounded-full how_travelling_works_play_store_btn px-6 w-full items-center gap-x-5 py-5 mt-[3rem] text-black flex justify-between duration-400 hover:bg-gray-700"
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
            animate={animation3}
            whileHover={{ translateY: -14 }}
            initial={{ y: 30, opacity: 0 }}
            className="rounded-[50px] how_to_travel_panel border-4 border-black flex flex-row gap-x-[2rem] px-3 py-1 relative"
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
            whileHover={{ translateY: -14 }}
            animate={animation4}
            initial={{ y: 30, opacity: 0 }}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem]   px-3 py-1 relative"
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
            whileHover={{ translateY: -14 }}
            animate={animation5}
            initial={{ y: 30, opacity: 0 }}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem]   px-3 py-1 relative"
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
            whileHover={{ translateY: -14 }}
            animate={animation6}
            initial={{ y: 30, opacity: 0 }}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem]   px-3 py-1 relative"
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
            whileHover={{ translateY: -14 }}
            animate={animation7}
            initial={{ y: 30, opacity: 0 }}
            className="how_to_travel_panel rounded-[50px] border-4 border-black flex gap-x-[2rem]   px-3 py-1 relative"
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
      </div>
    </div>
  );
}
