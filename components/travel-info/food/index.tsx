import Image from "next/image";
import Collapseable from "../collapseable";

export default function Food({ data }: { data: any }) {

  return (
    <div className="w-screen centralise z-[100] visa_info_container h-auto bg-[#4DB7FF] px-12 pt-[3rem] pb-[20rem] mt-[-12rem] drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] rounded-[4rem] ">
      <div className="container max_width_container mx-auto">
        <div className="w-full">
          <h2 className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] font-normal  leading-normal">
            Food
          </h2>

          <p className="self-stretch section_para_white_bg text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
            Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
            aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
            pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
            consequat faucibus tortor amet est.
          </p>
        </div>

        <div className="flex flex-col ">
          <Collapseable
            data={data && data[0]?.foodData[0]?.bestBarsCafes}
            name={"Bars & Cafes"}
            image={"/images/travel-info/visa-info/bars.png"}
          />
          <Collapseable
            data={data && data[0]?.foodData[0]?.streetFood}
            name={"Street Food"}
            image={"/images/travel-info/visa-info/streetfood.png"}
          />
          <Collapseable
            data={data && data[0]?.foodData[0]?.fineDining}
            name={"Fine Dinning"}
            image={"/images/travel-info/visa-info/finedine.png"}
          />
          <Collapseable
            data={data && data[0]?.foodData[0]?.snacks}
            name={"Snacks"}
            image={"/images/travel-info/visa-info/snacks.png"}
          />
          <Collapseable
            data={data && data[0]?.foodData[0]?.restaurants}
            name={"Restaurants"}
            image={"/images/travel-info/visa-info/restaurant.png"}
          />
        </div>
      </div>
    </div>
  );
}
