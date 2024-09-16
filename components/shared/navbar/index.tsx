"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MobileMenu from "@/components/common/mobile-menu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useScroll } from "@/utils/context";
import { usePathname } from "next/navigation";
import ArrowDown from "@/public/icons-folder/arrow-down";
import LanguageIcon from "@/public/icons-folder/global";

// Use React.FC to define component and its props
const Navbar: React.FC = () => {
  const router = useRouter();
  const { scrollTo } = useScroll();
  const pathname = usePathname();
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
                <Link href={"/"}>
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
                    href={"/"}
                    className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                  >
                    Home
                  </Link>
                  <p
                    onClick={() => {
                      scrollTo("planyourtrip");
                    }}
                    className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                  >
                    Plan Your Trip
                  </p>
                  <p
                    onClick={() => {
                      scrollTo("howitworks");
                    }}
                    className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                  >
                    How it Works
                  </p>
                </div>
              </div>

              <div className="hidden md:flex gap-x-5">
                <button className="border-2 svgButton hover:text-[#18a1ff] border-white flex rounded-[40px] transition-all py-2 px-3 items-center text-white hover:bg-white hover:delay-100">
                  <div className="mr-3">
                    <LanguageIcon />
                  </div>
                  <p className="font-poppinsR ">EN</p>
                  <ArrowDown />
                </button>

                <Link
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
