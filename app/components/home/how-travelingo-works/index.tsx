import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="w-screen flex relative   shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] min-h-screen h-auto bg-sky-blue px-12 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <Image
        className="absolute right-0 w-[50%]"
        src={"/images/blob.svg"}
        width={500}
        height={500}
        alt=""
      />
      <h2 className="self-stretch  text-black text-[6.25rem] mt-[68px]  font-normal  leading-[6.5rem] w-[40%]">
        How <br></br> Travelingo <br></br> Works
      </h2>

      <div className="wrapper flex flex-col z-[10] ml-auto w-[50%] gap-y-5 mt-5">
        <div className="rounded-[50px] border-2 border-black flex gap-x-5 bg-white/10 p-4">
          <h2 className="self-stretch  text-black m-auto text-[6.25rem]   font-normal  leading-normal">
            01
          </h2>
          <p className="self-stretch  text-black text-[1.5rem] m-auto font-normal ">
            Travel planning made easy, with tailored travel information from
            visa requirements to cultural dos and donts, ensuring you re
            well-prepared for any journey.
          </p>
        </div>
        <div className="rounded-[50px] border-2 border-black flex gap-x-5 bg-white/10 p-4">
          <h2 className="self-stretch  text-black m-auto text-[6.25rem]   font-normal  leading-normal">
            02
          </h2>
          <p className="self-stretch  text-black text-[1.5rem] m-auto font-normal ">
            Travel planning made easy, with tailored travel information from
            visa requirements to cultural dos and donts, ensuring you re
            well-prepared for any journey.
          </p>
        </div>
        <div className="rounded-[50px] border-2 border-black flex gap-x-5 bg-white/10 p-4">
          <h2 className="self-stretch  text-black m-auto text-[6.25rem]   font-normal  leading-normal">
            03
          </h2>
          <p className="self-stretch  text-black text-[1.5rem] m-auto font-normal ">
            Travel planning made easy, with tailored travel information from
            visa requirements to cultural dos and donts, ensuring you re
            well-prepared for any journey.
          </p>
        </div>
        <div className="rounded-[50px] border-2 border-black flex gap-x-5 bg-white/10 p-4">
          <h2 className="self-stretch  text-black m-auto text-[6.25rem]   font-normal  leading-normal">
            04
          </h2>
          <p className="self-stretch  text-black text-[1.5rem] m-auto font-normal ">
            Travel planning made easy, with tailored travel information from
            visa requirements to cultural dos and donts, ensuring you re
            well-prepared for any journey.
          </p>
        </div>
        <div className="rounded-[50px] border-2 border-black flex gap-x-5 bg-white/10 p-4">
          <h2 className="self-stretch  text-black m-auto text-[6.25rem]   font-normal  leading-normal">
            05
          </h2>
          <p className="self-stretch  text-black text-[1.5rem] m-auto font-normal ">
            Travel planning made easy, with tailored travel information from
            visa requirements to cultural dos and donts, ensuring you re
            well-prepared for any journey.
          </p>
        </div>
      </div>
    </div>
  );
}
