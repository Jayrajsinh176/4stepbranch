import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { MdOutlineFileDownload } from "react-icons/md";

function ProductStockTransaction() {
    return (
        <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
            <Sidebar />

            <div className="flex-1 min-w-0 flex flex-col">
                <Navbar />

                <div className="text-center mt-6">
                    <h1 className="text-3xl font-bold text-[#B0422E]">
                        Product Stock Transaction
                    </h1>
                </div>

                <div className="p-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
                        <div className="flex mb-3 ">
                            <label htmlFor="table-search" className=" text-start font-semibold text-lg text-gray-500 ">
                                Search:
                            </label>
                            <input
                                type="text"
                                id="table-search"
                                className="ml-2 text-sm outline-0 inline border border-gray-300
                                     text-gray-900 rounded-lg px-2 h-8 bg-gray-200"   
                            />
                               
                            <button className="text-sm font-semibold bg-blue-500 text-white 
                                     px-4 py-2 rounded-lg hover:bg-blue-600 ml-auto justify-end"
                            >
                                <MdOutlineFileDownload className="inline-block  text-lg" />
                                Download CSV
                            </button>
                        </div>
                        <table className="w-full min-w-190 text-sm">
                            <thead>
                                <tr className="bg-[#B0422E] text-white">
                                    <th className="py-3 px-4 text-left rounded-l-xl">Sr No.</th>
                                    <th className="py-3 px-4 text-left">Product </th>
                                    <th className="py-3 px-4 text-left">Date</th>
                                    <th className="py-3 px-4 text-left">From Seller</th>
                                    <th className="py-3 px-4 text-left">To Seller</th>
                                    <th className="py-3 px-4 text-left">Quantity</th>
                                    <th className="py-3 px-4 text-left rounded-r-xl">Status</th>
                                </tr>
                            </thead>

                            <tbody className="text-center font-medium">
                                <tr className="border-b  border-gray-400">
                                    <td className="py-4 px-4">01</td>
                                    <td className="py-4 px-4">BODY DETOX CAPSULE</td>
                                    <td className="py-4 px-4">10-02-2026</td>
                                    <td className="py-4 px-4">FC78457</td>
                                    <td className="py-4 px-4">FC78457</td> 
                                    <td className="py-4 px-4">04</td>
                                    <td className="py-4 px-4 text-yellow-800 rounded-full">Pending</td>
                                </tr>
                                <tr className="border-b">
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductStockTransaction;