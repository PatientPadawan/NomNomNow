import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col text-red-500 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* PRODUCTS CONTAINER  */}
      <div className="flex h-1/2 flex-col justify-center overflow-scroll p-4 lg:h-full lg:w-2/3 lg:px-20 xl:px-40 2xl:w-1/2">
        {/* SINGLE ITEM  */}
        <div className="mb-4 flex items-center justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM  */}
        <div className="mb-4 flex items-center justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM  */}
        <div className="mb-4 flex items-center justify-between">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER  */}
      <div className="flex h-1/2 flex-col justify-center gap-4 bg-fuchsia-50 p-4 lg:h-full lg:w-1/3 lg:px-20 xl:px-40 2xl:w-1/2 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
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
          <span className="">$81.70</span>
        </div>
        <button className="w-1/2 self-end rounded-md bg-red-500 p-3 text-white md:w-1/3 lg:w-3/4 2xl:w-1/3">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
