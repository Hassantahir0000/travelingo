"use client";

import Footer from "@/components/shared/footer";
import TravelInfoBanner from "../../components/travel-info/banner";
import Food from "../../components/travel-info/food";
import TravelBudget from "../../components/travel-info/travel-budget";
import TravelInfoCards from "../../components/travel-info/travel-info-cards";
import VisaInfo from "../../components/travel-info/visa-info";
import Culture from "@/components/travel-info/culture";
import LocalCustoms from "@/components/travel-info/local-customs";
import { useEffect, useState, Suspense } from "react";
import { BounceLoader } from "react-spinners";
import {
  fetchCulture,
  fetchFood,
  fetchLocalCustoms,
  fetchTravelBudget,
  fetchVisaInfo,
  fetchWeather,
} from "@/api/travel-info";
import { useSearchParams } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

function TravelInfoContent() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const passportOrigin = searchParams.get("passportOrigin");
  const [loading, setLoading] = useState<boolean>(true);
  const [visaInfo, setVisaInfoData] = useState<any>();
  const [travelBudgetData, setTravelBudgetData] = useState<any>();
  const [foodData, setFoodData] = useState<any>();
  const [cultureData, setCultureData] = useState<any>();
  const [localCustomsData, setLocalCustomsData] = useState<any>();
  const [weatherData, setWeatherData] = useState<any>();
  const [language, setLanguage] = useState<string>("English");

  const visaInfoRef = useRef<HTMLDivElement>(null);
  const travelBudgetRef = useRef<HTMLDivElement>(null);
  const foodDataRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const localCustomRef = useRef<HTMLDivElement>(null);

  const getCulture = async () => {
    if (destination) {
      const resp = await fetchCulture(destination, language);
      setCultureData(resp);
    }
  };

  const getFood = async () => {
    if (destination) {
      const resp = await fetchFood(destination, language);
      setFoodData(resp);
    }
  };

  const getLocalCustoms = async () => {
    if (destination) {
      const resp = await fetchLocalCustoms(destination, language);
      setLocalCustomsData(resp);
    }
  };

  const getVisaInfo = async () => {
    if (origin && destination) {
      const resp = await fetchVisaInfo(origin, destination);
      setVisaInfoData(resp);
    }
  };

  const getWeather = async () => {
    if (destination) {
      const resp = await fetchWeather(destination);
      setWeatherData(resp);
    }
  };

  const getTravelBudget = async () => {
    if (destination) {
      const resp = await fetchTravelBudget(destination);
      setTravelBudgetData(resp);
    }
  };

  useEffect(() => {
    if (destination) {
      getCulture();
      getFood();
      getLocalCustoms();
      getVisaInfo();
      getWeather();
      getTravelBudget();
      setLoading(false);
    }
  }, [destination]);

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

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {loading ? (
        <div className="h-screen w-screen flex flex-col mx-auto my-auto justify-center items-center">
          <BounceLoader color="#04d9ff" />
          <p className="text-black text-center font-poppinsR">Loading....</p>
        </div>
      ) : (
        <>
          <TravelInfoBanner destination={destination} />
          <div className="absolute z-[10]">
            <motion.section
              ref={ref}
              className="w-screen centralise z-[100] travel_info_card_container h-auto bg-[#94D4FF] px-12 pt-[3rem] pb-[20rem] mt-[-2.6rem] rounded-tl-[3rem] rounded-tr-[3rem] "
            >
              <div className="container max_width_container mx-auto flex flex-col items-center gap-y-8">
                <div className="w-full">
                  <motion.h2
                    animate={animation1}
                    initial={{ y: 30, opacity: 0 }}
                    className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] font-normal  leading-normal"
                  >
                    Travel Info
                  </motion.h2>

                  <motion.p
                    animate={animation2}
                    initial={{ y: 30, opacity: 0 }}
                    className="self-stretch section_para_white_bg text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]"
                  >
                    Lorem ipsum dolor sit amet consectetur. Tristique cursus
                    faucibus aliquet amet massa. Viverra elit tempor libero sit
                    mattis ut ac pharetra. Ultrices lectus et sagittis aliquet
                    nam ornare. Iaculis consequat faucibus tortor amet est.
                  </motion.p>
                </div>

                <div className="grid grid-cols-3 gap-4 w-[95%] travel_info_cards_container">
                  <motion.img
                    animate={animation3}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/travel-info/info-cards/visa-info.png"}
                    width={500}
                    height={500}
                    alt=""
                    whileHover={{ translateY: -14 }}
                    onClick={() => handleScroll(visaInfoRef)}
                    className="cursor-pointer "
                  />

                  <motion.img
                    animate={animation4}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/travel-info/info-cards/travel-budget.png"}
                    width={500}
                    height={500}
                    alt=""
                    whileHover={{ translateY: -14 }}
                    onClick={() => handleScroll(travelBudgetRef)}
                    className="cursor-pointer "
                  />
                  <motion.img
                    animate={animation5}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/travel-info/info-cards/weather.png"}
                    width={500}
                    height={500}
                    whileHover={{ translateY: -14 }}
                    alt=""
                  />

                  <motion.img
                    animate={animation6}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/travel-info/info-cards/food.png"}
                    width={500}
                    height={500}
                    alt=""
                    whileHover={{ translateY: -14 }}
                    onClick={() => handleScroll(foodDataRef)}
                    className="cursor-pointer "
                  />
                  <motion.img
                    animate={animation7}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/travel-info/info-cards/culture.png"}
                    width={500}
                    height={500}
                    alt=""
                    whileHover={{ translateY: -14 }}
                    onClick={() => handleScroll(cultureRef)}
                    className="cursor-pointer "
                  />
                  <motion.img
                    animate={animation8}
                    initial={{ y: 30, opacity: 0 }}
                    src={"/images/travel-info/info-cards/customs.png"}
                    width={500}
                    height={500}
                    alt=""
                    whileHover={{ translateY: -14 }}
                    onClick={() => handleScroll(localCustomRef)}
                    className="cursor-pointer "
                  />
                </div>
              </div>
            </motion.section>

            <div id="visa-info" ref={visaInfoRef}>
              {visaInfo && visaInfo?.length && <VisaInfo data={visaInfo} />}
            </div>

            <div
              id="travel-budget"
              ref={travelBudgetRef}
              className="cursor-pointer"
            >
              {travelBudgetData && travelBudgetData?.length > 0 && (
                <TravelBudget data={travelBudgetData} />
              )}
            </div>

            <div id="food-data" ref={foodDataRef} className="cursor-pointer">
              {foodData && foodData?.length && <Food data={foodData} />}
            </div>

            <div id="culture" ref={cultureRef} className="cursor-pointer">
              {cultureData && cultureData?.length && (
                <Culture data={cultureData} />
              )}
            </div>

            <div
              id="local-custom"
              ref={localCustomRef}
              className="cursor-pointer"
            >
              {localCustomsData && localCustomsData?.length && (
                <LocalCustoms data={localCustomsData} />
              )}
            </div>

            <Footer
              heading={"Travelingo API"}
              description={""}
              buttonLabel={"Get Our API"}
              buttonRedirectURL={'/connect-api'}
            />
          </div>
        </>
      )}
    </main>
  );
}

export default function TravelInfo() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <TravelInfoContent />
    </Suspense>
  );
}
