import React, { useState, useRef } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function CreatePromoterSale() {
  const [distributorId, setDistributorId] = useState("");
  const [error, setError] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  // Submit distributor ID
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!distributorId.trim()) {
      setError("Distributor ID is required");
      return;
    }

    setError("");
    setShowOrder(true);
  };

  // Send verification button 
  const handleSendCode = () => {
    setShowOTP(true);
  };

  // OTP input change
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Verify button
  const handleVerify = () => {
    const finalOtp = otp.join("");
    console.log("Entered OTP:", finalOtp);
    alert("Verified & Delivered Successfully");
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar />

        <div className="text-center mt-6 ">

          <h1 className="text-center text-3xl font-bold text-[#B0422E] mb-4">
           Create Promoter Sale
          </h1>
          <div className="p-6">
            {/* Distributor Card Section*/}
            <div className="bg-white rounded-xl border border-gray-200 
                          shadow-sm mb-6 p-6"
            >
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-4">

                  <label className="text-gray-600 font-semibold">
                    Enter Distributor ID <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={distributorId}
                    onChange={(e) => setDistributorId(e.target.value)}
                    className="w-75 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                </div>

                {error && (
                  <p className="text-red-500 text-sm mt-2 text-start ml-41">{error}</p>
                )}

                <div className="text-gray-500 text-xs mt-2 text-start">
                  <p className="font-medium">Example IDs: DIST-2026-12345, DIST-2026-78432, DIST-2026-54321</p>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="px-10 py-2 text-white rounded-md bg-[#2273C3] hover:bg-blue-600 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Order Details Section*/}
            {showOrder && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm  ">

                <h2 className="text-lg font-semibold text-gray-600 mb-4 mt-4 text-start px-6">
                  Order Details
                </h2>

                {/* Order Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400 mb-2 text-start px-6">

                  <p className="font-semibold text-start">Order No:ORD-2026-00451</p>
                  <p className="font-semibold text-start">Order Date: 2026-02-10</p>
                  <p className="font-semibold text-start">IBO ID: IBO-78432</p>
                  <p className="font-semibold text-start">IBO Name: Rajesh Kumar</p>
                  <p className="font-semibold text-start">Mobile: 9876543210</p>

                </div>

                {/* Table */}
                <div className=" p-6 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#B0422E] text-white text-center font-semibold ">
                        <th className="py-3 rounded-l-xl">Sr No.</th>
                        <th className="py-3">Product</th>
                        <th className="py-3">Quantity</th>
                        <th className="py-3">MRP</th>
                        <th className="py-3">PV</th>
                        <th className="py-3 rounded-r-xl">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center text-black font-medium border-b border-gray-200">
                        <td className="py-4">01</td>
                        <td className="py-4">2.0 BODY DETOX CAPSULE</td>
                        <td className="py-4">03</td>
                        <td className="py-4">1,200₹</td>
                        <td className="py-4">80</td>
                        <td className="py-4">2,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {!showOTP && (
                  <div className="flex justify-center mt-4 mb-4">
                    <button
                      onClick={handleSendCode}
                      className="px-8 py-2 text-white rounded-md shadow-md bg-[#0D9488] hover:bg-green-700 "
                    >
                      Send Verification Code
                    </button>
                  </div>
                )}

                {/* OTP Section */}
                {showOTP && (
                  <div className="flex flex-col items-center mt-8 mb-4">

                    <p className="text-gray-500 mb-4">
                      Enter the verification code sent to IBO's mobile
                    </p>
                    <div className="flex gap-2 mb-6">

                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputsRef.current[index] = el)}
                          type="text"
                          value={digit}
                          maxLength="1"
                          onChange={(e) =>
                            handleOtpChange(e.target.value, index)
                          }
                          className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      ))}

                    </div>
                    <button
                      onClick={handleVerify}
                      className="px-10 py-2 text-white rounded-md shadow-md bg-orange-400 hover:bg-orange-600"
                    >
                      Verify & Deliver
                    </button>

                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePromoterSale;    