import Image from "next/image";
import Collapseable from "../collapseable";

export default function TravelBudget({ data }: { data: any }) {

  return (
    <div className="w-screen centralise z-[100] visa_info_container shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] h-auto bg-[#5FBEFF] px-12 pt-[3rem] pb-[150px] mt-[-12rem] drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] rounded-[4rem] ">
      <div className="container max_width_container mx-auto">
        <div className="w-full mb-[130px]">
          <h2 className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] font-normal  leading-normal">
            Travel Budget
          </h2>

          <p className="self-stretch section_para_white_bg text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
            Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
            aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
            pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
            consequat faucibus tortor amet est.
          </p>
        </div>

        <div className="flex flex-col h-fit w-full">
          <Collapseable
            data={data && data[0]?.infoData[0]?.averageFare}
            name={"Airfare"}
            image={"/images/travel-info/visa-info/airfare.png"}
          />
          <Collapseable
            data={data && data[0]?.infoData[0]?.SightSeeing}
            name={"Sightseeing"}
            image={"/images/travel-info/visa-info/sightseeing.png"}
          />
          <Collapseable
            data={data && data[0]?.infoData[0]?.food}
            name={"Food"}
            image={"/images/travel-info/visa-info/food.png"}
          />
          <Collapseable
            data={data && data[0]?.infoData[0]?.giftShopping}
            name={"Gift Shopping"}
            image={"/images/travel-info/visa-info/gift.png"}
          />
        </div>
      </div>
    </div>
  );
}
