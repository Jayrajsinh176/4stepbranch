import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { FaSearch } from "react-icons/fa";

function SendProductRequest() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar />

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-[#B0422E]">
            Send Product Request
          </h1>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
            <div className="flex mb-3 items-center">
              <button className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300">
                All
              </button>
              <button className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300">
                Pending
              </button>
              <button className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300">
                Stock Inward
              </button>
              <button className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300">
                Approved
              </button>
              <button className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300">
                Cancelled
              </button>
              <div className="ml-auto flex items-center justify-end border-gray-300 bg-gray-100 rounded-lg px-3 py-1">
                <button
                  className="text-sm font-semibold "
                >
                  <FaSearch />
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none text-sm px-2 py-1 bg-transparent"
                />
              </div>
            </div>
            <table className="w-full min-w-190 text-sm">
              <thead>
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-3 px-4 text-left rounded-l-xl">
                    Request No
                  </th>
                  <th className="py-3 px-4 text-left"> Date</th>
                  <th className="py-3 px-4 text-left">Total Products</th>
                  <th className="py-3 px-4 text-left">Total Amount</th>
                  <th className="py-3 px-4 text-left">Total PV</th>
                  <th className="py-3 px-4 text-left rounded-r-xl">Status</th>
                </tr>
              </thead>

              <tbody className="font-medium">
                <tr className="border-b">
                  <td className="py-4 px-4">01</td>
                  <td className="py-4 px-4">17-02-2026</td>
                  <td className="py-4 px-4">4999₹</td>
                  <td className="py-4 px-4">Online</td>
                  <td className="py-4 px-4">Purchase Balance</td>
                  <td className="py-4 px-4">Succeed</td>
                </tr>
                <tr className="border-b">
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
export default SendProductRequest;