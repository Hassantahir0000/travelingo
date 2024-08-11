import Image from "next/image";

export default function WhatToExpect() {
  return (
    <div className="w-screen min-h-screen h-auto bg-pale-cyan px-8 pt-2 pb-[20rem]">
      <div className="self-stretch  text-white text-[6.25rem] mt-[68px] mb-[98px] font-normal  leading-normal">
        What to Expect
      </div>

      <div className="flex md:flex-row flex-col gap-x-4">
        <div className="flex flex-col gap-y-4 w-[70%]">
          <div className="bg-white rounded-[50px] px-8 py-5 flex flex-col md:flex-row justify-center">
            <div className="flex flex-col mb-auto md:w-[50%]">
              <h2 className="self-stretch  text-black text-[40px] font-normal  leading-normal">
                Speak and Sound Like Locals
              </h2>
              <div className=" text-black">
                Dive into the heart of each destination with tailored cultural
                insights, visa guidance, and essential travel tips. Our app
                provides in-depth country-specific information to enrich your
                journey and ensure a seamless travel experience. Explore the
                world confidently with every detail you need right at your
                fingertips.
              </div>
            </div>
            <div className="md:w-[50%]">
              <Image
                src={"/images/home/what-to-expect/speak-sound.png"}
                width={400}
                height={500}
                alt=""
                className="mx-auto"
              />
            </div>
          </div>

          <div className="flex flex-row gap-x-4">
            <div className="bg-white rounded-[50px] h-[80%] w-[35%]"></div>
            <div className="bg-white w-[65%] flex flex-row rounded-[50px] p-5">
              <div className="flex flex-col w-[50%] mb-auto">
                <h2 className="self-stretch  text-black text-[40px] font-normal  leading-normal">
                  Speak e
                </h2>
                <div className=" text-black">
                  Dive into the heart of each destination with tailored cultural
                  insights, visa guidance, and essential travel tips. Our app
                  provides in-depth country-specific information to enrich your
                  journey and ensure a seamless travel experience. Explore the
                  world confidently with every detail you need right at your
                  fingertips.
                </div>
              </div>
              <div className="mt-auto w-[50%]">
                <Image
                  src={"/images/home/what-to-expect/language-barrier.png"}
                  width={500}
                  height={500}
                  alt=""
                  className="mt-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[50px] p-8 flex flex-col justify-center w-[30%] h-fit">
          <div className="flex flex-col mb-auto">
            <h2 className="self-stretch  text-black text-[40px] font-normal  leading-normal">
              Speak and Sound Like Locals
            </h2>
            <div className=" text-black">
              Dive into the heart of each destination with tailored cultural
              insights, visa guidance, and essential travel tips. Our app
              provides in-depth country-specific information to enrich your
              journey and ensure a seamless travel experience. Explore the world
              confidently with every detail you need right at your fingertips.
            </div>
          </div>
          <div className="mx-auto">
            <Image
              src={"/images/home/what-to-expect/perfect-trip.png"}
              width={400}
              height={500}
              alt=""
              className="mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
