"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppDrawer from "@/components/common/drawer";
import { useWindowSize } from "@/utils/useWindowSize";

function Navbar() {
    const { width } = useWindowSize();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false);
  }

  return (
    <>
      {pathname !== "/explore" && (
        <div className="bg-blue-blur/50 absolute navbar top-0 py-[1.3rem] px-[2.75rem] backdrop-blur-[0.5rem] w-screen block mx-auto">
          <div className="wrapper flex relative items-center justify-between">
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
              <Link
                href={"/"}
                className="font-poppinsR navbar_left_stuff text-white hover:underline cursor-pointer hover:opacity-45"
              >
                Home
              </Link>
              <p className="font-poppinsR navbar_left_stuff text-white hover:underline cursor-pointer hover:opacity-45">
                Features
              </p>
              <p className="font-poppinsR navbar_left_stuff text-white hover:underline cursor-pointer hover:opacity-45">
                How it Works
              </p>
            </div>

            <div className="flex gap-x-5">
              <div className="flex gap-x-5 navbar_right_stuff">
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
        

            <div className="flex relative app_drawer">
              <AppDrawer
                component={
                  <div className="w-full h-full flex flex-col gap-y-5">
                    <Link onClick={closeDrawer} href={"/"}>
                      <Image
                        src={"/images/logo.png"}
                        className="w-[10rem] mr-4 cursor-pointer hover:opacity-40"
                        width={500}
                        height={500}
                        alt="logo"
                      />
                    </Link>

                    <div className="flex flex-col mt-5 gap-y-6">
                      <Link
                      onClick={closeDrawer}
                        href={"/"}
                        className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45"
                      >
                        Home
                      </Link>
                      <p onClick={closeDrawer} className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45">
                        Features
                      </p>
                      <p onClick={closeDrawer} className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45">
                        How it Works
                      </p>

                      <button onClick={closeDrawer} className="border-2 border-white flex rounded-[40px] transition-all py-2 px-3 items-center hover:bg-light-sky-blue hover:delay-100">
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
                      onClick={closeDrawer}
                        href={"/connect-api"}
                        className="border-2 border-white flex rounded-[40px] transition-all px-10 py-2 items-center hover:bg-light-sky-blue hover:delay-100"
                      >
                        <p className="font-poppinsR text-white text-[1rem]">
                          Traveling API
                        </p>
                      </Link>
                    </div>
                  </div>
                }
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
