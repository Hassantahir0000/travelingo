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
      console.log("VISA!!!!: ", resp);
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
      console.log("TRAVEL BUDGET!!!!: ", resp);
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

    console.log("HELLOOO");
  }, [destination]);

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
            <TravelInfoCards />
            {visaInfo && visaInfo?.length && <VisaInfo data={visaInfo} />}
            {travelBudgetData && travelBudgetData?.length > 0 && (
              <TravelBudget data={travelBudgetData} />
            )}
            {foodData && foodData?.length && <Food data={foodData} />}
            {cultureData && cultureData?.length && (
              <Culture data={cultureData} />
            )}
            {localCustomsData && localCustomsData?.length && (
              <LocalCustoms data={localCustomsData} />
            )}
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

export default function TravelInfo() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <TravelInfoContent />
    </Suspense>
  );
}
