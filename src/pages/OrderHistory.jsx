import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

 function OrderHistory() {
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
            <table className="w-full min-w-190 text-sm">
              <thead>
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-3 px-4 text-left rounded-l-xl">Sr No.</th>
                  <th className="py-3 px-4 text-left"> Order No.</th>
                  <th className="py-3 px-4 text-left">Order Date</th>
                  <th className="py-3 px-4 text-left">Order By</th>
                  <th className="py-3 px-4 text-left">Order Type</th>
                  <th className="py-3 px-4 text-left">Order Amount</th>
                  <th className="py-3 px-4 text-left">Remark</th>
                  <th className="py-3 px-4 text-left">View Details</th>
                  <th className="py-3 px-4 text-left rounded-r-xl">Print Invoice</th>
                </tr>
              </thead>

              <tbody className="font-medium">
                <tr className="border-b  border-gray-400">
                  <td className="py-4 px-4">01</td>
                  <td className="py-4 px-4">17-02-2026</td>
                  <td className="py-4 px-4">4999₹</td>
                  <td className="py-4 px-4">Online</td>
                  <td className="py-4 px-4">Purchase Balance</td>
                  <td className="py-4 px-4">Succeed</td>
                </tr>
                <tr className="border-b  border-gray-400">
                  <td className="py-4 px-4">02</td>
                  <td className="py-4 px-4">17-02-2026</td>
                  <td className="py-4 px-4">6999₹</td>
                  <td className="py-4 px-4">Online</td>
                  <td className="py-4 px-4">Turnover Balance</td>
                  <td className="py-4 px-4">Pending</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
export default  OrderHistory;