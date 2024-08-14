import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="w-screen shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] min-h-screen h-auto bg-sky-blue px-12 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <div className="container flex relative   md:flex-row mx-auto">
        <Image
          className="absolute right-0 w-[50%]"
          src={"/images/blob.svg"}
          width={500}
          height={500}
          alt=""
        />

        <div>
          <h2 className="self-stretch  text-black text-[6.25rem] mt-[68px] font-poppinsM  font-normal  leading-[6.5rem] w-[40%]">
            How <br></br> Travelingo <br></br> Works
          </h2>

          <button className=" bg-black rounded-full px-6 w-full items-center gap-x-5 py-5 mt-[3rem] text-white flex justify-between">
            <div className="flex gap-x-5">
              <Image
                src={"/icons/play-button.svg"}
                width={30}
                height={30}
                alt=""
              />
              <p className="text-white text-[1.5rem] font-poppinsR">
                GET ON PLAY STORE
              </p>
            </div>
            <Image src={"/icons/arrow.svg"} width={30} height={30} alt="" />
          </button>
        </div>

        <div className="wrapper flex flex-col z-[10] ml-auto w-[50%] gap-y-5 mt-8">
          <div className="rounded-[50px] border-4 border-black flex gap-x-[5rem] bg-white/10 px-4 py-1 relative">
            <h2 className="self-stretch pl-4  font-poppinsM  text-black m-auto text-[6.5rem]   font-normal  leading-normal">
              01
            </h2>
            <p className="self-stretch  text-black text-[1.2rem] font-poppinsR m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="rounded-[50px] border-4 border-black flex gap-x-[5rem] bg-white/10 px-4 py-1 relative">
            <h2 className="self-stretch pl-4 font-poppinsM text-black m-auto text-[6.5rem]   font-normal  leading-normal">
              02
            </h2>
            <p className="self-stretch  text-black text-[1.2rem] font-poppinsR m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="rounded-[50px] border-4 border-black flex gap-x-[5rem] bg-white/10 px-4 py-1 relative">
            <h2 className="self-stretch pl-4 font-poppinsM  text-black m-auto text-[6.5rem]   font-normal  leading-normal">
              03
            </h2>
            <p className="self-stretch font-poppinsR text-black text-[1.2rem] m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="rounded-[50px] border-4 border-black flex gap-x-[5rem] bg-white/10 px-4 py-1 relative">
            <h2 className="self-stretch pl-4 font-poppinsM text-black m-auto text-[6.5rem]   font-normal  leading-normal">
              04
            </h2>
            <p className="self-stretch font-poppinsR text-black text-[1.2rem] m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="rounded-[50px] border-4 border-black flex gap-x-[5rem] bg-white/10 px-4 py-1 relative">
            <h2 className="self-stretch pl-4 font-poppinsM text-black m-auto text-[6.5rem]   font-normal  leading-normal">
              05
            </h2>
            <p className="self-stretch font-poppinsR text-black text-[1.2rem] m-auto font-normal pr-[5rem]">
              Travel planning made easy, with tailored travel information from
              visa requirements to cultural dos and dont&apos;s, ensuring you re
              well-prepared for any journey.
            </p>
            <Image
              className="absolute right-5 w-[3.5rem] mt-4"
              src={"/icons/question.svg"}
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
