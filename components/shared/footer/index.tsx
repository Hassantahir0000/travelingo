import Image from "next/image";

import facebook from "../../../public/icons/facebook.svg";
import youtube from "../../../public/icons/youtube.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import reddit from "../../../public/icons/reddit.svg";
import insta from "../../../public/icons/insta.svg";
import tiktok from "../../../public/icons/tiktok.svg";

type FooterProps = {
  heading: string;
  description: string;
  buttonLabel: string;
};

export default function Footer({
  heading,
  description,
  buttonLabel,
}: FooterProps) {
  return (
    <div className="w-screen min-h-screen relative z-40 px-10 h-auto bg-blue-blur pt-[4rem] mt-[-4rem] rounded-tl-[3rem] rounded-tr-[3rem]">
      <div className="bg-white flex-col mx-auto rounded-[28px] pt-[3rem] pb-[7rem] flex items-center justify-center">
        <h2 className="self-stretch footer_big_text font-poppinsM text-center text-blue-blur text-[6.25rem] mt-[68px] font-normal leading-normal">
          {heading}
        </h2>

        <p className="self-stretch text-black text-[1.8rem] font-poppinsM font-normal text-center leading-[2.5rem]">
          {description}
        </p>

        <button className="bg-blue-blur rounded-full w-[90%] max-w-[30rem] px-10 items-center gap-x-5 py-5 mt-[3rem] text-white flex justify-between">
          <div className="flex gap-x-5 justify-between">
            <p className="text-white text-[1.8rem] footer_btn_p font-poppinsR">
              {buttonLabel}
            </p>
          </div>
          <Image src={"/icons/arrow.svg"} width={30} height={30} alt="" />
        </button>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex justify-between items-start mt-10 footer_content">
          <div className="flex w-[30%]">
            <Image
              src={"/images/logo.png"}
              width={500}
              height={500}
              className="h-[3rem] w-[100%]"
              alt=""
            />
          </div>

          <div className="w-[40%] footer_cols grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-[20px] w-full">
              <p className="text-white">TraveLingo</p>
              <p className="text-white opacity-55">Home</p>
              <p className="text-white opacity-55">Features</p>
              <p className="text-white opacity-55">How it works</p>
            </div>
            <div className="flex flex-col gap-y-[20px] w-full">
              <p className="text-white">Menu</p>
              <p className="text-white opacity-55">Language Learner</p>
              <p className="text-white opacity-55">Language Translator</p>
              <p className="text-white opacity-55">Plan your trip</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-10 opacity-30" />
        <div className="w-full mt-4 h-fit gap-x-4 flex justify-end">
          <img src={facebook.src} className="w-[20px] h-[20px]" />
          <img src={linkedin.src} className="w-[20px] h-[20px]" />
          <img src={reddit.src} className="w-[20px] h-[20px]" />
          <img src={tiktok.src} className="w-[20px] h-[20px]" />
          <img src={youtube.src} className="w-[20px] h-[20px]" />
          <img src={insta.src} className="w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
}
