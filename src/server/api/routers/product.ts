import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  getFeatured: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.product.findMany({
      where: { isFeatured: true },
    });
    return products;
  }),
  getByCategory: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const products = await ctx.db.product.findMany({
        where: { catSlug: input },
      });
      return products;
    }),
  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const products = await ctx.db.product.findUnique({
      where: { id: input },
    });

    if (products) {
      return products;
    } else {
      const defaultProduct = await ctx.db.product.findFirst();
      return defaultProduct;
    }
  }),
});
