"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Button from "./Button";

export default function MobileNav() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeNav = () => setOpen(false);
  return (
    <>
      <HiBars3
        className="md:hidden text-primary"
        size={35}
        onClick={() => setOpen((cur) => !cur)}
      />

      <div className={`${isOpen?"":"hidden"} absolute left-0 top-20 w-full h-lvh bg-foreground py-10`}>
        <ul className="flex flex-col items-center gap-5 text-md">
          <Link
            onClick={closeNav}
            href="#features"
            className="border-b border-b-gray-300 w-full text-center pb-5"
          >
            <li className="font-semibold text-lg text-secondary cursor-pointer hover:text-brand-green">
              Features
            </li>
          </Link>
          <Link
            onClick={closeNav}
            href="#howItWorks"
            className="border-b border-b-gray-300 w-full text-center pb-5"
          >
            <li className="font-semibold text-lg text-secondary cursor-pointer hover:text-brand-green">
              How It Works
            </li>
          </Link>
          <Link
            onClick={closeNav}
            href="#fields"
            className="border-b border-b-gray-300 w-full text-center pb-5"
          >
            <li className="font-semibold text-lg text-secondary cursor-pointer hover:text-brand-green">
              Fields
            </li>
          </Link>
          <Link
            href="#about"
            className="border-b border-b-gray-300 w-full text-center pb-5"
          >
            <li className="font-semibold text-lg text-secondary cursor-pointer hover:text-brand-green">
              About
            </li>
          </Link>
        </ul>
        <div className="flex flex-col items-center gap-10 mt-10">
          <Button
            type="bordered"
            title="Sign In"
            additionalStyles="w-full !p-4"
          />
          <Button
            type="main"
            title="Sign Up"
            additionalStyles="border-none bg-brand-greentext-brand-green text-white !w-full !p-4 !justify-center"
          />
        </div>
      </div>
    </>
  );
}
