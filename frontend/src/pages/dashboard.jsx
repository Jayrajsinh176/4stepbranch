import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { FaLink } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";


/*  CARD */
function Card({ title, amount, note, color, icon }) {
  


  return (
    <div className={`p-6 rounded-xl text-white shadow ${color}`}>
      <div className="flex justify-between items-start">

        {/* Icon Box */}
        <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center">
          <span className="text-white text-2xl">{icon}</span>
        </div>

        {/* Growth Badge */}
        {/* <span className="text-xs bg-green-200 text-green-700 px-3 py-1 rounded-md font-semibold">
          +2.06%
        </span> */}
      </div>

      <h3 className="text-lg opacity-90 mt-4">{title}</h3>
      <h2 className="text-4xl font-bold mt-1">{amount}</h2>
      <p className="text-sm opacity-80 mt-1">{note}</p>
    </div>
  );
}

/*  DASHBOARD  */
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6">

          {/* Welcome */}
          <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow">
            Welcome back, {user?.fullname}
          </div>

          
          {/* Cards */}
          <div className="grid grid-cols-3 gap-5 mt-6">

            {/* Purchase Balance (Wallet Icon) */}
            <Card
              title="Purchase Balance"
              amount="₹00.00"
              note="Updated vs last month"
              icon={<LuWallet />}
              color="bg-[linear-gradient(90deg,#3483D2,#2262A1)]"
            />

            {/* Turnover */}
            <Card
              title="Turnover Balance"
              amount="₹00.00"
              note="Growth vs last month"
              icon={<GoArrowUpRight />}
              color="bg-[linear-gradient(90deg,#45B0D7,#268CB1)]"
            />

            {/* Purchase Orders */}
            <Card
              title="Purchase Orders"
              amount="0"
              note="Orders this month"
              icon={<BsCart />}
              color="bg-[linear-gradient(90deg,#2DA5D2,#2874BE)]"
            />

            {/* Sales Orders */}
            <Card
              title="No. of Sales Orders"
              amount="0"
              note="Sales this month"
              icon={<HiOutlineDocumentText />}
              color="bg-[linear-gradient(90deg,#B74331,#8A3225)]"
            />

            {/* Sales Turnover */}
            <Card
              title="Sales Turnover Amount"
              amount="₹00.00"
              note="Revenue this month"
              icon={<FaIndianRupeeSign />}
              color="bg-[linear-gradient(90deg,#2A9EC9,#266DB2)]"
            />

            {/* Commission */}
            <Card
              title="Commission Amount"
              amount="₹00.00"
              note="Earned this month"
              icon={<CiMedal />}
              color="bg-[linear-gradient(90deg,#9B4032,#2864A3)]"
            />
          </div>

        </div>
      </div>
    </div>
  );
}