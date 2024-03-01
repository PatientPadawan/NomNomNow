import type { Prisma } from "@prisma/client";

export type ProductObject = {
  product: {
    price: number;
    id?: string | undefined;
    createdAt?: Date | undefined;
    title?: string | undefined;
    desc?: string | undefined;
    img?: string | null | undefined;
    isFeatured?: boolean | undefined;
    options?: Prisma.JsonValue[] | undefined;
    catSlug?: string | undefined;
  } | null;
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

export type OrderProductsType = {
  id: string;
  img: string;
  price: number;
  title: string;
  quantity: number;
  optionTitle: string;
}[];

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
