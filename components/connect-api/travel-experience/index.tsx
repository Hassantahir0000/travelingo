import Image from "next/image";

export default function TravelExperience() {
  return (
    <div className="w-screen z-[100]   shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] h-auto bg-pale-cyan px-12 py-[6rem] mt-[-2rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <div className="flex flex-row mx-auto justify-between items-center w-full h-full my-auto pb-[7rem] pt-[2rem]">
        <div className="w-[50%]">
          <h2 className="self-stretch font-poppinsM text-black text-[4.25rem]  leading-[5rem]">
            Unlock Seamless <br></br> Travel Experiences
          </h2>

          <p className="self-stretch  text-black text-[2.5rem] mt-3  font-poppinsR ml-4">
            Features
          </p>

          <div className="ml-8 mt-5">
            <p className="self-stretch  text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1">
              Up-to-date Visa Information
            </p>
            <p className="self-stretch  text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1">
              Cultural Guides and Local Insights
            </p>

            <p className="self-stretch  text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1">
              Travel Budgeting Tools
            </p>
            <p className="self-stretch  text-black text-[1.4rem] w-[90%]  font-poppinsR   mt-1">
              Language Learning
            </p>
            <p className="self-stretch  text-black text-[1.4rem] w-[90%]  font-poppinsR  mt-1">
              Easy Integration and Reliable Data
            </p>
          </div>

          <button className="border-2 border-black rounded-full px-6 w-[30rem] items-center gap-x-5 py-3 mt-[3rem]  text-black flex justify-between">
            <p className="text-black text-[1.5rem] font-poppinsR">
              Request a Demo
            </p>

            <Image
              src={"/icons/arrow-black.svg"}
              width={30}
              height={30}
              alt=""
            />
          </button>
        </div>

        <div className="w-[50%] flex items-center justify-center my-auto">
          <Image
            src={"/images/connect-api/travel-exp.png"}
            width={800}
            height={800}
            alt=""
            className="w-[40rem] m-auto h-auto "
          />
        </div>
      </div>
    </div>
  );
}
