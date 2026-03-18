import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";


function SignIn() {

    const navigate = useNavigate();


    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const [activeTab, setActiveTab] = useState("password");
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        memberId: "",
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

        if (!form.memberId.trim()) {
            newErrors.memberId = "Member ID is required";
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true); // Start loading

            const response = await api.post("/login", {
                member_id: form.memberId,
                password: form.password
            });

            // Save user data
            localStorage.setItem("user", JSON.stringify(response.data.data));

            navigate("/dashboard");

        } catch (error) {
            if (error.response?.status === 401) {
                alert(error.response.data.message);
            } else {
                alert("Server Error");
            }
        } finally {
            setLoading(false); // Stop loading
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
                                    name="memberId"
                                    placeholder="Enter Member ID"
                                    value={form.memberId}
                                    onChange={handleChange}
                                    className="w-full py-2 outline-none text-lg"
                                />

                            </div>

                            {errors.memberId && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.memberId}
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
                                    <MdOutlineSecurity className="text-gray-400 mr-2 text-xl" />
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
                                disabled={loading}
                                className={`text-white text-lg px-10 py-2 rounded 
                                 ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                            >
                                {loading ? "Logging in..." : "Login"}
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
                        <Link to="/signup" className="text-blue-600 ml-1 cursor-pointer hover:underline">
                            Sign Up
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}
export default SignIn;