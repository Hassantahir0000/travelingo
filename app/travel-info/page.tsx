"use client";

import Footer from "@/components/shared/footer";
import TravelInfoBanner from "../../components/travel-info/banner";
import Food from "../../components/travel-info/food";
import TravelBudget from "../../components/travel-info/travel-budget";
import TravelInfoCards from "../../components/travel-info/travel-info-cards";
import VisaInfo from "../../components/travel-info/visa-info";
import Culture from "@/components/travel-info/culture";
import LocalCustoms from "@/components/travel-info/local-customs";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import {
  fetchCulture,
  fetchFood,
  fetchLocalCustoms,
  fetchVisaInfo,
  fetchWeather,
} from "@/api/travel-info";
import { useSearchParams } from "next/navigation";

export default function TravelInfo() {
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
  const [language, setLanguage] = useState<string>("English");

  const getCulture = async () => {
    if (destination) {
      const resp = await fetchCulture(destination, language);
      console.log("culture", resp);
    }
  };

  const getFood = async () => {
    if (destination) {
      const resp = await fetchFood(destination, language);
      console.log("food", resp);
    }
  };

  const getLocalCustoms = async () => {
    if (destination) {
      const resp = await fetchLocalCustoms(destination, language);
      console.log("local custom", resp);
    }
  };

  const getVisaInfo = async () => {
    if (origin && destination) {
      const resp = await fetchVisaInfo(origin, destination);
      console.log("visa info", resp);
    }
  };

  const getWeather = async () => {
    if (destination) {
      const resp = await fetchWeather(destination);
      console.log("weather", resp);
    }
  };

  useEffect(() => {
    getCulture();
    getFood();
    getLocalCustoms();
    getVisaInfo();
    getWeather();
    setLoading(false);
  }, []);

  return (
    <main className=" min-h-screen">
      {loading ? (
        <div className="h-screen w-screen flex flex-col mx-auto my-auto justify-center items-center">
          <BounceLoader color="#04d9ff" />
          <p className="text-black text-center font-poppinsR">Loading....</p>
        </div>
      ) : (
        <>
          <TravelInfoBanner />
          <div className="absolute z-[10]">
            <TravelInfoCards />
            <VisaInfo />
            <TravelBudget />
            <Food />
            <Culture />
            <LocalCustoms />
            <Footer
              heading={"Travelingo API"}
              description={""}
              buttonLabel={"Get Our API"}
            />
          </div>
        </>
      )}
    </main>
  );
}
