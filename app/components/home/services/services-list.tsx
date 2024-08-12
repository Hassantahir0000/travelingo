"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import ServiceCard from "./service-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CountriesCards } from "@/utils/data";

gsap.registerPlugin(ScrollTrigger);

const ServicesList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const [windowSize, setWindowSize] = useState<number>(0);
  const breakPoint = 768;
  const triggerIdsRef = useRef([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize > breakPoint) {
      const newTriggerIds = [];

      const cards: HTMLDivElement[] = gsap.utils.toArray(".service-card");
      const spacer = 20;
      cards.forEach((card, index) => {
        const triggerId1 = "service_card_trigger" + index;
        const triggerId2 = "service_card-" + index;

        newTriggerIds.push(triggerId1, triggerId2);
        gsap.to(card, {
          scale: () => 0.85 + index * 0.02,
          ease: "none",
          scrollTrigger: {
            id: "service_card_trigger" + index,
            trigger: card,
            start: "top-=" + 25 * index + " 25%",
            end: "top 5%",
            scrub: true,
            markers: true,
            pin: true,
          },
        });
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top-=${index * spacer} 20%`,
            endTrigger: ".card-container",
            end: `bottom top+=${50 + cards.length * spacer}`,
            pin: true,
            pinSpacing: false,
            id: "service_card-" + index,
            scrub: true,
          },
        });
      });
    } else {
      triggerIdsRef.current.forEach((triggerId) => {
        ScrollTrigger.getById(triggerId)?.kill();
      });
    }

    return () => {
      triggerIdsRef.current.forEach((triggerId) => {
        ScrollTrigger.getById(triggerId)?.kill();
      });
    };
  }, [CountriesCards, windowSize]);

  return (
    <div
      ref={ref}
      data-cursor-text
      className="card-container hello py-8 mb-[50rem] px-10 min-h-screen md:py-1"
    >
      {CountriesCards.length > 0 &&
        CountriesCards?.map((country, index) => (
          <ServiceCard key={index} data={country} />
        ))}
    </div>
  );
};

export default ServicesList;
