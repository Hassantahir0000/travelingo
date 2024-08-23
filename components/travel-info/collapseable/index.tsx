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

  console.log("VISA INFOOOOO: ", data);

  useEffect(() => {
    if (width) {
      if (data && data?.length > 0) {
        const margin = width! < 800 ? 200 : 175;

        console.log("margin: ", margin);
        console.log("width: ", width);

        setHeight((data?.length * Number(margin) + 1000).toString() + "px");
      } else if (data && !data?.length) {
        const margin = width! < 650 ? 1200 : 175;

        setHeight((1 * margin + 700).toString() + "px");
      }
    }
  }, [data, width]);

  console.log("HEIGHT: ", height);

  return (
    <div className="h-fit w-full flex items-start justify-center">
      <div
        style={{ height: isExpanded ? height : "fit-content" }}
        className={`w-[95%]`}
      >
        <div className="relative">
          <Image
            src={"/images/travel-info/container.png"}
            alt="container"
            className="z-30 relative w-full"
            width={500}
            height={500}
          />

          <div className="absolute collapsable_name z-40 top-[7%] left-[6%] ">
            <p className="text-[35px] text-black font-poppinsM mt-1">{name}</p>
          </div>

          <div className="absolute z-40 right-0 left-0 ml-auto mr-auto bottom-[17%] w-[90%] h-[65%] rounded-[27px]">
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
            className={`absolute collapsable_arrow right-[6%] z-[1000000] p-5 bottom-[7%] duration-500 ease-out hover:cursor-pointer hover:bottom-[6%]`}
          >
            {width! > 650 ? <DownArrow /> : <DownArrowSmall />}
          </div>

          <div
            className={`absolute flex collapsable_container items-start pb-10 z-[0] justify-center top-[77%] w-[90%] right-0 left-0 ml-auto mr-auto ${
              isExpanded
                ? "h-[fit] opacity-100 flex"
                : "top-[15%] opacity-0 hidden"
            } bg-white rounded-br-[30px] rounded-bl-[30px] z-0 duration-300 ease-out`}
          >
            <div
              className={`${
                isExpanded ? "opacity-100" : "opacity-100"
              } w-[95%] h-[70%] mt-32 p-5 flex flex-col gap-y-8`}
            >
              {data !== undefined && data?.length > 0 ? (
                data?.map((data: any, index: number) => (
                  <div
                    key={index}
                    className="min-h-[175px] collapsable_inner_container h-fit drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7"
                  >
                    <div className="h-full collapsable_inner_container_pic_container flex items-center justify-center pl-4">
                      <img
                        src={data?.photo}
                        className="h-[100%] collapsable_inner_container_pic w-[100%] max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px] rounded-[30px] object-cover"
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
                <div className="min-h-[175px] h-fit collapsable_inner_container drop-shadow-[0_6px_10px_rgba(24,161,255,0.5)] rounded-[37px] bg-white w-full flex flex-row items-center gap-x-7">
                  <div className="h-full collapsable_inner_container_pic_container flex items-center justify-center pl-4">
                    <img
                      src={data?.photo}
                      className="h-[100%] collapsable_inner_container_pic w-[100%] max-w-[150px] max-h-[150px] rounded-[30px]"
                      alt="panel_img"
                    />
                  </div>

                  <div className="w-[70%] h-[70%] collapsable_inner_desc flex flex-col gap-y-1">
                    <h1 className="text-[25px] font-bold">{data?.name}</h1>
                    <p className="text-[15px]">
                      {data?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
