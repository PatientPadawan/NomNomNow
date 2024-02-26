"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () =>
        setcurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000,
    );

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col bg-fuchsia-50 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER  */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 font-bold text-red-500">
        <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide]?.title}
        </h1>
        <button className="bg-red-500 px-8 py-4 text-white">Order Now</button>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className="relative w-full flex-1">
        <Image
          src={data[currentSlide]?.image ?? "/slide1.png"}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
