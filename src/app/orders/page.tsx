import { getServerAuthSession } from "@/server/auth";
import OrdersTable from "../_components/ordersTable";
import { redirect } from "next/navigation";

const OrdersPage = async () => {
  const session = await getServerAuthSession();
  if (!session) redirect("/login");
  
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w:full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:table-cell">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:table-cell">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <OrdersTable />
      </table>
    </div>
  );
};

export default OrdersPage;
