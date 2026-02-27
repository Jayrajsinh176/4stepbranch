import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { MdOutlineFileDownload } from "react-icons/md";

function ProductStockReport() {
    return (
        <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
            <Sidebar />

            <div className="flex-1 min-w-0 flex flex-col">
                <Navbar />

                <div className="text-center mt-6">
                    <h1 className="text-3xl font-bold text-[#B0422E]">
                        Product Stock Report
                    </h1>
                </div>

                <div className="p-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
                        <div className="flex justify-end mb-3 ">
                            <button className="text-sm font-semibold bg-blue-500 text-white 
                                     px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                <MdOutlineFileDownload className="inline-block  text-lg" />
                                Download CSV
                            </button>
                        </div>
                        <table className="w-full min-w-190 text-sm">
                            <thead>
                                <tr className="bg-[#B0422E] text-white font-semibold">
                                    <th className="py-3 px-4 text-left rounded-l-xl">Sr No.</th>
                                    <th className="py-3 px-4 text-left">Product </th>
                                    <th className="py-3 px-4 text-left">MRP</th>
                                    <th className="py-3 px-4 text-left">Offer Price</th>
                                    <th className="py-3 px-4 text-left">PV</th>
                                    <th className="py-3 px-4 text-left">Product Received</th>
                                    <th className="py-3 px-4 text-left">Product Used</th>
                                    <th className="py-3 px-4 text-left">Product Balance</th>
                                    <th className="py-3 px-4 text-left rounded-r-xl">Balance Amount</th>
                                </tr>
                            </thead>

                            <tbody className="text-center font-medium">
                                <tr className="border-b  border-gray-400">
                                    <td className="py-4 px-4">01</td>
                                    <td className="py-4 px-4">BODY DETOX CAPSULE</td>
                                    <td className="py-4 px-4">999</td>
                                    <td className="py-4 px-4">999</td>
                                    <td className="py-4 px-4">166</td>
                                    <td className="py-4 px-4">10</td>
                                    <td className="py-4 px-4">06</td>
                                    <td className="py-4 px-4">04</td>
                                    <td className="py-4 px-4">3200</td>
                                </tr>
                                <tr className="border-b  border-gray-400">
                                    <td className="py-4 px-4">02</td>
                                    <td className="py-4 px-4">BODY DETOX CAPSULE</td>
                                    <td className="py-4 px-4">999</td>
                                    <td className="py-4 px-4">999</td>
                                    <td className="py-4 px-4">166</td>
                                    <td className="py-4 px-4">10</td>
                                    <td className="py-4 px-4">06</td>
                                    <td className="py-4 px-4">04</td>
                                    <td className="py-4 px-4">3200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductStockReport;