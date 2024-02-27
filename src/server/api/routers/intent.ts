import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const intentRouter = createTRPCRouter({
  createIntent: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const order = await ctx.db.order.findUnique({
        where: {
          id: input,
        },
      });
      const intent = await stripe.paymentIntents.create({
        amount: order!.price.toNumber() * 100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return intent;
    }),
});
