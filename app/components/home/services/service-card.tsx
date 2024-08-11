import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: any;
}

const ServiceCard: FC<CardProps> = ({ data }) => {
  return (
    <div className="service-card flex-col relative items-start justify-center w-full above-md:h-screen ">
      <div className="hello">hello</div>
      <div className="left-0 right-0 my-6 border bg-custom-gradient rounded-xl flex-col md:flex-row justify-center lg:my-0 md:mx-auto above-md:absolute">
        <div className="justify-center text-center text-nk-black w-full">
          <div
            rel="noopener noreferrer"
            className="block relative sm:w-1/2 lg:w-full min-h-[18.75rem] lg:min-h-[29rem] 2xl:min-h-[36rem] w-full h-full rounded-xl overflow-hidden items-center justify-center my-auto"
          >
            <Image
              src={data.image}
              alt="service-card"
              fill
              className="w-full h-full mx-auto object-cover"
              priority
            />
          </div>

          {/* Text section */}
          {/* <div className=" absolute py-4 lg:py-8 md:pr-3 sm:w-1/2 md:flex-col sm:text-left lg:w-[55%]">
            <h1 className="font-metropolis-bold text-2xl lg:pb-2 lg:pt-6 lg:text-3xl 2xl:text-5xl">
              {data.title}
            </h1>

            <div className="my-2 md:my-3 line-clamp-4 lg:line-clamp-6">
              <p className="break-words sm:block text-sm font-metropolis-thin md:text-xl 2xl:text-2xl">
                {data.description}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
