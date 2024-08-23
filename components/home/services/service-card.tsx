import React, { FC, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CardProps {
  data: any;
  index: number;
  arrayLength: number;
}

const ServiceCard: FC<CardProps> = ({ data, index, arrayLength }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (index === arrayLength - 1) {
          router.push("/explore");
        }
      }}
      className="service-card cursor-pointer flex-col relative items-start justify-center w-full above-md:h-screen "
    >
      <div className="left-0 right-0 my-6  rounded-xl flex-col md:flex-row justify-center lg:my-0 md:mx-auto above-md:absolute">
        <div className="justify-center text-center text-nk-black w-full">
          <div
            rel="noopener noreferrer"
            className="block relative service_card min-h-[18.75rem] lg:min-h-[29rem] 2xl:min-h-[36rem] w-full h-full rounded-xl overflow-hidden items-center justify-center my-auto"
          >
            <Image
              src={data.image}
              alt="service-card"
              fill
              className="w-full h-full mx-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
