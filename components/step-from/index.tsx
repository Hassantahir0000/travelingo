"use client";

import { countriesList } from "@/data/countries";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Destination from "./destination";
import Origin from "./origin";
import PassportOrigin from "./passpor-origin";

export default function StepForm() {
  const [step, setStep] = useState<number>(1);
  const [showCountries, setShowCountries] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("");

  return (
    <div className="container mx-auto flex items-center flex-col">
      {step == 1 && <Destination />}
      {step == 2 && <Origin />}
      {step == 3 && <PassportOrigin />}

      <div className="absolute bottom-0 right-0 mr-5 mt-[-2rem] w-fit rounded-full">
        <div className="relative">
          <CircularProgress
            classNames={{
              svg: "w-[7rem] h-[7rem] drop-shadow-lg",
              indicator: "stroke-blue-blur",

              value: "text-2xl font-semibold text-white",
            }}
            value={step == 1 ? 25 : step == 2 ? 55 : 75}
            strokeWidth={2}
            showValueLabel={true}
          />

          <div
            onClick={() => {
              if (step < 3) {
                setStep(step + 1);
              }
            }}
            className="absolute top-0 bottom-0 left-0 right-0 bg-blue-blur/50 w-[70%] justify-center cursor-pointer h-[70%] flex items-center m-auto rounded-full"
          >
            <Image
              src={"/icons/next.svg"}
              width={30}
              height={30}
              alt=""
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
