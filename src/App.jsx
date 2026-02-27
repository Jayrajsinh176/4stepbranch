import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MyProfile from "./pages/myprofile";
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import RaiseTicket from "./pages/RaiseTicket";
import Inbox from "./pages/Inbox";
import Outbox from "./pages/Outbox";
import PurchaseBalanceRequest from "./pages/PurchaseBalanceRequest";
import TurnoverBalance from "./pages/TurnoverBalanceRequest";
import BalanceHistory from "./pages/History";
import Transaction from "./pages/Transaction";
import ProductRequest from "./pages/ProductRequest";
import SendProductRequest from "./pages/SendProductRequest";
import CreateBranchSale from "./pages/CreateBranchSale";
import CreatePromoterSale from "./pages/CreatePromoterSale";
import OrderHistory from "./pages/OrderHistory";
import ProductStockReport from "./pages/ProductStockReport";
import ProductStockTransaction from "./pages/ProductStockTransaction";
import MyKYC from "./pages/MyKYC";

 

export default function App() {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<Dashboard />} />
      {/*  Pages */}
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/raiseticket" element={<RaiseTicket />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/outbox" element={<Outbox />} />
      <Route path="/PurchaseRequest" element={<PurchaseBalanceRequest />} />
      <Route path="/TurnoverRequest" element={<TurnoverBalance />} />
      <Route path="/BalanceHistory" element={<BalanceHistory />} />
      <Route path="/Transaction" element={<Transaction />} />
      <Route path="/ProductRequest" element={<ProductRequest />} />
      <Route path="/SendProductRequest" element={<SendProductRequest />} />
      <Route path="/CreateBranchSale" element={<CreateBranchSale />} />
      <Route path="/CreatePromoterSale" element={<CreatePromoterSale />} />
      <Route path="/OrderHistory" element={<OrderHistory />} />
      <Route path="/ProductStockReport" element={<ProductStockReport />} />
      <Route path="/ProductStockTransaction" element={<ProductStockTransaction />} />
      <Route path="/MyKyc" element={<MyKYC />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}