import Image from "next/image";
import React from "react";
import CountdownClock from "./countdownClock";

const Offer = () => {
  return (
    <div className="flex h-screen flex-col bg-black md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER  */}
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className="bold text-5xl text-white xl:text-6xl">
          Delicious Burger & French Fries
        </h1>
        <p className="text-white xl:text-xl">
          Indulge in juicy burgers and crispy fries! Order now for a delicious
          feast delivered straight to your door. Satisfaction guaranteed!
        </p>
        <CountdownClock />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className="flex-1 relative w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
