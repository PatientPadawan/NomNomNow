"use client";

import Image from "next/image";

import { useCartStore } from "../utils/store";
import { useEffect } from "react";
import Link from "next/link";

const CartIcon = () => {
  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href={'/cart'} className="flex items-center gap-4">
      <div className="relative h-8 w-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
