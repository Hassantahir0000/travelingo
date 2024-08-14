import Image from "next/image";
import Collapseable from "../collapseable";

export default function LocalCustoms() {
  return (
    <div className="w-screen z-[100]   shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] h-auto bg-light-sky-blue px-12 pt-[3rem] pb-[20rem] mt-[-12rem] rounded-[4rem] ">
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] font-normal  leading-normal">
            Local Customs
          </h2>

          <p className="self-stretch  text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
            Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
            aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
            pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
            consequat faucibus tortor amet est.
          </p>
        </div>

        <div className="flex flex-col ">
          <Collapseable
            name={"Bars & Cafes"}
            image={"/images/travel-info/visa-info/visa-type.png"}
          />
          <Collapseable
            name={"Street Food"}
            image={"/images/travel-info/visa-info/documents.png"}
          />
          <Collapseable
            name={"Fine Dinning"}
            image={"/images/travel-info/visa-info/embassy.png"}
          />
          <Collapseable
            name={"Snacks"}
            image={"/images/travel-info/visa-info/health.png"}
          />
          <Collapseable
            name={"Restaurants"}
            image={"/images/travel-info/visa-info/extension.png"}
          />
        </div>
      </div>
    </div>
  );
}
