import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { LuNetwork, LuWallet } from "react-icons/lu";
import { FiChevronDown, FiChevronRight, FiLogOut } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  // Dashboard
  const isDashboard = location.pathname === "/";

  // Account Routes
  const isProfile = location.pathname === "/profile";
  const isKyc = location.pathname === "/MyKyc";
  const isWelcomeLetter = location.pathname === "/welcome letter";
  const isBrachCertificate = location.pathname === "/branch-certificate";
  const isAccountSection = isProfile || isKyc || isWelcomeLetter || isBrachCertificate;

  // Portfolio Routes
  const isPurchaseBalance = location.pathname === "/PurchaseRequest";
  const isTurnoverBalance = location.pathname === "/TurnoverRequest";
  const isHistory = location.pathname === "/BalanceHistory";
  const isTransaction = location.pathname === "/Transaction";
  const isPaymnet = isPurchaseBalance || isTurnoverBalance || isHistory || isTransaction;

  // Product Section Routes
  const isProductRequest = location.pathname === "/ProductRequest";
  const isSendProductRequest = location.pathname === "/SendProductRequest";
  const isProductStockReport = location.pathname === "/ProductStockReport";
  const isProductStockTransaction = location.pathname === "/ProductStockTransaction";

  const isProduct = isProductRequest || isSendProductRequest || isProductStockReport || isProductStockTransaction;

  // Product Sales Section Routes
  const isbranchsales = location.pathname === "/CreateBranchSale";
  const isPromoterSales = location.pathname === "/CreatePromoterSale";
  const isOrderHistory = location.pathname === "/OrderHistory";
  const isProductSalesSection = isbranchsales || isPromoterSales || isOrderHistory;

  // Offer Details Section Routes
  const isOfferDetails = location.pathname === "/offerdetails";

  // Help Desk Section Routes
  const isRaiseTicket = location.pathname === "/raiseticket";
  const isInbox = location.pathname === "/inbox";
  const isOutbox = location.pathname === "/outbox";

  const isHelpDeskSection = isRaiseTicket || isInbox || isOutbox;



  const [openAccount, setOpenAccount] = useState(isAccountSection);
  const [openPayment, setOpenPayment] = useState(isPaymnet);
  const [openProduct, setOpenProduct] = useState(isProduct);
  const [openProductSales, setProductSales] = useState(isProductSalesSection);
  const [openHelpDesk, setOpenHelpDesk] = useState(isHelpDeskSection);

  //   useEffect(() => {
  //     if (isAccountSection) setOpenAccount(true);
  //   }, [isAccountSection]);

  //   useEffect(() => {
  //     if (isPaymnet) setOpenPayment(true);
  //   }, [isPortfoisPaymnetlioSection]);

  //   useEffect(() => {
  //     if (isProduct) setOpenProduct(true);
  //   }, [isProduct]);

  //   useEffect(() => {
  //     if (isProductSalesSection) setProductSales(true);
  //   }, [isProductSalesSection]);

  //   useEffect(() => {
  //     if (isHelpDeskSection) setOpenHelpDesk(true);
  //   }, [isHelpDeskSection]);

  return (
    <div className="w-64 bg-white border-r border-gray-300 flex flex-col">

{/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-gray-200 ">
        <img src="./images/4steplogo.png" alt="logo" className="h-15 ml-8 mb-2 mt-2" />
        {/* <p className="text-xs text-gray-400 ml-2 whitespace-nowrap">
          One destination success
        </p> */}
      </div>
{/* Side Bar Menu */}
      <div className="flex-1 overflow-y-auto p-4 text-sm space-y-1">

        {/* Dashboard */}
        <Link
          to="/"
          className={`px-3 py-2 rounded flex items-center ${isDashboard ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`}
        >
          <MdOutlineDashboard className="mr-2" /> Dashboard
        </Link>
        {/* My Account Dropdown */}
        <div>
          <div
            onClick={() => setOpenAccount(!openAccount)}
            className={`px-3 py-2 rounded cursor-pointer flex justify-between items-center ${isAccountSection ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
          >
            <span className="flex items-center">
              <GoPerson className="mr-2" /> My Account
            </span>
            {openAccount ? <FiChevronDown /> : <FiChevronRight />}
          </div>

          {openAccount && (
            <div className="ml-7 text-gray-600 space-y-1">
              <Link
                to="/profile"
                className={`block px-2 py-1 rounded ${isProfile ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                My Profile
              </Link>

              <Link
                to="/MyKyc"
                className={`block px-2 py-1 rounded ${isKyc ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                My KYC
              </Link>

              <Link
                to="/welcome-letter"
                className={`block px-2 py-1 rounded ${isWelcomeLetter ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Welcome Letter
              </Link>
              <Link
                to="/royalty-certificate"
                className={`block px-2 py-1 rounded ${isBrachCertificate ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Branch Certificate
              </Link>
            </div>
          )}
        </div>
        {/* Payment Dropdown */}
        <div>
          <div
            onClick={() => setOpenPayment(!openPayment)}
            className={`px-3 py-2 rounded cursor-pointer flex justify-between items-center ${isPaymnet ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
          >
            <span className="flex items-center">
              <MdOutlinePayments className="mr-2" /> Payment
            </span>
            {openPayment ? <FiChevronDown /> : <FiChevronRight />}
          </div>

          {openPayment && (
            <div className="ml-7 text-gray-600 space-y-1">
              <Link
                to="/PurchaseRequest"
                className={`block px-2 py-1 rounded ${isPurchaseBalance ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Purchase Balance Request
              </Link>

              <Link
                to="/TurnoverRequest"
                className={`block px-2 py-1 rounded ${isTurnoverBalance ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Turnover Balance Request
              </Link>

              <Link
                to="/BalanceHistory"
                className={`block px-2 py-1 rounded ${isHistory ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                History
              </Link>
              <Link
                to="/Transaction"
                className={`block px-2 py-1 rounded ${isTransaction ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Transcation
              </Link>
            </div>
          )}
        </div>
        {/* Product Dropdown */}
        <div>
          <div
            onClick={() => setOpenProduct(!openProduct)}
            className={`px-3 py-2 rounded cursor-pointer flex justify-between items-center ${isProduct ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
          >
            <span className="flex items-center">
              <LuNetwork className="mr-2" /> Product
            </span>
            {openProduct ? <FiChevronDown /> : <FiChevronRight />}
          </div>
          {openProduct && (
            <div className="ml-7 text-gray-600 space-y-1">
              <Link
                to="/ProductRequest"
                className={`block px-2 py-1 rounded ${isProductRequest ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Product Request
              </Link>

              <Link
                to="/SendProductRequest"
                className={`block px-2 py-1 rounded ${isSendProductRequest ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Send Product Request
              </Link>

              <Link
                to="/ProductStockReport"
                className={`block px-2 py-1 rounded ${isProductStockReport ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Product Stock Report
              </Link>
              <Link
                to="/ProductStockTransaction"
                className={`block px-2 py-1 rounded ${isProductStockTransaction ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Product Stock Transaction
              </Link>

            </div>
          )}

        </div>
        {/* Product Sales Dropdown */}
        <div>
          <div
            onClick={() => setProductSales(!openProductSales)}
            className={`px-3 py-2 rounded cursor-pointer flex justify-between items-center ${isProductSalesSection ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
          >
            <span className="flex items-center">
              <LuWallet className="mr-2" /> Product Sales
            </span>
            {openProductSales ? <FiChevronDown /> : <FiChevronRight />}
          </div>
          {openProductSales && (
            <div className="ml-7 text-gray-600 space-y-1">
              <Link
                to="/CreateBranchSale"
                className={`block px-2 py-1 rounded ${isbranchsales ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Create Branch Sale
              </Link>

              <Link
                to="/CreatePromoterSale"
                className={`block px-2 py-1 rounded ${isPromoterSales ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Create Promoter Sale
              </Link>

              <Link
                to="/OrderHistory"
                className={`block px-2 py-1 rounded ${isOrderHistory ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Order History
              </Link>

            </div>
          )}
        </div>
        {/* Offer Details  */}
        <Link
          to="/offerdetails"
          className={`px-3 py-2 rounded flex items-center ${isOfferDetails ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
            }`}
        >
          <BiSolidOffer className="mr-2" /> Offer Details
        </Link>

        {/* Help Desk Dropdown */}
        <div>
          <div
            onClick={() => setOpenHelpDesk(!openHelpDesk)}
            className={`px-3 py-2 rounded cursor-pointer flex justify-between items-center ${isHelpDeskSection ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
              }`}
          >
            <span className="flex items-center">
              <FaHandsHelping className="mr-2" /> HelpDesk
            </span>
            {openHelpDesk ? <FiChevronDown /> : <FiChevronRight />}
          </div>

          {openHelpDesk && (
            <div className="ml-7 text-gray-600 space-y-1">
              <Link
                to="/raiseticket"
                className={`block px-2 py-1 rounded ${isRaiseTicket ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Raise Ticket
              </Link>

              <Link
                to="/inbox"
                className={`block px-2 py-1 rounded ${isInbox ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Inbox
              </Link>

              <Link
                to="/outbox"
                className={`block px-2 py-1 rounded ${isOutbox ? "bg-blue-100 text-blue-600" : "hover:bg-blue-50"
                  }`}
              >
                Outbox
              </Link>


            </div>
          )}
        </div>
      </div>
{/* Logout Section */}
      <div className="border-t border-gray-200 bg-gray-100 px-4 py-3 items-end">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
              NJ
            </div>

            <div className="leading-tight">
              <p className="text-sm font-medium text-gray-800">
                Nayak Jenatiben
              </p>
              <p className="text-xs text-gray-500">
                FC7981495
              </p>
            </div>
          </div>

          <button className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200"
            onClick={handleLogout}>
            <FiLogOut className="w-5 h-5 text-gray-600" />
          </button>

        </div>
      </div>
    </div>
  );
}