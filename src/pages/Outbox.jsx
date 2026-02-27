import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import React from "react";

function Outbox() {

  const messages = [
    {
      id: 1,
      from: "Admin",
      subject: "Welcome to the platform!",
      date: "2026-02-14",
      status: "Read",
    },
    {
      id: 2,
      from: "Support Team",
      subject: "Your KYC is under review",
      date: "2026-02-16",
      status: "Pending",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="p-4 sm:p-6 bg-gray-100">

          <h1 className="text-3xl font-bold text-[#B0422E] text-center mb-8">
            Outbox
          </h1>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-center">

                <thead>
                  <tr className="bg-[#B0422E] text-white">
                    <th className="p-3 rounded-l-xl">Sr No</th>
                    <th className="p-3">From</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 rounded-r-xl">Action</th>
                  </tr>
                </thead>

                <tbody className="font-medium">
                  {messages.map((msg, index) => (
                    <tr
                      key={msg.id}
                      className="border-b border-gray-300 hover:bg-gray-50"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td>{msg.from}</td>
                      <td>{msg.subject}</td>
                      <td>{msg.date}</td>
                      <td
                        className={
                          msg.status === "Read"
                            ? "text-green-600"
                            : "text-orange-500"
                        }
                      >
                        {msg.status}
                      </td>
                      <td className="text-[#256BB1] font-semibold cursor-pointer hover:underline">
                        View
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outbox;