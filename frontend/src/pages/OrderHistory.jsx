import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import api from "../api/axios";

function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await api.get("/order-history");
      setOrderHistory(response.data.data || []);
    } catch (error) {
      console.error("Error fetching order history:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const response = await api.get(`/order-details/${id}`);
      setSelectedOrder(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

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
            {loading ? (
              <p className="text-center py-4">Loading...</p>
            ) : (
              <table className="w-full min-w-190 text-sm text-center">
                <thead>
                  <tr className="bg-[#B0422E] text-white">
                    <th className="py-3 px-4 rounded-l-xl">Sr No.</th>
                    <th className="py-3 px-4">Order No.</th>
                    <th className="py-3 px-4">Order Date</th>
                    <th className="py-3 px-4">Order By</th>
                    <th className="py-3 px-4">Order Type</th>
                    <th className="py-3 px-4">Order Amount</th>
                    <th className="py-3 px-4">Remark</th>
                    <th className="py-3 px-4">View Details</th>
                    <th className="py-3 px-4 rounded-r-xl">Print Invoice</th>
                  </tr>
                </thead>

                <tbody className="font-medium ">
                  {orderHistory.length > 0 ? (
                    orderHistory.map((order, index) => (
                      <tr className="border-b border-gray-400" key={order.id}>
                        <td className="py-4 px-4">{index + 1}</td>
                        <td className="py-4 px-4">{order.order_no}</td>
                        <td className="py-4 px-4">{order.order_date}</td>
                        <td className="py-4 px-4">
                          {order.distributor_name || "N/A"}
                        </td>
                        <td className="py-4 px-4">{order.order_type || "N/A"}</td>
                        <td className="py-4 px-4">₹{order.total_amount}</td>
                        <td className="py-4 px-4">{order.remark || "N/A"}</td>
                        <td className="py-4 px-4">
                          <button
                            className="text-blue-600 hover:underline"
                            onClick={() => handleViewDetails(order.id)}
                          >
                            View Details
                          </button>
                        </td>
                        <td className="py-4 px-4">Print Invoice</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="py-4 px-4 text-gray-500">
                        No order history found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
{/* Modal for order details */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-4xl rounded-2xl p-6 shadow-lg overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#B0422E]">
                Order Details
              </h2>
              <button
                className="text-red-600 font-bold text-xl"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div className="mb-4 text-sm  grid grid-cols-3 ">
              <p><strong>Order No:</strong> {selectedOrder.order_no}</p>
              <p><strong>Order Date:</strong> {selectedOrder.order_date}</p>
              <p><strong>Distributor:</strong> {selectedOrder.distributor_name}</p>
              <p><strong>Order Type:</strong> {selectedOrder.order_type || "N/A"}</p>
              <p><strong>Remark:</strong> {selectedOrder.remark || "N/A"}</p>
            </div>

            <table className="w-full text-sm text-center border">
              <thead >
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-2 px-3">Sr No.</th>
                  <th className="py-2 px-3">Product Name</th>
                  <th className="py-2 px-3">Quantity</th>
                  <th className="py-2 px-3">MRP</th>
                  <th className="py-2 px-3">PV</th>
                  <th className="py-2 px-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.products && selectedOrder.products.length > 0 ? (
                  selectedOrder.products.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-3">{index + 1}</td>
                      <td className="py-2 px-3">{item.product_name}</td>
                      <td className="py-2 px-3">{item.quantity}</td>
                      <td className="py-2 px-3">₹{item.mrp}</td>
                      <td className="py-2 px-3">{item.pv}</td>
                      <td className="py-2 px-3">₹{item.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-3">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderHistory;