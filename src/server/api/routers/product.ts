import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.product.findMany({
      where: { isFeatured: true },
    });
    return products;
  }),
  getCategory: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const products = await ctx.db.product.findMany({
        where: { catSlug: input },
      });
      return products;
    }),
});
