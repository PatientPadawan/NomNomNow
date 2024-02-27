"use client";

import { useEffect } from "react";
import { api } from "@/trpc/react";

const PayPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { isLoading, error, data } = api.intent.createIntent.useQuery(id);
  const updateOrder = api.order.updateOrderIntent.useMutation();

  if (isLoading) <div>"Loading..."</div>;
  if (error) <div>"Error..."</div>;

  console.log(`-------------------------${data}---------------------------`);

  // useEffect(() => {
  //   const makeRequest = async () => {

  //     try {
  //       const order = await updateOrder.mutateAsync({
  //         orderId: id,
  //         paymentId: "",
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   makeRequest();
  // }, [intData]);

  return <div></div>;
};

export default PayPage;
