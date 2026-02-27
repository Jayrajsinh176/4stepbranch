import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

 function BalanceHistory() {
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
              <select className="item-end border border-gray-200 rounded-lg px-2 py-1 w-20 mr-2 bg-gray-200">
                <option>All</option>
                <option>Purchase Balance</option>
                <option>Turnover Balance</option>
              </select>
            </div>
            <table className="w-full min-w-190 text-sm">
              <thead>
                <tr className="bg-[#B0422E] text-white ">
                  <th className="py-3 px-4 text-left rounded-l-xl">
                    Request No
                  </th>
                  <th className="py-3 px-4 text-left">Request Date</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Payment Mode</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left rounded-r-xl">Status</th>
                </tr>
              </thead>

              <tbody className="font-medium text-black">
                <tr className="border-b border-gray-400">
                  <td className="py-4 px-4">01</td>
                  <td className="py-4 px-4">17-02-2026</td>
                  <td className="py-4 px-4">4999₹</td>
                  <td className="py-4 px-4">Online</td>
                  <td className="py-4 px-4">Purchase Balance</td>
                  <td className="py-4 px-4">Succeed</td>
                </tr>
                <tr className="border-b border-gray-400">
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
export default BalanceHistory;