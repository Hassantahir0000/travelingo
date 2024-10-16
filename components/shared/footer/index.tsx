"use client";

import Image from "next/image";

import facebook from "../../../public/icons/facebook.svg";
import youtube from "../../../public/icons/youtube.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import reddit from "../../../public/icons/reddit.svg";
import insta from "../../../public/icons/insta.svg";
import tiktok from "../../../public/icons/tiktok.svg";
import { useScroll } from "@/utils/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type FooterProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonRedirectURL?: string;
  onButtonClick?: () => void;
};

export default function Footer({
  heading,
  description,
  buttonLabel,
  buttonRedirectURL,
  onButtonClick
}: FooterProps) {
  const { scrollTo } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-screen h-fit footer_outer relative drop-shadow-[0_0px_20px_rgba(255,255,255,0.60)] z-40 px-16 bg-blue-blur pt-[4rem] mt-[-5rem] rounded-tl-[3rem] rounded-tr-[3rem]">
      <div className="bg-white footer_btn_container flex-col mx-auto rounded-[42px] pt-[3rem] pb-[7rem] flex items-center justify-center">
        <h2 className="self-stretch footer_heading max-w-[550px] leading-[110px] mx-auto footer_big_text font-poppinsM text-center text-blue-blur text-[7.00rem] mt-[68px] font-normal">
          {heading}
        </h2>

        <p className="self-stretch footer_text text-black text-[1.8rem] font-poppinsM font-normal text-center leading-[2.5rem]">
          {description}
        </p>

        <button
          onClick={() => {
            if (buttonRedirectURL) {
              router.push(buttonRedirectURL);
            }
            else if (onButtonClick) {
              onButtonClick();
            }
          }}
          className="bg-blue-blur footer_btn rounded-full w-[90%] max-w-[30rem] px-10 items-center gap-x-5 py-5 mt-[3rem] text-white flex justify-between"
        >
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
              className="min-w-[150px] w-[60%]"
              alt=""
            />
          </div>

          <div className="w-[40%] footer_cols grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-[20px] w-full">
              <Link href={"/"}>
                <p className="text-white opacity-55 hover:underline cursor-pointer hover:opacity-45">
                  Home
                </p>
              </Link>
              <p
                onClick={() => {
                  if (pathname !== '/') {
                    window.location.href = "/#languagelearner"
                  }
                  else {
                    scrollTo("features");
                  }
                }}
                className="text-white opacity-55 hover:underline cursor-pointer hover:opacity-45"
              >
                Features
              </p>
              <p
                onClick={() => {
                  if (pathname !== '/') {
                    window.location.href = "/#howitworks"
                  }
                  else {
                    scrollTo("howitworks");
                  }
                }}

                className="text-white opacity-55 hover:underline cursor-pointer hover:opacity-45"
              >
                How it works
              </p>
            </div>
            <div className="flex flex-col gap-y-[20px] w-full">
              <p
                onClick={() => {
                  if (pathname !== '/') {
                    console.log("Language Learner");
                    window.location.href = "/#languagelearner"
                  }
                  else {
                    scrollTo("langlearner");
                  }
                }}
                className="text-white opacity-55 hover:underline cursor-pointer hover:opacity-45"
              >
                Language Learner
              </p>
              <p
                onClick={() => {
                  if (pathname !== '/') {
                    console.log("Language Translator");
                    window.location.href = "/#languagetranslator";
                  }
                  else {
                    scrollTo("langtranslator");
                  }
                }}
                className="text-white opacity-55 hover:underline cursor-pointer hover:opacity-45"
              >
                Language Translator
              </p>
              <p

                onClick={() => {
                  if (pathname !== '/') {
                    window.location.href = "/#plantrip"
                  }
                  else {
                    scrollTo("planyourtrip");
                  }
                }}
                className="text-white opacity-55 hover:underline cursor-pointer hover:opacity-45"
              >
                Plan your trip
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-10 opacity-30" />
        <div className="w-full mt-4 h-fit footer_last gap-x-4 flex justify-between pb-10">
          <p className="text-white">2024 TraveLingo® Translate & Learn</p>

          <div className="flex flex-row items-center gap-x-6">
            <img
              src={facebook.src}
              className="w-[20px] h-[20px] duration-400 cursor-pointer hover:opacity-45"
            />
            <img
              src={linkedin.src}
              className="w-[20px] h-[20px] duration-400 cursor-pointer hover:opacity-45"
            />
            <img
              src={reddit.src}
              className="w-[20px] h-[20px] duration-400 cursor-pointer hover:opacity-45"
            />
            <img
              src={tiktok.src}
              className="w-[20px] h-[20px] duration-400 cursor-pointer hover:opacity-45"
            />
            <img
              src={youtube.src}
              className="w-[20px] h-[20px] duration-400 cursor-pointer hover:opacity-45"
            />
            <img
              src={insta.src}
              className="w-[20px] h-[20px] duration-400 cursor-pointer hover:opacity-45"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
