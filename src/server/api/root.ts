import { createTRPCRouter } from "@/server/api/trpc";
import { categoryRouter } from "./routers/category";
import { productRouter } from "./routers/product";
import { orderRouter } from "./routers/orders";

export const appRouter = createTRPCRouter({
  category: categoryRouter,
  product: productRouter,
  order: orderRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
