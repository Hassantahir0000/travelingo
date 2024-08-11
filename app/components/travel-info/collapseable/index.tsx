"use client";

import Image from "next/image";

import DownArrow from "../down-arrow";
import { useState } from "react";

export default function Collapseable() {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandMenu = async () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-fit pb-10 min-h-[200vh] w-full bg-[#5FBEFF] flex items-start justify-center">
      <div className="w-[85%]">
        <div className="relative">
          <Image
            src={"/images/travel-info/container.png"}
            alt="container"
            className="z-30 relative w-full"
            width={500}
            height={500}
          />

          <div className="absolute z-40 top-[8%] left-[6%] w-[300px]">
            <p className="text-[35px]">Airfare</p>
          </div>

          <div className="absolute z-40 right-0 left-0 ml-auto mr-auto bottom-[17%] w-[90%] h-[65%] rounded-[27px]">
            <Image
              src={"/images/travel-info/image.png"}
              alt="image"
              className="w-full h-full"
              objectFit="container"
              width={500}
              height={500}
            />
          </div>

          <div
            onClick={expandMenu}
            className="absolute z-40 right-[6%] p-5 bottom-[7%] duration-500 ease-out hover:cursor-pointer hover:bottom-[6%]"
          >
            <DownArrow />
          </div>

          <div
            className={`absolute flex items-start pb-10 justify-center top-[77%] w-[90%] right-0 left-0 ml-auto mr-auto ${
              isExpanded ? "h-[fit] opacity-100" : "top-[15%] opacity-0"
            } bg-white rounded-br-[30px] rounded-bl-[30px] z-0 duration-300 ease-out`}
          >
            <div
              className={`${
                isExpanded ? "opacity-100" : "opacity-100"
              } w-[95%] h-[70%] mt-32 p-5 flex flex-col gap-y-8`}
            >
              <div className="h-[175px] drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7">
                <div className="h-full">
                  <Image
                    src={"/images/travel-info/panel_img.png"}
                    className="h-[100%] w-[100%]"
                    alt="panel_img"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="w-[70%] h-[70%] flex flex-col gap-y-1">
                  <h1 className="text-[25px] font-bold">Business Visa</h1>
                  <p className="text-[15px]">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="h-[175px] drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7">
                <div className="h-full">
                  <Image
                    src={"/images/travel-info/panel_img.png"}
                    className="h-[100%] w-[100%]"
                    alt="panel_img"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="w-[70%] h-[70%] flex flex-col gap-y-1">
                  <h1 className="text-[25px] font-bold">Business Visa</h1>
                  <p className="text-[15px]">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div
                className={`h-[175px] drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7`}
              >
                <div className="h-full">
                  <Image
                    src={"/images/travel-info/panel_img.png"}
                    className="h-[100%] w-[100%]"
                    alt="panel_img"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="w-[70%] h-[70%] flex flex-col gap-y-1">
                  <h1 className="text-[25px] font-bold">Business Visa</h1>
                  <p className="text-[15px]">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="h-[175px] drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7">
                <div className="h-full">
                  <Image
                    src={"/images/travel-info/panel_img.png"}
                    className="h-[100%] w-[100%]"
                    alt="panel_img"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="w-[70%] h-[70%] flex flex-col gap-y-1">
                  <h1 className="text-[25px] font-bold">Business Visa</h1>
                  <p className="text-[15px]">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
