"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileMenu from "@/components/common/mobile-menu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useScroll } from "@/utils/context";
import { usePathname } from "next/navigation";
import ArrowDown from "@/public/icons-folder/arrow-down";
import LanguageIcon from "@/public/icons-folder/global";
import { countriesList } from "@/data/countries";
import { countryLangList } from "@/data/countries_lang";

// Use React.FC to define component and its props
const Navbar: React.FC = () => {
  const router = useRouter();
  const { scrollTo } = useScroll();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const isExplorePage = pathname === "/explore";

  return (
    <>
      {isExplorePage ? (
        <></>
      ) : (
        <>
          <div className="z-[10000]  bg-blue-blur/50  absolute top-0 py-[1.3rem] px-[2.75rem]  backdrop-blur-[0.5rem] w-screen block mx-auto">
            <div className="wrapper flex  items-center justify-between">
              <div className="flex flex-row gap-x-10 items-center">
                <Link onClick={closeMenu} href={"/"}>
                  <Image
                    src={"/images/logo.png"}
                    className="w-[10rem] mr-4 cursor-pointer hover:opacity-40"
                    width={500}
                    height={500}
                    alt="logo"
                  />
                </Link>
                <div className="hidden md:flex flex-row gap-x-10 items-center">
                  <Link
                    onClick={closeMenu}
                    href={"/"}
                    className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                  >
                    Home
                  </Link>
                  <p
                    onClick={() => {
                      scrollTo("planyourtrip");
                      closeMenu();
                    }}
                    className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                  >
                    Plan Your Trip
                  </p>
                  <p
                    onClick={() => {
                      scrollTo("howitworks");
                      closeMenu();
                    }}
                    className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                  >
                    How it Works
                  </p>
                </div>
              </div>

              <div className="hidden md:flex gap-x-5">
                <div className="relative ">
                  <button
                    onClick={() => {
                      setIsLangMenuOpen(!isLangMenuOpen);
                    }}
                    className={`border-2 relative globeSvg z-[10000] ${
                      isLangMenuOpen && "bg-[#18A1FF]"
                    }  hover:text-[#18a1ff] border-white flex rounded-[40px] transition-all py-2 px-3 items-center text-white hover:bg-white`}
                  >
                    <div className="mr-3">
                      <LanguageIcon />
                    </div>
                    <p className="font-poppinsR ">EN</p>
                    <ArrowDown />
                  </button>

                  <div
                    className={`absolute flex flex-col gap-y-[6px] top-[20px] z-[10] p-0 h-fit rounded-bl-[15px] rounded-br-[15px] bg-white w-full left-0 ${
                      isLangMenuOpen ? "opacity-100" : "opacity-0"
                    } duration-200 ease-out pt-[30px] pb-[14px]`}
                  >
                    {countryLangList?.map((country, index) => (
                      <div
                        key={index}
                        className="w-full px-[5px] py-[4px] flex flex-row gap-x-[8px] items-center cursor-pointer duration-200 ease-out border-l-[2px] border-white hover:border-l-[2px] hover:border-[#18a1ff]"
                      >
                        <div className="w-[20px] pl-[2px] max-w-[20px] h-[20px] max-h-[20px] rounded-[200px]">
                          <img
                            src={country.image}
                            className="w-[20px] rounded-[100px] object-contain"
                          />
                        </div>

                        <p className="text-[10px] text-[#18a1ff]">
                          {country.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  onClick={closeMenu}
                  href={"/connect-api"}
                  className="border-2 border-white flex rounded-[40px] transition-all px-10 py-2 items-center text-white hover:text-[#18a1ff] hover:bg-white hover:delay-100"
                >
                  <p className="font-poppinsR  text-[1rem]">Traveling API</p>
                </Link>
              </div>
            </div>
          </div>

          <div className=" block md:hidden">
            <MobileMenu />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
