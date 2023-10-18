import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Equal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed- top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="logo.svg" alt="Logo" width={55} height={40} />
        </Link>
        <Button variant="ghost" size="icon" className="block md:hidden">
          <Equal className="h-[30px] w-[30px]" />
        </Button>
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="https://dovapro.vercel.app" target="_blank">
              DovaPro JiuJitsu
            </Link>
          </li>
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/" target="_blank">
              DovaPro Instrucitonals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
