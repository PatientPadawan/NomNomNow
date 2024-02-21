import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

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
  getById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const products = await ctx.db.product.findUnique({
        where: { id: input },
      });
      return products
    }),
});
