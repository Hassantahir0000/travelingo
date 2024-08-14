import Image from "next/image";

export default function TravelInfoCards() {
  return (
    <div className="w-screen z-[100]   shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] h-auto bg-pale-cyan px-12 pt-[3rem] pb-[20rem] mt-[-1rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <div className="w-full">
        <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] font-normal  leading-normal">
          Travel Info
        </h2>

        <p className="self-stretch  text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
          Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
          aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
          pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
          consequat faucibus tortor amet est.
        </p>
      </div>

      <div className="grid grid-cols-3">
        <Image
          src={"/images/travel-info/info-cards/visa-info.png"}
          width={500}
          height={500}
          alt=""
        />

        <Image
          src={"/images/travel-info/info-cards/travel-budget.png"}
          width={500}
          height={500}
          alt=""
        />
        <Image
          src={"/images/travel-info/info-cards/weather.png"}
          width={500}
          height={500}
          alt=""
        />

        <Image
          src={"/images/travel-info/info-cards/food.png"}
          width={500}
          height={500}
          alt=""
        />
        <Image
          src={"/images/travel-info/info-cards/culture.png"}
          width={500}
          height={500}
          alt=""
        />
        <Image
          src={"/images/travel-info/info-cards/customs.png"}
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
}
