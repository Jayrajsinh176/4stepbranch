import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { MdOutlineFileDownload } from "react-icons/md";

function ProductStockTransaction() {

    const productStockTransaction = [
        {
            id: 1,
            product: "Product A",
            date: "2023-01-01",
            fromseller: "Seller A",
            toseller: "Seller B",
            quantity: "10",
            status: "Pending",
        },
        {
            id: 2,
            product: "Product B",
            date: "2023-02-15",
            fromseller: "Seller C",
            toseller: "Seller D",
            quantity: "5",
            status: "Approved",
        }
    ]
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
                        <table className="w-full min-w-190 text-sm text-center">
                            <thead>
                                <tr className="bg-[#B0422E] text-white ">
                                    <th className="py-3 px-4  rounded-l-xl">Sr No.</th>
                                    <th className="py-3 px-4 ">Product </th>
                                    <th className="py-3 px-4 ">Date</th>
                                    <th className="py-3 px-4 ">From Seller</th>
                                    <th className="py-3 px-4 ">To Seller</th>
                                    <th className="py-3 px-4 ">Quantity</th>
                                    <th className="py-3 px-4 rounded-r-xl">Status</th>
                                </tr>
                            </thead>

                            <tbody className=" font-medium">
                                {productStockTransaction.map((tran, index) => (
                                    <tr className="border-b" key={tran.id}>
                                        <td className="py-4 px-4">{index + 1}</td>
                                        <td className="py-4 px-4">{tran.product}</td>
                                        <td className="py-4 px-4">{tran.date}</td>
                                        <td className="py-4 px-4">{tran.fromseller}</td>
                                        <td className="py-4 px-4">{tran.toseller}</td>
                                        <td className="py-4 px-4">{tran.quantity}</td>
                                        <td className={
                                            tran.status === "Approved"
                                                ? "text-green-600 py-4 px-4 " 
                                                : "text-orange-500 py-4 px-4 "
                                        }>{tran.status}</td>
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
export default ProductStockTransaction;