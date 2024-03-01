import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getOrders: protectedProcedure.query(async ({ ctx }) => {
    const orders = await ctx.db.order.findMany({
      where: { userId: ctx.session.user.id },
    });
    return orders;
  }),
  createOrder: protectedProcedure
    .input(
      z.object({
        price: z.number(),
        products: z.array(
          z.object({
            id: z.string(),
            title: z.string(),
            img: z.string().nullable().optional(),
            price: z.number(),
            optionTitle: z.string().nullable().optional(),
            quantity: z.number(),
          }),
        ),
        user: z.object({
          id: z.string(),
          email: z.string().nullable().optional(),
          image: z.string().nullable().optional(),
          name: z.string().nullable().optional(),
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
  updateOrderStatus: protectedProcedure
    .input(
      z.object({
        intent_id: z.string(),
        status: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.order.update({
        where: {
          intent_id: input.intent_id,
        },
        data: { status: input.status },
      });
    }),
});
