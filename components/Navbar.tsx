import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex-between mx-auto sm:px-16 py-4 px-6 max-w-[1440px]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="Nav Car"
            src="/logo.svg"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="bg-white text-primary-blue min-w-[130px] px-3 py-2 rounded-full"
        />
      </nav>
    </header>
  );
}

export default Navbar;
