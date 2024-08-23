import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const router = useRouter();

  const CustomBurgerIcon = () => (
    <Image src="/icons/menu.svg" width={100} height={50} alt="hamburger-menu" />
  );
  const CustomCloseIcon = () => (
    <Image src="/icons/close.svg" width={30} height={20} alt="close-menu" />
  );

  return (
    <div className="flex bg-blue-blur bm-burger-button-custom md:hidden z-[+12000] top-[-0.8rem] left-[98vw] absolute">
      <Menu
        width={"350px"}
        customBurgerIcon={<CustomBurgerIcon />}
        customCrossIcon={<CustomCloseIcon />}
        right
      >
        <Image
          src={"/images/logo.png"}
          className="w-[10rem] mt-[-5rem] mr-4 cursor-pointer hover:opacity-40"
          width={500}
          height={500}
          alt="logo"
        />

        <div className="mt-5 flex flex-col gap-y-2">
          <Link
            href={"/"}
            className={`menu-item cursor-pointer font-poppinsR text-white text-[1rem] my-1 hover:text-purple transition-all duration-300 ease-in-out`}
          >
            Home
          </Link>

          <Link
            href={"/"}
            className={`menu-item cursor-pointer font-poppinsR text-white text-[1rem] my-1 hover:text-purple transition-all duration-300 ease-in-out`}
          >
            Features
          </Link>

          <Link
            href={"/"}
            className={`menu-item cursor-pointer font-poppinsR text-white text-[1rem] my-1 hover:text-purple transition-all duration-300 ease-in-out`}
          >
            How it Works
          </Link>
        </div>

        <div className="flex gap-y-2 flex-col mt-8 w-[70%] max-auto">
          <button className="border-2 mb-2 border-white flex rounded-[40px] transition-all p-2 w-full items-center hover:bg-light-sky-blue hover:delay-100">
            <Image
              src={"/icons/global.svg"}
              className="mr-2"
              width={18}
              height={18}
              alt=""
            />
            <p className="font-poppinsR text-white text-[0.8rem]">EN</p>
            <Image
              src={"/icons/arrow-down.svg"}
              width={18}
              height={18}
              alt=""
              className="ml-auto"
            />
          </button>

          <Link
            href={"/connect-api"}
            className="border-2 border-white w-full flex rounded-[40px] transition-all p-2 items-center hover:bg-light-sky-blue hover:delay-100"
          >
            <p className="font-poppinsR text-white text-[0.8rem]">
              Traveling API
            </p>
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default MobileMenu;
