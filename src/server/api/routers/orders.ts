import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getOrders: protectedProcedure.query(async ({ ctx }) => {
    const orders = await ctx.db.order.findMany({
      where: { userId: ctx.session.user.id },
    });
    return orders;
  }),
  updateOrderIntent: protectedProcedure
    .input(
      z.object({
        orderId: z.string(),
        paymentId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.order.update({
        where: {
          id: input.orderId,
        },
        data: { intent_id: input.paymentId },
      });
    }),
  createOrder: protectedProcedure
    .input(
      z.object({
        price: z.number(),
        products: z.array(
          z.object({
            id: z.string(),
            img: z.string(),
            optionTitle: z.string(),
            price: z.number(),
            quantity: z.number(),
            title: z.string(),
          }),
        ),
        user: z.object({
          email: z.string(),
          id: z.string(),
          image: z.string(),
          name: z.string(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.order.create({
        data: {
          price: input.price,
          status: "Not Paid",
          userId: input.user.id,
          products: input.products,
        },
      });
    }),
});
