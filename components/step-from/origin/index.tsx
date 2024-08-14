"use client";

import { countriesList } from "@/data/countries";
import Image from "next/image";
import { useState } from "react";

type Props = {
  onOriginChange: (destination: string) => void;
};

export default function Destination({ onOriginChange }: Props) {
  const [showCountries, setShowCountries] = useState<boolean>(false);

  const handleSelect = (selectedCountry: string) => {
    onOriginChange(selectedCountry);
  };
  return (
    <div className="container mx-auto flex items-center flex-col">
      <h2 className="self-stretch text-center font-poppinsM mb-5 text-black text-[5.5rem]">
        Traveling From...
      </h2>
      <div
        onClick={() => {
          setShowCountries(!showCountries);
        }}
        className="rounded-[40px] relative flex justify-between bg-blue-blur/50 shadow-lg cursor-pointer shadow-blue-blur/50 px-6  h-auto py-6 md:w-[80%] mx-auto  hover:opacity-50 transition-all duration-300 focus-visible:outline-none"
      >
        <p className="font-poppinsM text-black text-start text-[1.3rem] ps-4">
          Choose your current location...
        </p>

        <Image
          src={"/icons/dropdown.svg"}
          width={30}
          height={30}
          alt=""
          className="w-8 h-8"
        />
      </div>
      {showCountries && (
        <div className="bg-transparent w-[80%] lex pb-5 pt-10 mt-[-2rem] shadow-lg px-10">
          <div className="h-1"></div>
          <div className=" pt-5 flex flex-col gap-y-5 f  max-h-[20rem]  overflow-auto scrollbar-hide">
            {countriesList?.map((country, index) => (
              <div
                onClick={() => {
                  handleSelect(country);
                }}
                className="flex gap-x-2 w-full justify-start hover:opacity-50 cursor-pointer"
                key={index}
              >
                <Image
                  src={country?.image}
                  width={30}
                  height={30}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <p className="font-poppinsR text-blue-blur text-start text-[1.3rem]">
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
