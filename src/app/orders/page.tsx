import React from "react";

const OrdersPage = () => {
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
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:table-cell md:text-center py-6 px-1">656879465163</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">49.99</td>
            <td className="hidden md:table-cell py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Coca 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:table-cell py-6 px-1">656879465163</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">49.99</td>
            <td className="hidden md:table-cell py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Coca 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:table-cell py-6 px-1">656879465163</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">49.99</td>
            <td className="hidden md:table-cell py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Coca 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:table-cell py-6 px-1">656879465163</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">49.99</td>
            <td className="hidden md:table-cell py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Coca 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
