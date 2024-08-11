import Image from "next/image";
import ServicesList from "../services/services-list";

export default function PlanYourTrip() {
  return (
    <div className="w-screen min-h-screen h-auto bg-light-sky-blue px-8 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%]">
      <h2 className="self-stretch  text-black text-[6.25rem] mt-[68px]  font-normal  leading-normal">
        Plan Your Trip
      </h2>

      <p className="self-stretch  text-black text-[2.5rem]  font-normal  leading-[3rem]">
        Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
        aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
        pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
        consequat faucibus tortor amet est.
      </p>

      <div className="w-[90%] mx-auto mt-5">
        <Image
          src={"/images/home/plan-trip/map.png"}
          width={1000}
          height={1000}
          alt="map"
          className="w-screen"
        />
      </div>
      {/* <ServicesList /> */}
    </div>
  );
}
