"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export default function TravelExperience() {
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
    <motion.section
      ref={ref}
      className="w-screen z-[100] centralise h-auto connect_api_container bg-pale-cyan py-[1rem] mt-[-40px] rounded-tl-[3rem] rounded-tr-[3rem] "
    >
      <div className="container mx-auto max_width_container">
        <div className="flex travel_experience_container flex-row mx-auto justify-between items-center w-full h-full my-auto pb-[7rem] pt-[2rem]">
          <div className="w-[50%] travel_experience_content_container">
            <motion.h2
              animate={animation1}
              initial={{ y: 30, opacity: 0 }}
              className="self-stretch section_heading font-poppinsM text-black text-[3.8rem]  leading-[5rem]"
            >
              Unlock Seamless <br></br> Travel Experiences
            </motion.h2>

            <motion.p
              animate={animation3}
              initial={{ y: 30, opacity: 0 }}
              className="self-stretch section_para  text-black text-[2.5rem] mt-3  font-poppinsR ml-4"
            >
              Features
            </motion.p>

            <div className="ml-0 mt-5">
              <motion.p
                animate={animation4}
                initial={{ y: 30, opacity: 0 }}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                • Up-to-date Visa Information
              </motion.p>
              <motion.p
                animate={animation5}
                initial={{ y: 30, opacity: 0 }}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                • Cultural Guides and Local Insights
              </motion.p>

              <motion.p
                animate={animation6}
                initial={{ y: 30, opacity: 0 }}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                • Travel Budgeting Tools
              </motion.p>
              <motion.p
                animate={animation7}
                initial={{ y: 30, opacity: 0 }}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1"
              >
                • Language Learning
              </motion.p>
              <motion.p
                animate={animation8}
                initial={{ y: 30, opacity: 0 }}
                className="self-stretch section_para text-black text-[1.4rem] w-[90%]  font-poppinsR  mt-1"
              >
                • Easy Integration and Reliable Data
              </motion.p>
            </div>

            <motion.button
              animate={animation9}
              initial={{ y: 30, opacity: 0 }}
              className="border-2 border-black animate_btn rounded-full px-6 w-[100%] items-center gap-x-5 py-3 mt-[3rem]  text-black flex justify-between"
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
            animate={animation2}
            initial={{ y: 30, opacity: 0 }}
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
