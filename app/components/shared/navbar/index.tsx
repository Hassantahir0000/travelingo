import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="  bg-blue-blur/50  absolute top-0 py-[1.875rem] px-[2.75rem]  backdrop-blur-[0.5rem] w-screen block mx-auto">
      <div className="wrapper flex  items-center justify-between">
        <div className="flex flex-row gap-x-10 items-center">
          <Image
            src={"/images/logo.png"}
            className="w-[10rem] mr-4"
            width={500}
            height={500}
            alt="logo"
          />

          <p className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45">
            Home
          </p>
          <p className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45">
            Features
          </p>
          <p className="font-poppinsR text-white hover:underline cursor-pointer hover:opacity-45">
            How it Works
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
