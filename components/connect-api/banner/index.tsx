import Image from "next/image";

export default function ConnectBanner() {
  return (
    <div className="w-screen  h-[120vh]">
      <Image
        src="/images/connect-api/banner.png"
        width={500}
        height={500}
        className="w-full h-full object-cover"
        alt=""
      />

      <div className="flex justify-center items-center">
        <div className="  bg-blue-blur/50  absolute bottom-[2rem] py-[2.875rem] px-[2.75rem] rounded-[50px] backdrop-blur-[0.5rem] md:w-[90%] block mx-auto">
          <div className="md:flex-row flex-col flex">
            <div className=" flex-col justify-center items-center inline-flex md:w-[70%]">
              <h2 className="self-stretch font-poppinsM  text-white text-[5.5rem]">
                Travelingo
              </h2>
              <h2 className="self-stretch font-poppinsM  text-white text-[5.5rem]">
                Connect API
              </h2>
            </div>
            <div className=" text-white font-poppinsR  text-md md:w-[30%] mt-5 md:mt-auto">
              Integrate comprehensive travel information effortlessly with
              Travelingo Connect API. Access visa details, cultural insights,
              travel budgeting, and language learning resources—all in one
              place.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
