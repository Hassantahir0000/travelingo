"use client";

import { countriesList } from "@/data/countries";
import Image from "next/image";
import { useState } from "react";

type Props = {
  onPassportChange: (destination: string) => void;
};

export default function PassportOrigin({ onPassportChange }: Props) {
  const [showCountries, setShowCountries] = useState<boolean>(false);
  const [passport, setPassport] = useState<string>("");

  const handleSelect = (selectedCountry: string) => {
    setPassport(selectedCountry);
    onPassportChange(selectedCountry);
    setShowCountries(false);
  };

  return (
    <div className="container mx-auto flex items-center flex-col">
      <h2 className="self-stretch text-center font-poppinsM mb-5 text-black text-[2.2rem] md:text-[5.5rem]">
        Passport Origin
      </h2>
      <div
        onClick={() => {
          setShowCountries(!showCountries);
        }}
        className="rounded-[40px] relative flex justify-between bg-blue-blur/50 shadow-lg cursor-pointer w-full shadow-blue-blur/50 px-4 md:px-6  h-auto py-3 md:py-6 md:w-[80%] mx-auto  hover:opacity-50 transition-all duration-300 focus-visible:outline-none"
      >
        <p className="font-poppinsM text-black text-start my-auto text-[0.8rem] md:text-[1.3rem] ps-1 md:ps-4">
          {passport
            ? passport
            : " Choose as per your passport for visa info..."}
        </p>

        <Image
          src={"/icons/dropdown.svg"}
          width={30}
          height={30}
          alt=""
          className="md:w-8 md:h-8 w-4 h-4 my-auto"
        />
      </div>
      {showCountries && (
        <div className="bg-transparent w-full md:w-[80%] lex pb-5 pt-10 mt-[-2rem] shadow-lg px-10">
          <div className="h-1"></div>
          <div className=" pt-5 flex flex-col gap-y-5  max-h-[20rem]  overflow-auto scrollbar-hide">
            {countriesList?.map((country, index) => (
              <div
                onClick={() => {
                  handleSelect(country.name);
                }}
                className="flex gap-x-2 w-full justify-start hover:opacity-50 cursor-pointer"
                key={index}
              >
                <Image
                  src={country?.image}
                  width={30}
                  height={30}
                  alt=""
                  className="md:w-8 md:h-8 w-4 h-4 rounded-full"
                />
                <p className="font-poppinsR text-blue-blur text-start text-[0.8rem] md:text-[1.3rem]">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
