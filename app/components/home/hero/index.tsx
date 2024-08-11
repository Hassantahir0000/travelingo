import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-screen h-screen">
      <Image
        src="/images/home/main-bg.png"
        width={500}
        height={500}
        className="w-full h-full object-cover"
        alt=""
      />

      <div className="flex justify-center items-center">
        <div className="  bg-blue-blur/50  absolute bottom-[10rem] py-[2.875rem] px-[2.75rem] rounded-[50px] backdrop-blur-[0.5rem] md:w-[90%] block mx-auto">
          <div className="md:flex-row flex-col flex">
            <div className=" flex-col justify-center items-center gap-[34px] inline-flex md:w-[70%]">
              <h2 className="self-stretch  text-white text-[40px] font-normal  leading-normal">
                Welcome to Travelingo
              </h2>
              <h2 className="self-stretch text-white text-[4.5rem] md:text-[7.375rem] font-medium  md:leading-[8rem] leading-[4.5rem]">
                Your Travel
                <br />
                Partner!
              </h2>
            </div>
            <div className=" text-white text-md md:w-[30%] mt-5 md:mt-auto">
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
              <div className="self-stretch  text-white text-[30px] uppercase font-normal  leading-normal">
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
