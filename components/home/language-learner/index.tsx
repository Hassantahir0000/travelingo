import Image from "next/image";

export default function LanguageLearner() {
  return (
    <div className="w-screen  shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] min-h-screen h-auto bg-maya-blue px-12 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] mt-[68px] font-normal  leading-normal">
        Language Learner
      </h2>

      <p className="self-stretch  text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
        Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
        aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
        pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
        consequat faucibus tortor amet est.
      </p>

      <div className="bg-dodger-blue p-10 rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] mt-[5rem]">
        <div className="flex flex-row">
          <div className="w-[55%] ">
            <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] mt-5 font-normal  leading-[4.5rem]">
              Become a Language Expert with
            </h2>
            <h2 className="self-stretch font-poppinsB text-black text-[4.25rem] my-5 font-normal  leading-[4.5rem]">
              Travelingo
            </h2>

            <p className="self-stretch font-poppinsR  text-black text-[1.5rem]  font-normal  leading-[2.5rem]">
              Lorem ipsum dolor sit amet consectetur. Auctor rhoncus at bibendum
              sed ac urna dui aliquet aliquam. Amet leo habitant amet quam
              suspendisse donec. Sit aliquet elementum elit sit sit phasellus.
              Libero urna a in cras.
            </p>
          </div>

          <div className=" ml-auto pr-10 w-auto gap-x-5 ">
            <div className="grid  grid-cols-2 h-fit gap-y-2  gap-x-5 ">
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
        <div className="flex justify-between items-baseline">
          <button className="border-2 border-black rounded-full px-6 w-fit items-center h-fit gap-x-5 py-3  text-black flex justify-between">
            <p className="text-black font-poppinsR">Get Fluent</p>

            <Image
              src={"/icons/arrow-small.svg"}
              width={20}
              height={20}
              alt=""
            />
          </button>

          <button className="border-2 border-black rounded-full px-6 w-[30rem] items-center gap-x-5 py-3 mt-[6rem] text-black flex justify-between">
            <p className="text-black text-[1.5rem]">Get Our API</p>

            <Image
              src={"/icons/arrow-black.svg"}
              width={30}
              height={30}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
