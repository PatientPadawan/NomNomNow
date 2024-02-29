"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../utils/store";
import { useEffect } from "react";

const CartIcon = () => {
  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-8 w-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart({totalItems})</span>
    </div>
  );
};

export default CartIcon;
