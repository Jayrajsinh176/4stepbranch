import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function ProductRequest() {

  const product = [
    {
      id: "1",
      category: "Electronics",
      productname: "Laptop",
      pv: "100",
      mrp: "1000",
      offerprice: "500",
      quantity: "10",
      totalamount: "5000",
      commission: "100",
      netamount: "4900",
      totalpv: "1000",
    },
    {
      id: "2",
      category: "Electronics",
      productname: "Laptop",
      pv: "100",
      mrp: "1000",
      offerprice: "500",
      quantity: "10",
      totalamount: "5000",
      commission: "100",
      netamount: "4900",
      totalpv: "1000",
    }
  ]
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar />

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-[#B0422E]">
            Product Request
          </h1>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
            <div className="flex justify-end mb-3 ">
              <select className="item-end border border-gray-200 rounded-lg px-2 py-1 w-auto mr-2 bg-gray-200">
                <option>Category</option>
                <option>Purchase Balance</option>
                <option>Turnover Balance</option>
              </select>
            </div>
            <table className="w-full min-w-190 text-sm text-center">
              <thead>
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-3 px-4  rounded-l-xl">Sr No</th>
                  <th className="py-3 px-4 ">Category</th>
                  <th className="py-3 px-4 ">Product Name</th>
                  <th className="py-3 px-4 ">PV</th>
                  <th className="py-3 px-4 ">MRP</th>
                  <th className="py-3 px-4 ">Offer Price</th>
                  <th className="py-3 px-4 ">Quantity</th>
                  <th className="py-3 px-4 ">Total Amount</th>
                  <th className="py-3 px-4 ">Commission</th>
                  <th className="py-3 px-4 ">Net Amount</th>
                  <th className="py-3 px-4 rounded-r-xl">Total PV</th>
                </tr>
              </thead>

              <tbody className="font-medium">
                {product.map((pro, index) => (
                  <tr className="border-b  border-gray-400" key={pro.id}>
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4">{pro.category}</td>
                    <td className="py-4 px-4">{pro.productname}</td>
                    <td className="py-4 px-4">{pro.pv}</td>
                    <td className="py-4 px-4">{pro.mrp}</td>
                    <td className="py-4 px-4">{pro.offerprice}</td>
                    <td className="py-4 px-4">{pro.quantity}</td>
                    <td className="py-4 px-4">{pro.totalamount}</td>
                    <td className="py-4 px-4">{pro.commission}</td>
                    <td className="py-4 px-4">{pro.netamount}</td>
                    <td className="py-4 px-4">{pro.totalpv}</td>
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
export default ProductRequest;