"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MobileMenu from "@/components/common/mobile-menu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useScroll } from "@/utils/context";
import { usePathname } from "next/navigation";

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
          <div className="  bg-blue-blur/50  absolute top-0 py-[1.3rem] px-[2.75rem]  backdrop-blur-[0.5rem] w-screen block mx-auto">
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
                <button className="border-2 border-white flex rounded-[40px] transition-all py-2 px-3 items-center hover:bg-light-sky-blue hover:delay-100">
                  <Image
                    src={"/icons/global.svg"}
                    className="mr-2"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <p className="font-poppinsR text-white">EN</p>
                  <Image
                    src={"/icons/arrow-down.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </button>

                <Link
                  href={"/connect-api"}
                  className="border-2 border-white flex rounded-[40px] transition-all px-10 py-2 items-center hover:bg-light-sky-blue hover:delay-100"
                >
                  <p className="font-poppinsR text-white text-[1rem]">
                    Traveling API
                  </p>
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
