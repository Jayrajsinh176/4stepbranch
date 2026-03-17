import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function BalanceHistory() {

  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/balance-history?type=${filter}`
        );
        setHistory(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, [filter]);



  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar />

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-[#B0422E]">
            History
          </h1>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
            <div className="flex justify-end mb-3 ">
              <select
                className="item-end border border-gray-200 rounded-lg px-2 py-1 w-auto mr-2 bg-gray-200"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="purchase">Purchase Balance</option>
                <option value="turnover">Turnover Balance</option>
              </select>
          </div>
          <table className="w-full min-w-190 text-sm">
            <thead>
              <tr className="bg-[#B0422E] text-white text-center ">
                <th className="py-3 px-4 rounded-l-xl">Request No</th>
                <th className="py-3 px-4 ">Request Date</th>
                <th className="py-3 px-4 ">Amount</th>
                <th className="py-3 px-4 ">Payment Mode</th>
                <th className="py-3 px-4 ">Type</th>
                <th className="py-3 px-4  rounded-r-xl">Status</th>
              </tr>
            </thead>

            <tbody className="font-medium text-black text-center">
              {history.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No Records Found
                  </td>
                </tr>
              ) : (
                history.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-400">
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">{item.amount}₹</td>
                    <td className="py-4 px-4">{item.mode_of_payment}</td>
                    <td className="py-4 px-4">
                      {item.type === "purchase"
                        ? "Purchase Balance"
                        : "Turnover Balance"}
                    </td>
                    <td className="py-4 px-4">
                      {item.status === "Approved" ? (
                        <span className="text-green-600">Approved</span>
                      ) : (
                        <span className="text-orange-500">Pending</span>
                      )}
                    </td> 
                  </tr>     
                ))
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
    </div >
  );
}
export default BalanceHistory;