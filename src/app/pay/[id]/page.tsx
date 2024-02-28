"use client";

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { api } from "@/trpc/react";
import CheckoutForm from "@/app/_components/checkoutForm";
import { env } from "@/env";
import LoadingSpinner from "@/app/_components/loadingSpinner";

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
        const order = await updateOrder.mutateAsync({
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
    <div className="flex justify-center p-4 md:block md:w-1/2 md:mx-auto">
      {isLoading && (
        <LoadingSpinner />
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
