import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import api from "../api/axios";

function Outbox() {

  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {

    const fetchMessages = async () => {
      try {

        const res = await api.get(`/helpdesk/${userId}`);
        setMessages(res.data);

      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };

    if (userId) {
      fetchMessages();
    }

  }, [userId]);


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

                  {messages.length > 0 ? (
                    messages.map((msg, index) => (
                      <tr
                        key={msg.id}
                        className="border-b border-gray-300 hover:bg-gray-50"
                      >
                        <td className="p-4">{index + 1}</td>
                        <td>You</td>
                        <td>{msg.subject}</td>

                        <td>
                          {new Date(msg.created_at).toLocaleDateString()}
                        </td>

                        <td
                          className={
                            msg.admin_reply
                              ? "text-green-600"
                              : "text-orange-500"
                          }
                        >
                          {msg.admin_reply ? "Replied" : "Pending"}
                        </td>

                        <td
                          onClick={() => {
                            setSelectedMessage(msg);
                            setShowModal(true);
                          }}
                          className="text-[#256BB1] font-semibold cursor-pointer hover:underline"
                        >
                          View
                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-4 text-gray-500">
                        No messages found
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for message details */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-md z-50">

          <div className="bg-white rounded-xl p-6 w-100">

            <h2 className="text-xl font-bold mb-4 text-[#B0422E]">
              Ticket Details
            </h2>

            <p className="mb-2">
              <strong>Subject:</strong> {selectedMessage.subject}
            </p>

            <p className="mb-2">
              <strong>Your Message:</strong> {selectedMessage.message}
            </p>

            <p className="mb-4">
              <strong>Admin Reply:</strong>{" "}
              {selectedMessage.admin_reply || "No reply yet"}
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-[#B0422E] text-white px-4 py-2 rounded"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Outbox;