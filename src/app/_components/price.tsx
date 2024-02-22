"use client";

import { JSONValue } from "node_modules/superjson/dist/types";
import React, { useState, useEffect } from "react";

type Props = {
  product: {
    price: number;
    id?: string;
    createdAt?: Date;
    title?: string;
    desc?: string;
    img?: string | null;
    isFeatured?: boolean;
    options?: JSONValue[];
    catSlug?: string;
  };
};

const Price = ({ product }: Props) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity *
        (product.options?.length
          ? product.price + product.options[selected].additionalPrice
          : product.price),
    );
  }, [quantity, selected, product]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER  */}
      <div className="flex gap-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={option.title}
              className="rounded-md p-2 ring-1 ring-red-400"
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* QUANTITY AND ADD2CART BUTTON CONTAINER  */}
      <div className="flex items-center justify-between">
        {/* QUANTITY  */}
        <div className="flex w-full justify-between p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* ADD2CART BUTTON  */}
        <button className="w-56 bg-red-500 p-3 uppercase text-white ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
