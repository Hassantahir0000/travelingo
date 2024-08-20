import Image from "next/image";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function AppDrawer({
  component,
  isOpen,
  setIsOpen,
}: {
  component: any;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleDrawer} className="app_drawer">
        <Image
          className="cursor-pointer"
          src={"/icons/menu.svg"}
          width={50}
          height={50}
          alt=""
        />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
      >
        <div className="w-[100%] h-full p-5">{component}</div>
      </Drawer>
    </>
  );
}

export default AppDrawer;
