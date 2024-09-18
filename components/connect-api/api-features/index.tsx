"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export default function APIFeatures() {
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
      className="w-screen centralise min-h-screen px-10 connect_api_container h-auto bg-[#83CCFF] drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] pt-2 pb-[10rem] mt-[-4rem] rounded-tl-[3rem] rounded-tr-[3rem]"
    >
      <div className="container max_width_container mx-auto">
        <motion.h2
          animate={animation1}
          initial={{ y: 30, opacity: 0 }}
          className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] mt-[28px] font-normal  leading-normal"
        >
          Our API&apos;s Features
        </motion.h2>
        <motion.p
          animate={animation2}
          initial={{ y: 30, opacity: 0 }}
          className="self-stretch section_para  text-black text-[1.9rem] font-poppinsR  font-normal mt-4 ml-1 mb-5 leading-[2.5rem]"
        >
          Your all-in-one solution for Visa Information, Weather, Culture, and
          more!
        </motion.p>

        <div className="flex flex-col gap-y-5 mt-16">
          <motion.div
            animate={animation3}
            initial={{ y: 30, opacity: 0 }}
            className="bg-white api_feature_panel rounded-[30px] px-[40px] py-[30px]"
          >
            <p className="self-stretch section_heading text-black text-[2.2rem] font-poppinsM   ml-1">
              Visa API
            </p>

            <p className="self-stretch section_para_white_bg text-black text-[1.0rem] mt-3 font-poppinsR ml-1">
              The Visa API is essential for travelers needing information about
              entry requirements. It details the documents required for visa
              applications, provides embassy contact information, and covers
              health and insurance requirements. Additionally, it offers
              guidance on visa extensions and rules regarding overstaying.
            </p>
          </motion.div>

          <motion.div
            animate={animation4}
            initial={{ y: 30, opacity: 0 }}
            className="bg-white api_feature_panel rounded-[30px] px-[40px] py-[30px]"
          >
            <p className="self-stretch section_heading text-black text-[2.2rem] font-poppinsM   ml-1">
              Travel Budget API
            </p>

            <p className="self-stretch section_para_white_bg text-black text-[1.0rem] mt-3 font-poppinsR ml-1">
              The Travel Budget API assists travelers in planning their
              expenses. It covers various aspects such as: Lodging/Hotel:
              Information about hotel names, fare ranges, and star ratings. Food
              & Sightseeing: Details on food prices and tickets for sightseeing
              attractions. Gift Shopping: Information on gift items, their
              prices, and gift shopping tips. Commute: Average fare for
              commuting within the destination.
            </p>
          </motion.div>

          <motion.div
            animate={animation5}
            initial={{ y: 30, opacity: 0 }}
            className="bg-white api_feature_panel rounded-[30px] px-[40px] py-[30px]"
          >
            <p className="self-stretch section_heading text-black text-[2.2rem] font-poppinsM    ml-1">
              Weather API
            </p>

            <p className="self-stretch section_para_white_bg text-black text-[1.0rem] mt-3 font-poppinsR ml-1">
              The Weather API provides comprehensive weather information for a
              given country or city. This includes the name of the country,
              local time, temperature in Celsius, wind speed in kilometers per
              hour, weather conditions (such as sunny, rainy, etc.), weather
              pictures, humidity levels, and cloud cover.
            </p>
          </motion.div>

          <motion.div
            animate={animation6}
            initial={{ y: 30, opacity: 0 }}
            className="bg-white api_feature_panel rounded-[30px] px-[40px] py-[30px]"
          >
            <p className="self-stretch section_heading text-black text-[2.2rem] font-poppinsM    ml-1">
              Food API
            </p>

            <p className="self-stretch section_para_white_bg text-black text-[1.0rem] mt-3 font-poppinsR ml-1">
              The Food API helps travelers explore the culinary scene of their
              destination. It lists the best bars and cafes, street food
              options, fine dining establishments, snack spots, and various
              types of restaurants, ensuring that users can find suitable dining
              options that match their preferences.
            </p>
          </motion.div>

          <motion.div
            animate={animation7}
            initial={{ y: 30, opacity: 0 }}
            className="bg-white api_feature_panel rounded-[30px] px-[40px] py-[30px]"
          >
            <p className="self-stretch section_heading text-black text-[2.2rem] font-poppinsM   ml-1">
              Local Customs API
            </p>

            <p className="self-stretch section_para_white_bg text-black text-[1.0rem] mt-3 font-poppinsR ml-1">
              The Local Customs API provides crucial information on the social
              and cultural etiquette of a destination. It includes do&apos;s and
              don&apos;ts, local etiquettes, dress codes, things to avoid
              saying, and areas to avoid, helping travelers to navigate social
              interactions respectfully and safely.
            </p>
          </motion.div>

          <motion.div
            animate={animation8}
            initial={{ y: 30, opacity: 0 }}
            className="bg-white api_feature_panel rounded-[30px] px-[40px] py-[30px]"
          >
            <p className="self-stretch section_heading text-black text-[2.2rem] font-poppinsM    ml-1">
              Flight API
            </p>

            <p className="self-stretch section_para_white_bg text-black text-[1.0rem] mt-3 font-poppinsR ml-1">
              The Flights API provides essential information regarding air
              travel. It includes details about departure and arrival locations
              and the airfare costs, helping travelers to plan and book their
              flights efficiently. These APIs collectively offer a comprehensive
              suite of tools for travelers to plan their trips meticulously,
              ensuring they have access to relevant information about their
              destinations.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
