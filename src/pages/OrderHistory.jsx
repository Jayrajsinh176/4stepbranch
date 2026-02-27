import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

 function OrderHistory() {

  const orderHistory = [
    {
      id: 1,
      orderNo: "123456789",
      orderDate: "2023-01-01",
      orderBy: "John Doe",
      orderType: "Buy",
      orderAmount: "$1000", 
      remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      viewDetails: "View Details",
      printInvoice: "Print Invoice",
    },
    {
      id: 2,
      orderNo: "987654321",
      orderDate: "2023-02-15",
      orderBy: "Jane Smith",
      orderType: "Sell",
      orderAmount: "$2000",
      remark: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      viewDetails: "View Details",
      printInvoice: "Print Invoice",

    }
  ];
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar />

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-[#B0422E]">
            Order History
          </h1>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
            <table className="w-full min-w-190 text-sm text-center">
              <thead>
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-3 px-4  rounded-l-xl">Sr No.</th>
                  <th className="py-3 px-4 "> Order No.</th>
                  <th className="py-3 px-4 ">Order Date</th>
                  <th className="py-3 px-4 ">Order By</th>
                  <th className="py-3 px-4 ">Order Type</th>
                  <th className="py-3 px-4 ">Order Amount</th>
                  <th className="py-3 px-4 ">Remark</th>
                  <th className="py-3 px-4 ">View Details</th>
                  <th className="py-3 px-4 rounded-r-xl">Print Invoice</th>
                </tr>
              </thead>

              <tbody className="font-medium ">
                {orderHistory.map((order, index) => (
                  <tr className="border-b border-gray-400 " key={order.id}>
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4">{order.orderNo}</td>
                    <td className="py-4 px-4">{order.orderDate}</td>
                    <td className="py-4 px-4">{order.orderBy}</td>
                    <td className="py-4 px-4">{order.orderType}</td>
                    <td className="py-4 px-4">{order.orderAmount}</td>
                    <td className="py-4 px-4">{order.remark}</td>
                    <td className="py-4 px-4">{order.viewDetails}</td>
                    <td className="py-4 px-4">{order.printInvoice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  OrderHistory;