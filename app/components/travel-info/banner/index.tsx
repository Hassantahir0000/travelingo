import Image from "next/image";

export default function TravelInfoBanner() {
  return (
    <div className="w-screen h-screen">
      <Image
        src="/images/travel-info/banner.png"
        width={1000}
        height={1000}
        className="w-full h-[120vh] object-cover"
        alt=""
      />

      <div className="flex justify-center items-center">
        <div className="  bg-blue-blur/50  absolute bottom-[10rem] pt-[3rem] pb-[2.875rem] px-[2.75rem] rounded-[30px] backdrop-blur-[0.5rem] md:w-[90%] block mx-auto">
          <div className="md:flex-row flex-col flex">
            <div className=" flex-col justify-start items-start gap-[34px] inline-flex md:w-[70%]">
              <h2 className="self-stretch font-poppinsM  text-white text-[5.5rem] leading-[6rem]">
                Germany
              </h2>
            </div>
            <div className=" text-white font-poppinsR  text-[1rem] md:w-[30%] mt-[4rem] ">
              Dive into the heart of each destination with tailored cultural
              insights, visa guidance, and essential travel tips. Our app
              provides in-depth country-specific information to enrich your
              journey and ensure a seamless travel experience. Explore the world
              confidently with every detail you need right at your fingertips.
            </div>
          </div>
        </div>

        <div className="  bg-blue-blur/50  absolute items-center  bottom-10 py-5 px-[1.75rem] rounded-full backdrop-blur-[0.5rem] md:w-[90%] block mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex ">
              <Image
                src={"/icons/play-button.svg"}
                width={100}
                height={100}
                alt="PlayStore"
                className="h-10"
              />
              <div className="self-stretch font-poppinsR   text-white text-[30px] uppercase font-normal  leading-normal">
                Get on play store
              </div>
            </div>

            <Image
              src={"/icons/arrow.svg"}
              width={100}
              height={100}
              alt="PlayStore"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
