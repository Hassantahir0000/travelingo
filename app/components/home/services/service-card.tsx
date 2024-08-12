import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: any;
}

const ServiceCard: FC<CardProps> = ({ data }) => {
  return (
    <div className="service-card flex-col relative items-start justify-center w-full above-md:h-screen ">
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
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
