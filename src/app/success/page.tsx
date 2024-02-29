"use client";

import { api } from "@/trpc/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "../_components/loadingSpinner";
import { useCartStore } from "../utils/store";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const router = useRouter();
  const updateOrder = api.order.updateOrderStatus.useMutation();
  // clear localstorage cart
  useCartStore.persist.clearStorage();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const order = await updateOrder.mutate({
          intent_id: payment_intent!,
          status: "Paid",
        });
        router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [payment_intent]);

  return (
    <div className="flex flex-col items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default SuccessPage;
