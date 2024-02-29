"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useCartStore } from "../utils/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import Link from "next/link";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  const createOrder = api.order.createOrder.useMutation();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const data = await createOrder.mutateAsync({
          price: totalPrice,
          user: session.user,
          products: products,
        });
        router.push(`/pay/${data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col text-red-500 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* PRODUCTS CONTAINER  */}
      <div className="flex h-1/2 flex-col justify-center overflow-scroll p-4 lg:h-full lg:w-2/3 lg:px-20 xl:px-40 2xl:w-1/2">
        {/* SINGLE ITEM  */}
        {products.length ? (
          products.map((item) => (
            <div
              className="mb-4 flex items-center justify-between"
              key={item.id}
            >
              {item.img && (
                <Image src={item.img} alt="" width={100} height={100} />
              )}
              <div>
                <h1 className="text-l font-bold uppercase md:text-xl">
                  {item.title} x{item.quantity}
                </h1>
                <span>{item.optionTitle}</span>
              </div>
              <h2 className="font-bold">{item.price.toFixed(2)}</h2>
              <span
                className="cursor-pointer"
                onClick={() => removeFromCart(item)}
              >
                X
              </span>
            </div>
          ))
        ) : (
          <Link className="m-auto cursor-pointer" href={"/menu"}>
            <h3>No items yet! Check out our awesome bites</h3>
          </Link>
        )}
      </div>
      {/* PAYMENT CONTAINER  */}
      <div className="flex h-1/2 flex-col justify-center gap-4 bg-fuchsia-50 p-4 lg:h-full lg:w-1/3 lg:px-20 xl:px-40 2xl:w-1/2 2xl:gap-6 2xl:text-xl">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-bold">TOTAL(INCL. VAT)</span>
          <span className="">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          className="w-1/2 self-end rounded-md bg-red-500 p-3 text-white md:w-1/3 lg:w-3/4 2xl:w-1/3"
          onClick={handleCheckout}
          disabled={totalItems <= 0}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
