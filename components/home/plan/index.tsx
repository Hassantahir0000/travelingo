"use client";

import Image from "next/image";
import ServicesList from "../services/services-list";
import { useScroll } from "@/utils/context";
import { CountriesCards } from "@/utils/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlanYourTrip() {
  const router = useRouter();
  const [countryCards, setCountryCards] = useState<any[]>([]);

  useEffect(() => {
    if (CountriesCards?.length) {
      setCountryCards(CountriesCards);
    }
  }, [CountriesCards]);

  console.log(countryCards);

  useEffect(() => {
    const card1 = document.getElementById("card_1");
    const card2 = document.getElementById("card_2");
    const card3 = document.getElementById("card_3");
    const card4 = document.getElementById("card_4");

    let currentIndex = 0;

    function animateCard() {
      if (currentIndex >= countryCards.length) {
        currentIndex = 0;
      }

      // Remove 'animate' class from all cards first
      card1!.classList.remove("animate");
      card2!.classList.remove("animate");
      card3!.classList.remove("animate");
      card4!.classList.remove("animate");

      // Apply styles based on the current index
      if (currentIndex === 0) {
        // 1,2,3,4
        card1!.style.width = "100%";
        card1!.style.top = "0px";
        card1!.style.zIndex = "20";
        card1!.classList.add("animate");

        card2!.style.width = "90%";
        card2!.style.top = "-20px";
        card2!.style.zIndex = "19";

        card3!.style.width = "80%";
        card3!.style.top = "-40px";
        card3!.style.zIndex = "18";

        card4!.style.width = "70%";
        card4!.style.top = "-60px";
        card4!.style.zIndex = "17";
      } else if (currentIndex === 1) {
        // 2,3,4,1
        card2!.style.width = "100%";
        card2!.style.top = "0px";
        card2!.style.zIndex = "20";
        card2!.classList.add("animate");

        card3!.style.width = "90%";
        card3!.style.top = "-20px";
        card3!.style.zIndex = "19";

        card4!.style.width = "80%";
        card4!.style.top = "-40px";
        card4!.style.zIndex = "18";

        card1!.style.width = "70%";
        card1!.style.top = "-60px";
        card1!.style.zIndex = "17";
      } else if (currentIndex === 2) {
        // 3,4,1,2
        card3!.style.width = "100%";
        card3!.style.top = "0px";
        card3!.style.zIndex = "20";
        card3!.classList.add("animate");

        card4!.style.width = "90%";
        card4!.style.top = "-20px";
        card4!.style.zIndex = "19";

        card1!.style.width = "80%";
        card1!.style.top = "-40px";
        card1!.style.zIndex = "18";

        card2!.style.width = "70%";
        card2!.style.top = "-60px";
        card2!.style.zIndex = "17";
      } else if (currentIndex === 3) {
        // 4,1,2,3
        card4!.style.width = "100%";
        card4!.style.top = "0px";
        card4!.style.zIndex = "20";
        card4!.classList.add("animate");

        card1!.style.width = "90%";
        card1!.style.top = "-20px";
        card1!.style.zIndex = "19";

        card2!.style.width = "80%";
        card2!.style.top = "-40px";
        card2!.style.zIndex = "18";

        card3!.style.width = "70%";
        card3!.style.top = "-60px";
        card3!.style.zIndex = "17";
      }

      // Increment currentIndex to move to the next card
      currentIndex++;

      // Call animateCard again after 2 seconds
      setTimeout(animateCard, 2000);
    }

    // Start the animation if there are cards
    if (countryCards?.length > 0) {
      animateCard();
    }
  }, [countryCards]);

  const {
    scrollTo,
    howItWorksRef,
    langLearnerRef,
    langTranslatorRef,
    planYourTripRef,
  } = useScroll();

  return (
    <div
      ref={planYourTripRef}
      className="w-screen min-h-screen h-auto drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] bg-light-sky-blue px-8 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3rem] rounded-tr-[3rem]"
    >
      <div className="container mx-auto mb-[70px]">
        <h2 className="self-stretch font-poppinsM text-[2rem] md:text-[4.25rem] mt-[38px] mb-0 font-normal section_heading leading-normal">
          Plan Your Trip
        </h2>

        <p className="self-stretch section_para text-black text-[0.8rem] mb-[30px] font-poppinsR font-normal mt-2 md:mb-5 md:leading-[2.1rem]">
          Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
          aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
          pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
          consequat faucibus tortor amet est.
        </p>
      </div>

      {/* <ServicesList /> */}

      {countryCards?.length > 0 && (
        <div className="flex relative w-[65%] card_animation_container mx-auto justify-center h-[50vh] mt-[250px] mb-[200px]">
          <img
            onClick={() => {
              router.push("/explore");
            }}
            id="card_1"
            src={countryCards[0]?.image.src}
            className="img_card"
          />
          <img
            onClick={() => {
              router.push("/explore");
            }}
            id="card_2"
            src={countryCards[1]?.image.src}
            className="img_card"
          />
          <img
            onClick={() => {
              router.push("/explore");
            }}
            id="card_3"
            src={countryCards[2]?.image.src}
            className="img_card"
          />
          <img
            onClick={() => {
              router.push("/explore");
            }}
            id="card_4"
            src={countryCards[3]?.image.src}
            className="img_card"
          />
        </div>
      )}

      <div className="w-[90%] mx-auto mt-5">
        <Image
          src={"/images/home/plan-trip/map.svg"}
          width={1000}
          height={1000}
          alt="map"
          className="w-screen"
        />
      </div>
    </div>
  );
}
