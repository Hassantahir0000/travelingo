import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useScroll } from "@/utils/context";
import LanguageIcon from "@/public/icons-folder/global";
import ArrowDown from "@/public/icons-folder/arrow-down";
import { countryLangList } from "@/data/countries_lang";

const MobileMenu = () => {
  const router = useRouter();
  const { scrollTo } = useScroll();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  console.log(isMenuOpen);

  const CustomBurgerIcon = () => (
    <Image src="/icons/menu.svg" width={100} height={50} alt="hamburger-menu" />
  );
  const CustomCloseIcon = () => (
    <Image src="/icons/close.svg" width={30} height={20} alt="close-menu" />
  );

  const functionA = () => {
    console.log("FUNCTION A");
  };

  const functionB = () => {
    console.log("FUNCTION B");
  };

  return (
    <div className="flex bg-blue-blur bm-burger-button-custom md:hidden z-[+12000] top-[-0.8rem] left-[98vw] absolute">
      <Menu
        // isOpen={isMenuOpen}
        width={"280px"}
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
            onClick={closeMenu}
            href={"/"}
            className={`menu-item cursor-pointer font-poppinsR text-white text-[1rem] my-1 hover:text-purple transition-all duration-300 ease-in-out`}
          >
            Home
          </Link>

          <Link
            onClick={() => {
              scrollTo("planyourtrip");
              closeMenu();
            }}
            href={"/"}
            className={`menu-item cursor-pointer font-poppinsR text-white text-[1rem] my-1 hover:text-purple transition-all duration-300 ease-in-out`}
          >
            Plan Your Trip
          </Link>

          <Link
            onClick={() => {
              scrollTo("howitworks");
              closeMenu();
            }}
            href={"/"}
            className={`menu-item cursor-pointer font-poppinsR text-white text-[1rem] my-1 hover:text-purple transition-all duration-300 ease-in-out`}
          >
            How it Works
          </Link>
        </div>

        <div className="flex gap-y-2 flex-col mt-8 w-[70%] max-auto">
          <Link
            onClick={closeMenu}
            href={"/connect-api"}
            className="border-2 pl-[15px] border-white w-full flex rounded-[40px] transition-all p-2 items-center hover:bg-light-sky-blue hover:delay-100"
          >
            <p className="font-poppinsR text-white text-[0.8rem]">
              Traveling API
            </p>
          </Link>

          <div className="relative ">
            <button
              onClick={() => {
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
              className={`border-2 relative globeSvg z-[10000] w-full ${
                isLangMenuOpen && "bg-[#18A1FF]"
              }  hover:text-[#18a1ff] border-white flex flex-row justify-between rounded-[40px] transition-all py-[5px] px-[10px] items-center text-white hover:bg-white`}
            >
              <div className="flex flex-row items-center">
                <div className="mr-3">
                  <LanguageIcon />
                </div>
                <p className="font-poppinsR text-[12px]">EN</p>
              </div>
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

                  <p className="text-[10px] text-[#18a1ff]">{country.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default MobileMenu;
