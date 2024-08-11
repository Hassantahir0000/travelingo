import Image from "next/image";

export default function LanguageLearner() {
  return (
    <div className="w-screen  shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] min-h-screen h-auto bg-maya-blue px-8 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <h2 className="self-stretch  text-black text-[6.25rem] mt-[68px]  font-normal  leading-normal">
        Language Learner
      </h2>

      <p className="self-stretch  text-black text-[2.5rem]  font-normal  leading-[3rem]">
        Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
        aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
        pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
        consequat faucibus tortor amet est.
      </p>

      <div className="bg-dodger-blue rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] mt-[5rem]">
        <div className="flex flex-row">
          <div className="w-[55%] py-5 pl-8">
            <h2 className="self-stretch  text-black text-[6.25rem] mt-[68px]  font-normal  leading-[7rem]">
              Become a Language Expert with
            </h2>
            <h2 className="self-stretch font-bold text-black text-[6.25rem]  leading-normal">
              Travelingo
            </h2>

            <p className="self-stretch  text-black text-[25px]  font-normal  leading-[3rem]">
              Lorem ipsum dolor sit amet consectetur. Auctor rhoncus at bibendum
              sed ac urna dui aliquet aliquam. Amet leo habitant amet quam
              suspendisse donec. Sit aliquet elementum elit sit sit phasellus.
              Libero urna a in cras.
            </p>
          </div>

          <div className="grid  grid-cols-2  mt-20 ml-auto pr-10 w-auto gap-x-5 gap-y-0">
            <Image
              src={"/images/language-learner/avatar1.png"}
              width={800}
              height={800}
              alt=""
              className="w-[15rem]"
            />
            <Image
              src={"/images/language-learner/avatar2.png"}
              width={800}
              height={800}
              alt=""
              className="w-[15rem]"
            />
            <Image
              src={"/images/language-learner/avatar3.png"}
              width={800}
              height={800}
              alt=""
              className="w-[15rem]"
            />
            <Image
              src={"/images/language-learner/avatar4.png"}
              width={800}
              height={800}
              alt=""
              className="w-[15rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
