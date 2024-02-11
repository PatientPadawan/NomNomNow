import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturedItems = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER  */}
      <div className="flex w-max">
        {/* SINGLE ITEM  */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="flex h-[60vh] w-screen flex-col items-center justify-around p-4 text-center transition-all duration-300 hover:bg-fuchsia-50 md:w-[50vh] xl:h-[90vh] xl:w-[33vw]"
          >
            {/* IMAGE CONTAINER  */}
            {item.img && (
              <div className="relative w-full flex-1 transition-all duration-500 hover:rotate-[60deg]">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER  */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
              <button className="rounded-md bg-red-500 p-2 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
