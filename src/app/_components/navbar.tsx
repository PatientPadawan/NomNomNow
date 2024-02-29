import Menu from "./menu";
import CartIcon from "./cartIcon";
import Link from "next/link";
import Image from "next/image";
import UserLinks from "./userLinks";
import { getServerAuthSession } from "@/server/auth";

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24">
      {/* LEFT LINKS */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">qwikbite</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu session={session ? true : false} />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="right-2 top-3 flex cursor-pointer items-center gap-2 rounded-md bg-orange-300 px-1 md:absolute lg:static lg:px-5">
          <Image src="/phone.png" alt="phone number" width={20} height={20} />
          <span>888 438 8439</span>
        </div>
        <UserLinks session={session ? true : false} />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
