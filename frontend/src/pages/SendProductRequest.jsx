import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { FaSearch } from "react-icons/fa";
import api from "../api/axios";

function SendProductRequest() {

  const [sendproductrequest, setSendProductRequest] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchError("Please enter a search term.");
      return;
    }

    setSearchError("");
    setActiveSearch(searchTerm.trim());
  };

 // FETCH REQUESTS
  useEffect(() => {

  const fetchRequests = async (status = "all") => {
    try {

      const res = await api.get("/product-requests", {
        params: { status }
      });

      setSendProductRequest(res.data);

    } catch (error) {
      console.error(error);
    }
  };

    fetchRequests(statusFilter);
  }, [statusFilter]);

  const filteredRequests = sendproductrequest.filter((req) => {
    if (!activeSearch) return true;
    return req.productname?.toLowerCase().includes(activeSearch.toLowerCase());
  });

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

              <button
                onClick={() => setStatusFilter("all")}
                className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300"
              >
                All
              </button>

              <button
                onClick={() => setStatusFilter("Pending")}
                className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300"
              >
                Pending
              </button>

              <button
                onClick={() => setStatusFilter("Stock Inward")}
                className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300"
              >
                Stock Inward
              </button>

              <button
                onClick={() => setStatusFilter("Approved")}
                className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300"
              >
                Approved
              </button>

              <button
                onClick={() => setStatusFilter("Cancelled")}
                className="border border-gray-200 rounded px-4 py-1 mr-2 bg-gray-100 hover:bg-gray-300"
              >
                Cancelled
              </button>

              <div className="ml-auto flex flex-col items-end">
                <div className="flex items-center justify-end border-gray-300 bg-gray-100 rounded-lg px-3 py-1">
                 
                  <input
                    value={searchTerm}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchTerm(value);
                      if (!value.trim()) {
                        setActiveSearch("");
                        setSearchError("");
                      }
                    }}
                    type="text"
                    placeholder="Search..."
                    className="outline-none text-sm px-2 py-1 bg-transparent"
                  />
                   <button
                    type="button"
                    onClick={handleSearch}
                    disabled={!searchTerm.trim()}
                    className="text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <FaSearch />
                  </button>
                </div>
                {searchError ? (
                  <span className="text-xs text-red-600 mt-1">{searchError}</span>
                ) : null}
              </div>

            </div>

            <table className="w-full min-w-190 text-sm text-center">
              <thead>
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-3 px-4 rounded-l-xl">Request No</th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Total Products</th>
                  <th className="py-3 px-4">Total Amount</th>
                  <th className="py-3 px-4">Total PV</th>
                  <th className="py-3 px-4 rounded-r-xl">Status</th>
                </tr>
              </thead>

              <tbody className="font-medium">

                {filteredRequests.map((send, index) => (
                  <tr className="border-b border-gray-400" key={send.id}>

                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4">{send.productname}</td>

                    <td className="py-4 px-4">
                      {new Date(send.date).toLocaleDateString()}
                    </td>

                    <td className="py-4 px-4">{send.total_products}</td>
                    <td className="py-4 px-4">{send.total_amount}</td>
                    <td className="py-4 px-4">{send.total_pv}</td>

                    <td
                      className={
                        send.status === "Approved"
                          ? "text-green-600 py-4 px-4"
                          : send.status === "Cancelled"
                          ? "text-red-600 py-4 px-4"
                          : "text-orange-500 py-4 px-4"
                      }
                    >
                      {send.status}
                    </td>

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

export default SendProductRequest;