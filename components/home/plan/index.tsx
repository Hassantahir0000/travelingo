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
  const [cardInFocus, setCardInFocus] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (CountriesCards?.length) {
      setCountryCards(CountriesCards);
    }
  }, [CountriesCards]);

  useEffect(() => {
    const card1 = document.getElementById("card_1");
    const card2 = document.getElementById("card_2");
    const card3 = document.getElementById("card_3");
    const card4 = document.getElementById("card_4");
    const card5 = document.getElementById("card_5");
    const card6 = document.getElementById("card_6");
    setCardInFocus(undefined);
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
      card5!.classList.remove("animate");
      card6!.classList.remove("animate");

      card1!.style.opacity = "1";
      card2!.style.opacity = "1";
      card3!.style.opacity = "1";
      card4!.style.opacity = "1";
      card5!.style.opacity = "1";
      card6!.style.opacity = "1";

      // Apply styles based on the current index
      if (currentIndex === 0) {

        // 100%, 90%, 80%, 70%, 70%, 70%
        // 0%,   15%, 20%, 34%, 34%, 34%
        // 20,   19,  18,  17,  16,  15
        // 1,    2,   3,   4,   5,   6

        setCardInFocus('card_1');

        card1!.style.opacity = "1";

        card1!.style.width = "100%";
        card1!.style.bottom = "0px";
        card1!.style.zIndex = "20";
        card1!.classList.add("animate");

        card2!.style.width = "90%";
        card2!.style.bottom = "15%";
        card2!.style.zIndex = "19";

        card3!.style.width = "80%";
        card3!.style.bottom = "20%";
        card3!.style.zIndex = "18";

        card4!.style.width = "70%";
        card4!.style.bottom = "34%";
        card4!.style.zIndex = "17";

        card5!.style.width = "70%";
        card5!.style.bottom = "34%";
        card5!.style.zIndex = "16";

        card6!.style.width = "70%";
        card6!.style.bottom = "34%";
        card6!.style.zIndex = "15";

      } else if (currentIndex === 1) {

        // 100%, 90%, 80%, 70%, 70%, 70%
        // 0%,   15%, 20%, 34%, 34%, 34%
        // 20,   19,  18,  17,  16,  15
        // 2,    3,   4,   5,   6,   1

        setCardInFocus('card_2');

        card1!.style.opacity = "0";

        card2!.style.width = "100%";
        card2!.style.bottom = "0px";
        card2!.style.zIndex = "20";
        card2!.classList.add("animate");

        card3!.style.width = "90%";
        card3!.style.bottom = "15%";
        card3!.style.zIndex = "19";

        card4!.style.width = "80%";
        card4!.style.bottom = "20%";
        card4!.style.zIndex = "18";

        card1!.style.width = "70%";
        card1!.style.bottom = "34%";
        card1!.style.zIndex = "15";

        card5!.style.width = "70%";
        card5!.style.bottom = "34%";
        card5!.style.zIndex = "17";

        card6!.style.width = "70%";
        card6!.style.bottom = "34%";
        card6!.style.zIndex = "16";

      } else if (currentIndex === 2) {

        // 100%, 90%, 80%, 70%, 70%, 70%
        // 0%,   15%, 20%, 34%, 34%, 34%
        // 20,   19,  18,  17,  16,  15
        // 3,    4,   5,   6,   1,   2

        setCardInFocus('card_3');

        card2!.style.opacity = "0";
        card1!.style.opacity = "1";

        card3!.style.width = "100%";
        card3!.style.bottom = "0%";
        card3!.style.zIndex = "20";
        card3!.classList.add("animate");

        card4!.style.width = "90%";
        card4!.style.bottom = "15%";
        card4!.style.zIndex = "19";

        card1!.style.width = "70%";
        card1!.style.bottom = "34%";
        card1!.style.zIndex = "16";

        card2!.style.width = "70%";
        card2!.style.bottom = "34%";
        card2!.style.zIndex = "15";

        card5!.style.width = "80%";
        card5!.style.bottom = "20%";
        card5!.style.zIndex = "18";

        card6!.style.width = "70%";
        card6!.style.bottom = "34%";
        card6!.style.zIndex = "17";


      } else if (currentIndex === 3) {
        
        // 100%, 90%, 80%, 70%, 70%, 70%
        // 0%,   15%, 20%, 34%, 34%, 34%
        // 20,   19,  18,  17,  16,  15
        // 4,    5,   6,   1,   2,   3

        setCardInFocus('card_4');

        card3!.style.opacity = "0";
        card2!.style.opacity = "1";

        card4!.style.width = "100%";
        card4!.style.bottom = "0px";
        card4!.style.zIndex = "20";
        card4!.classList.add("animate");

        card1!.style.width = "70%";
        card1!.style.bottom = "34%";
        card1!.style.zIndex = "17";

        card2!.style.width = "70%";
        card2!.style.bottom = "34%";
        card2!.style.zIndex = "16";

        card3!.style.width = "70%";
        card3!.style.bottom = "34%";
        card3!.style.zIndex = "15";

        card5!.style.width = "90%";
        card5!.style.bottom = "15%";
        card5!.style.zIndex = "19";

        card6!.style.width = "80%";
        card6!.style.bottom = "20%";
        card6!.style.zIndex = "18";

      } else if (currentIndex === 4) {

        // 100%, 90%, 80%, 70%, 70%, 70%
        // 0%,   15%, 20%, 34%, 34%, 34%
        // 20,   19,  18,  17,  16,  15
        // 5,    6,   1,   2,   3,   4

        setCardInFocus('card_5');

        card4!.style.opacity = "0";
        card3!.style.opacity = "1";

        card4!.style.width = "70%";
        card4!.style.bottom = "34%";
        card4!.style.zIndex = "15";

        card1!.style.width = "80%";
        card1!.style.bottom = "20%";
        card1!.style.zIndex = "18";

        card2!.style.width = "70%";
        card2!.style.bottom = "34%";
        card2!.style.zIndex = "17";

        card3!.style.width = "70%";
        card3!.style.bottom = "34%";
        card3!.style.zIndex = "16";

        card5!.style.width = "100%";
        card5!.style.bottom = "0%";
        card5!.style.zIndex = "20";
        card5!.classList.add("animate");

        card6!.style.width = "90%";
        card6!.style.bottom = "15%";
        card6!.style.zIndex = "19";

      } else if (currentIndex === 5) {

        // 100%, 90%, 80%, 70%, 70%, 70%
        // 0%,   15%, 20%, 34%, 34%, 34%
        // 20,   19,  18,  17,  16,  15
        // 6,    1,   2,   3,   4,   5

        setCardInFocus('card_6');

        card5!.style.opacity = "0";
        card4!.style.opacity = "1";

        card4!.style.width = "70%";
        card4!.style.bottom = "34%";
        card4!.style.zIndex = "16";

        card1!.style.width = "90%";
        card1!.style.bottom = "15%";
        card1!.style.zIndex = "19";

        card2!.style.width = "80%";
        card2!.style.bottom = "20%";
        card2!.style.zIndex = "18";

        card3!.style.width = "70%";
        card3!.style.bottom = "34%";
        card3!.style.zIndex = "17";

        card5!.style.width = "70%";
        card5!.style.bottom = "34%";
        card5!.style.zIndex = "15";

        card6!.style.width = "100%";
        card6!.style.bottom = "0%";
        card6!.style.zIndex = "20";
        card6!.classList.add("animate");
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
    planYourTripRef,
  } = useScroll();

  useEffect(() => {
    if (cardInFocus) {
      const card = document.getElementById(cardInFocus);

      setTimeout(() => {
        card!.style.opacity = '0';

        setTimeout(() => {
          card!.style.opacity = '1';
        }, 3000); 
      }, 1500); 
    }
  }, [cardInFocus]);

  return (
    <div
      ref={planYourTripRef}
      className="w-screen plan_your_trip min-h-screen h-auto drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] bg-light-sky-blue px-8 pt-2 pb-[12rem] mt-[-8rem] rounded-tl-[3rem] rounded-tr-[3rem]"
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
        <div className="flex relative w-[75%] overflow-y-hidden card_animation_container mx-auto justify-center h-[65vh] mt-[0px] mb-[200px]">
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
          <img
            onClick={() => {
              router.push("/explore");
            }}
            id="card_5"
            src={countryCards[4]?.image.src}
            className="img_card"
          />
          <img
            onClick={() => {
              router.push("/explore");
            }}
            id="card_6"
            src={countryCards[5]?.image.src}
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
