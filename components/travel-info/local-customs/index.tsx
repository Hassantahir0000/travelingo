import Image from "next/image";
import Collapseable from "../collapseable";

export default function LocalCustoms({ data }: { data: any }) {
  console.log("Local Custom!!!!: ", data);

  return (
    <div className="w-screen centralise z-[100] visa_info_container drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] h-auto bg-[#34ACFF] px-12 pt-[3rem] pb-[20rem] mt-[-12rem] rounded-[4rem] ">
      <div className="container max_width_container mx-auto">
        <div className="w-full">
          <h2 className="self-stretch section_heading font-poppinsM text-black text-[4.25rem] font-normal  leading-normal">
            Local Customs
          </h2>

          <p className="self-stretch section_para text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
            Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
            aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
            pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
            consequat faucibus tortor amet est.
          </p>
        </div>

        <div className="flex flex-col ">
          <Collapseable
            data={data && data[0]?.localCustomsData[0]?.dosAndDonts}
            name={"Dos & Donts"}
            image={"/images/travel-info/visa-info/do_dont.png"}
          />
          <Collapseable
            data={data && data[0]?.localCustomsData[0]?.etiquettes}
            name={"Etiquettes"}
            image={"/images/travel-info/visa-info/etiquette.png"}
          />
          <Collapseable
            data={data && data[0]?.localCustomsData[0]?.howToDress}
            name={"How to Dress"}
            image={"/images/travel-info/visa-info/how_to_dress.png"}
          />
          <Collapseable
            data={data && data[0]?.localCustomsData[0]?.noGoAreas}
            name={"No Go Areas"}
            image={"/images/travel-info/visa-info/donotenter.png"}
          />
          <Collapseable
            data={data && data[0]?.localCustomsData[0]?.whatNotToSay}
            name={"What not to say"}
            image={"/images/travel-info/visa-info/go_or_no.png"}
          />
        </div>
      </div>
    </div>
  );
}
