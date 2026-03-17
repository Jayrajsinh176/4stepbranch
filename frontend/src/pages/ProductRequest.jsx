import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import api from "../api/axios";

function ProductRequest() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // FETCH CATEGORIES
  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();

  }, []);

  // FETCH PRODUCTS WHEN CATEGORY CHANGES
  useEffect(() => {

    const fetchProducts = async () => {
      try {

        const res = await api.get("/products", {
          params: { category: selectedCategory }
        });

        const data = res.data.map((p) => ({
          ...p,
          quantity: 1
        }));

        setProducts(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();

  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleQuantityChange = (index, value) => {

    const updated = [...products];

    updated[index].quantity = Number(value);

    setProducts(updated);
  };

  const handleSubmit = async (pro) => {

    try {

      await api.post("/product-request", {
        product_id: pro.id,
        quantity: pro.quantity
      });

      alert("Product request submitted");

    } catch (error) {
      console.error(error);
    }
  };

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

            <div className="flex justify-end mb-3">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="item-end border border-gray-200 rounded-lg px-2 py-1 w-auto mr-2 bg-gray-200 focus:outline-none"
              >
                <option value="">Category</option>

                {categories.map((cat) => (
                  <option key={cat.id} value={cat.category}>
                    {cat.category}
                  </option>
                ))}

              </select>
            </div>

            <table className="w-full min-w-190 text-sm text-center">
              <thead>
                <tr className="bg-[#B0422E] text-white">
                  <th className="py-3 px-4 rounded-l-xl">Sr No</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4">PV</th>
                  <th className="py-3 px-4">MRP</th>
                  <th className="py-3 px-4">Offer Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Total Amount</th>
                  <th className="py-3 px-4">Commission</th>
                  <th className="py-3 px-4">Net Amount</th>
                  <th className="py-3 px-4">Total PV</th>
                  <th className="py-3 px-4 rounded-r-xl">Action</th>
                </tr>
              </thead>

              <tbody className="font-medium">

                {products.map((pro, index) => {

                  const totalamount = pro.offerprice * pro.quantity;
                  const netamount = totalamount - pro.commission;
                  const totalpv = pro.pv * pro.quantity;

                  return (
                    <tr className="border-b border-gray-400" key={pro.id}>
                      <td className="py-4 px-4">{index + 1}</td>
                      <td className="py-4 px-4">{pro.category}</td>
                      <td className="py-4 px-4">{pro.productname}</td>
                      <td className="py-4 px-4">{pro.pv}</td>
                      <td className="py-4 px-4">{pro.mrp}</td>
                      <td className="py-4 px-4">{pro.offerprice}</td>

                      <td className="py-4 px-4">
                        <input
                          type="number"
                          min={1}
                          value={pro.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.value)
                          }
                          className="border border-gray-300 rounded-lg px-2 py-1 w-12 focus:outline-none"
                        />
                      </td>

                      <td className="py-4 px-4">{totalamount}</td>
                      <td className="py-4 px-4">{pro.commission}</td>
                      <td className="py-4 px-4">{netamount}</td>
                      <td className="py-4 px-4">{totalpv}</td>

                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleSubmit(pro)}
                          className="bg-[#B0422E] text-white px-3 py-1 rounded-lg hover:bg-[#8c3222]"
                        >
                          Submit
                        </button>
                      </td>

                    </tr>
                  );
                })}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRequest;