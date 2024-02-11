"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./cartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Hours of Operation", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setopen] = useState(false);

  /* fake user for dev purposes only */
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setopen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setopen(false)}
        />
      )}
      {open && (
        <div className="absolute left-0 top-24 z-10 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-red-500 text-3xl text-white">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setopen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setopen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setopen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setopen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
