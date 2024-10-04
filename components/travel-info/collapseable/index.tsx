"use client";

import Image from "next/image";

import DownArrow from "../../shared/down-arrow";
import collapsable_arrow from "../../../public/icons/collapsable_arrow.svg";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/utils/useWindowSize";
import DownArrowSmall from "@/components/shared/down-arrow-small";

interface CollapseableProps {
  name: string;
  image: string;
  data: any;
}

export default function Collapseable({ data, name, image }: CollapseableProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<string>();
  const { width } = useWindowSize();

  const expandMenu = async () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-[fit] collapseable_main mt-[-95px] w-full my-0 flex flex-col items-center justify-start duration-500 ease-out`}
    >
      <div
        className={`w-[95%] duration-500 ease-out ${
          isExpanded && "mb-[95px]"
        }   
        `}
      >
        <div className="relative duration-500 ease-out max-w-[1180px] ml-auto mr-auto">
          <Image
            src={"/images/travel-info/container.png"}
            alt="container"
            className="z-30 relative w-full"
            width={5000}
            height={5000}
          />

          <div className="absolute collapsable_name z-40 top-[7%] left-[6%] duration-500 ease-out">
            <p className="text-[35px] text-black font-poppinsM mt-1 duration-500 ease-out">
              {name}
            </p>
          </div>

          <div className="absolute z-40 right-0 left-0 ml-auto mr-auto bottom-[17%] w-[90%] h-[65%] rounded-[27px] duration-500 ease-out">
            <Image
              id="test"
              src={image}
              alt="image"
              className="w-full h-full"
              objectFit="container"
              width={500}
              height={500}
            />
          </div>

          <div
            onClick={expandMenu}
            className={`absolute origin-center collapsable_arrow ${
              isExpanded && width! > 950 && "scale-y-[-1] origin-center"
            } right-[6%] z-[1000000] p-5 bottom-[7%] duration-500 ease-out hover:cursor-pointer`}
          >
            {width! > 650 ? <DownArrow /> : <DownArrowSmall />}
          </div>
        </div>

        <div
          className={`relative collapsable_child_container mb-[40px] flex items-start pb-10 z-[0] justify-center w-[74%] right-0 left-0 ml-auto mr-auto 
            ${
              isExpanded
                ? "h-[fit] mt-[-10%] opacity-100 flex duration-500 ease-out"
                : "h-[10px] mt-[0%] opacity-0 flex duration-500 ease-out"
            }
             bg-white rounded-br-[30px] rounded-bl-[30px] z-0 duration-500 ease-out`}
        >
          <div
            className={`w-full ${
              isExpanded ? "h-fit" : "h-[10px] overflow-y-hidden"
            } collapsable_child_container_inner bg-white pt-[130px] pb-6 px-8 flex flex-col gap-y-10 ${
              isExpanded ? "" : "h-[10px] opacity-0"
            }`}
          >
            {data !== undefined && data?.length > 0 ? (
              data?.map((data: any, index: number) => (
                <div
                  key={index}
                  className="min-h-[175px] collapsable_inner_container h-fit drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7"
                >
                  <div className="h-full collapsable_inner_container_pic_container flex items-center justify-center">
                    <img
                      src={data?.photo}
                      className="h-[100%] aspect-square collapsable_inner_container_pic w-[100%] min-h-[180px] w-[180px] rounded-[30px] object-cover"
                      alt="panel_img"
                    />
                  </div>

                  <div className="w-[70%] h-[70%] collapsable_inner_desc flex flex-col gap-y-1">
                    <h1 className="text-[25px] font-bold">{data?.name}</h1>
                    <p className="text-[15px]">{data?.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="min-h-[175px] mb-8 h-fit collapsable_inner_container drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7">
                <div className="h-full collapsable_inner_container_pic_container flex items-center justify-center">
                  <img
                    src={data?.photo}
                    className="h-[100%] aspect-square collapsable_inner_container_pic w-[100%] min-h-[180px] w-[180px] rounded-[30px] object-cover"
                    alt="panel_img"
                  />
                </div>

                <div className="w-[70%] h-[70%] collapsable_inner_desc flex flex-col gap-y-1">
                  <h1 className="text-[25px] font-bold">{data?.name}</h1>
                  <p className="text-[15px]">{data?.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
