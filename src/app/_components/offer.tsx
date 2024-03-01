import Image from "next/image";
import CountdownClock from "./countdownClock";
import Link from "next/link";

const Offer = () => {
  return (
    <div className="flex h-screen flex-col bg-black md:h-[70vh] md:flex-row md:justify-between md:bg-[url('/offerBg.png')]">
      {/* TEXT CONTAINER  */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6 text-center">
        <h1 className="bold text-5xl text-white xl:text-6xl">
          Delicious Burgers
        </h1>
        <p className="text-white xl:text-xl">
          Indulge in juicy burgers and crispy fries! Order now for a delicious
          feast delivered straight to your door. Satisfaction guaranteed!
        </p>
        <CountdownClock />
        <Link href={`/menu/burger`}>
          <button className="rounded-md bg-red-500 px-6 py-3 text-white">
            Order Now
          </button>
        </Link>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className="relative w-full flex-1 md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
