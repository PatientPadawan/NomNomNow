import { createTRPCRouter } from "@/server/api/trpc";
import { categoryRouter } from "./routers/category";
import { productRouter } from "./routers/product";
import { orderRouter } from "./routers/orders";
import { intentRouter } from "./routers/intent";

export const appRouter = createTRPCRouter({
  category: categoryRouter,
  product: productRouter,
  order: orderRouter,
  intent: intentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
