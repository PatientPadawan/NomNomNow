import { JSONValue } from "node_modules/superjson/dist/types";

export type ProductType = {
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

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
