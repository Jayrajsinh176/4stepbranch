import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { MdOutlineFileDownload } from "react-icons/md";

function ProductStockReport() {
     
    const stockReport = [
        {
            id: 1,
            product: "Product 1",
            mrp: 100,
            offerPrice: 50,
            pv: 10,
            productReceived: 20,
            productUsed: 10,
            productBalance: 10,
            balanceAmount: 500
        },
        {
            id: 2,
            product: "Product 2",
            mrp: 100,
            offerPrice: 50,
            pv: 10,
            productReceived: 20,
            productUsed: 10,
            productBalance: 10,
            balanceAmount: 500
        }

    ]
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
                                    <th className="py-3 px-4  rounded-l-xl">Sr No.</th>
                                    <th className="py-3 px-4 ">Product </th>
                                    <th className="py-3 px-4 ">MRP</th>
                                    <th className="py-3 px-4 ">Offer Price</th>
                                    <th className="py-3 px-4 ">PV</th>
                                    <th className="py-3 px-4 ">Product Received</th>
                                    <th className="py-3 px-4 ">Product Used</th>
                                    <th className="py-3 px-4 ">Product Balance</th>
                                    <th className="py-3 px-4 rounded-r-xl">Balance Amount</th>
                                </tr>
                            </thead>

                            <tbody className="text-center font-medium">
                                {stockReport.map((item) => (
                                    <tr className="border-b  border-gray-400">
                                        <td className="py-4 px-4">{item.id}</td>
                                        <td className="py-4 px-4">{item.product}</td>
                                        <td className="py-4 px-4">{item.mrp}</td>
                                        <td className="py-4 px-4">{item.offerPrice}</td>
                                        <td className="py-4 px-4">{item.pv}</td>
                                        <td className="py-4 px-4">{item.productReceived}</td>
                                        <td className="py-4 px-4">{item.productUsed}</td>
                                        <td className="py-4 px-4">{item.productBalance}</td>
                                        <td className="py-4 px-4">{item.balanceAmount}</td>
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
export default ProductStockReport;