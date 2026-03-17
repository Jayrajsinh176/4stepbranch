import React, { useEffect } from 'react';
import { LuPanelLeftDashed } from "react-icons/lu";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  
  const user = JSON.parse(localStorage.getItem("user"));

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/signin");  
    }
  }, [user, navigate]);

  const formatTitle = (pathname) => {
    if (pathname === "/") return "Dashboard";

    const name = pathname
      .replace("/", "")
      .replace(/([A-Z])/g, " $1")
      .trim();

    return name
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  const pageName = formatTitle(path);

  return (
    <div className="bg-white border-b border-gray-200">

      <div className="h-16 px-6 flex justify-between items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-lg font-semibold text-gray-700 flex items-center">
            <LuPanelLeftDashed className="mr-2" />

            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>

            {path !== "/dashboard" && (
              <span className="ml-1 text-gray-500 ">
                {" / "}
                <span className="text-gray-700 font-medium text-sm">
                  {pageName}
                </span>
              </span>
            )}
          </h1>

          <p className="text-xs text-gray-400">
            CUSTOMER ID: {user?.member_id}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          <div className="text-sm text-gray-600 leading-tight">
            <p>Left Members: <span className="font-semibold">2</span></p>
            <p>Right Members: <span className="font-semibold">1</span></p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-9 h-9 rounded-full border"
            />
            <div className="text-sm leading-tight">
              <p className="font-semibold text-gray-700">
                {user?.fullname}
              </p>
              <p className="text-xs text-gray-400">Member</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}