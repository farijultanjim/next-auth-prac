"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navigation = () => {
  const menuItems = [
    {
      icon: "",
      title: "Login",
      linkUrl: "/login",
      description: "",
    },
    {
      icon: "",
      title: "Register",
      linkUrl: "/register",
      description: "",
    },
  ];
  return (
    <div className="bg-slate-400 w-full">
      <div className="flex items-center gap-5 justify-between max-w-screen-2xl px-7 md:px-10 mx-auto">
        <Link href={"/"} className="uppercase font-bold text-xl text-white">
          Logo
        </Link>

        <div className="flex gap-2 items-center uppercase">
          {menuItems.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem?.linkUrl}
              className="hover:bg-black text-white px-5 py-4"
            >
              {menuItem?.title}
            </Link>
          ))}

          <button
            className="hover:bg-black text-white px-5 py-4 uppercase"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
