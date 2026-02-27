import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { PiUserCircleCheckFill } from "react-icons/pi";

function SignIn() {

    const [activeTab, setActiveTab] = useState("password");

    const [form, setForm] = useState({
        branchId: "",
        password: "",
        code: "",
        remember: false
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

     
    const validate = () => {
        let newErrors = {};

        if (!form.branchId.trim()) {
            newErrors.branchId = "Branch ID is required";
        }

        if (activeTab === "password") {
            if (!form.password.trim()) {
                newErrors.password = "Password is required";
            } else if (form.password.length < 4) {
                newErrors.password = "Password must be at least 4 characters";
            }
        }

        if (activeTab === "code") {
            if (!form.code.trim()) {
                newErrors.code = "Verification code required";
            } else if (form.code.length < 4) {
                newErrors.code = "Invalid verification code";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Login Successful ✅");

            console.log(form);
        }
    };

   

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">

            <div className="w-full max-w-2xl">
{/* Logo */}
                <div className="text-center mb-4">

                    <img
                        src="/images/4steplogo.png"
                        className="mx-auto h-20"
                        alt="logo"
                    />
                    <h2 className="mt-5 text-2xl font-semibold">
                        Sign In
                    </h2>
                </div>
{/* Sign In Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center gap-6 mb-4 text-xl">

                        <div className="font-bold text-[#AE4329]">
                            Sign in with
                        </div>
                        <button
                            onClick={() => setActiveTab("password")}
                            className={`flex items-center gap-2 ${activeTab === "password"
                                    ? "text-blue-600 font-medium"
                                    : "text-black"
                                }`}
                        >
                            <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${activeTab === "password"
                                    ? "border-blue-600"
                                    : "border-black"
                                }`}>
                                {activeTab === "password" && (
                                    <div className="w-4 h-3 bg-blue-600 rounded-full"></div>
                                )}
                            </div>
                             Password
                        </button>

                        <button
                            onClick={() => setActiveTab("code")}
                            className={`flex items-center gap-2 ${activeTab === "code"
                                    ? "text-blue-600 font-medium"
                                    : "text-black"
                                }`}
                        >
                            <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${activeTab === "code"
                                    ? "border-blue-600"
                                    : "border-black"
                                }`}>
                                {activeTab === "code" && (
                                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                )}
                            </div>
                            Verification Code
                        </button>

                    </div>
                    {/* Form  section*/}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">

                            <div className="flex items-center border-b">

                                <FaUser className="text-gray-400 mr-2" />

                                <input
                                    type="text"
                                    name="branchId"
                                    placeholder="Enter Branch ID"
                                    value={form.branchId}
                                    onChange={handleChange}
                                    className="w-full py-2 outline-none text-lg"
                                />

                            </div>

                            {errors.branchId && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.branchId}
                                </p>
                            )}

                        </div>

                        {activeTab === "password" && (
                            <div className="mb-3">

                                <div className="flex items-center border-b">

                                    <FaLock className="text-gray-400 mr-2" />

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={form.password}
                                        onChange={handleChange}
                                        className="w-full py-2 outline-none text-lg"
                                    />

                                </div>

                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.password}
                                    </p>
                                )}

                            </div>
                        )}

                        {activeTab === "code" && (
                            <div className="mb-3">
                                <div className="flex items-center border-b">
                                    <PiUserCircleCheckFill className="text-gray-400 mr-2 text-xl" />
                                    <input
                                        type="text"
                                        name="code"
                                        placeholder="Enter Verification Code"
                                        value={form.code}
                                        onChange={handleChange}
                                        className="w-full py-2 outline-none text-lg"
                                    />
                                </div>

                                {errors.code && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.code}
                                    </p>
                                )}

                            </div>
                        )}

                        <div className="flex justify-center mt-6">

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-2 rounded"
                            >
                                Login
                            </button>

                        </div>

                        <div className="flex items-center justify-between  mt-4 font-medium text-lg">

                            <label className="flex items-center gap-2 text-gray-600">

                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={form.remember}
                                    onChange={handleChange}
                                    className="h-8"
                                />

                                Remember Me

                            </label>

                            <div className="space-x-2">

                                <button
                                    type="button"
                                    className="text-blue-600 hover:underline"
                                >
                                    Forget Password?
                                </button>

                                <button
                                    type="button"
                                    className="text-blue-600 hover:underline"
                                >
                                    Reset
                                </button>

                            </div>
                        </div>
                    </form>
                    <p className="text-center text-lg mt-4 text-gray-600">
                        Don't have an account?
                        <span className="text-blue-600 ml-1 cursor-pointer hover:underline">
                            Sign Up
                        </span>
                    </p>

                </div>

            </div>

        </div>
    );
}
export default SignIn;