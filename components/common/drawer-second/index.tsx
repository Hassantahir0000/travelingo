/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Drawer from "rc-drawer";
import Image from "next/image";

const AppDrawerSecond = ({
  component,
  setOpen,
  isOpen,
}: {
  component?: any;
  isOpen?: boolean;
  setOpen?: any;
}) => {
  const onTouchEnd = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <Drawer
        open={isOpen}
        // defaultOpen
        onClose={onTouchEnd}
        afterOpenChange={(c: boolean) => {
          console.log("transitionEnd: ", c);
        }}
        placement="right"
        // width={400}
        width="60%"
        // Motion
      >
        {component}
      </Drawer>
      <div onClick={toggleDrawer} className="app_drawer">
        <Image
          className="cursor-pointer"
          src={"/icons/menu.svg"}
          width={50}
          height={50}
          alt=""
        />
      </div>
    </div>
  );
};
export default AppDrawerSecond;
