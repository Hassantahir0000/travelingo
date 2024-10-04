"use client";

import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Destination from "./destination";
import Origin from "./origin";
import PassportOrigin from "./passpor-origin";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StepForm() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [destination, setDestination] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [passport, setPassport] = useState<string>("");

  const handleDestinationChange = (value: string) => {
    setDestination(value);
  };

  const handleOriginChange = (value: string) => {
    setOrigin(value);
  };

  const handlePassportChange = (value: string) => {
    setPassport(value);
  };

  return (
    <div className="container step_form_container mx-auto flex items-center flex-col">
      <Toaster richColors position="top-right" />
      {step == 1 && (
        <Destination onDestinationChange={handleDestinationChange} />
      )}
      {step == 2 && <Origin onOriginChange={handleOriginChange} />}
      {step == 3 && <PassportOrigin onPassportChange={handlePassportChange} />}

      <div className="absolute bottom-0 right-0 mr-5 mt-[-2rem] w-fit rounded-full">
        <div className="relative hover:opacity-50 transition-all delay-200 ease-in-out">
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
                if (step == 1 && !destination) {
                  toast.error("Please select a destination");
                  return;
                } else if (step == 2 && !origin) {
                  toast.error("Please select a country you are traveling from");
                  return;
                } else if (step == 3 && !passport) {
                  toast.error("Please select passport origin country");
                  return;
                } else {
                  setStep(step + 1);
                }
              }
            }}
            className="absolute top-0 bottom-0 left-0 right-0 bg-blue-blur/50 w-[70%] justify-center cursor-pointer h-[70%] flex items-center m-auto rounded-full"
          >
            {step == 3 && passport ? (
              <Link
                href={{
                  pathname: `/travel-info`,
                  query: {
                    origin: origin,
                    destination: destination,
                    passportOrigin: passport,
                  },
                }}
              >
                <Image
                  src={"/icons/next.svg"}
                  width={30}
                  height={30}
                  alt=""
                  className="w-8 h-8"
                />
              </Link>
            ) : (
              <Image
                src={"/icons/next.svg"}
                width={30}
                height={30}
                alt=""
                className="w-8 h-8"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
