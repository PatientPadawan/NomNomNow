import React from "react";
import Menu from "./menu";
import CartIcon from "./cartIcon";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  //  FAKE USER FOR DEV ONLY
  const user = false;
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">qwikbite</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="phone number" width={20} height={20} />
          <span>888 438 8439</span>
        </div>
        {!user ? <Link href="/">Login</Link> : <Link href="/menu">Orders</Link>}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
