import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getOrders: protectedProcedure.query(async ({ ctx }) => {
    const orders = await ctx.db.order.findMany({
      where: { userId: ctx.session.user.id },
    });
    return orders;
  }),
});
