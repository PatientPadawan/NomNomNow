"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { api } from "@/trpc/react";
import CheckoutForm from "@/app/_components/checkoutForm";
import { env } from "@/env";
import LoadingSpinner from "@/app/_components/loadingSpinner";

import type { StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;
  const { isLoading, error, data } = api.intent.createIntent.useQuery(id, {
    notifyOnChangeProps: ["data"],
    refetchOnWindowFocus: false,
  });
  const updateOrder = api.order.updateOrderIntent.useMutation();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        updateOrder.mutate({
          orderId: id,
          paymentId: data.id,
        });
        setClientSecret(data.client_secret);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [data]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div className="p-4">
      {error && `We're sorry an error has occured!`}
      {isLoading && (
        <div className="flex w-full flex-col items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PayPage;
