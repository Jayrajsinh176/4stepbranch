import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        branchName: "",
        branchPan: "",
        dob: "",
        gstNo: "",
        email: "",
        mobileNo: "",
        address: "",
        pinCode: "",
        state: "",
        city: "",
        district: "",
        agreeTerms: false,
        ageConfirmed: false,
    });

    const [errors, setErrors] = useState({});

    const generateMemberId = () => {
        const random = Math.floor(100000 + Math.random() * 900000);
        return "4STEP" + random;
    };

    const validateForm = () => {

        let newErrors = {};

        // regular expressions for common formats
        const emailRegex = /^\S+@\S+\.\S+$/;
        const mobileRegex = /^[0-9]{10}$/;
        const pinCodeRegex = /^[0-9]{6}$/;
        // const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // simple PAN format
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i; // basic GSTIN

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Full name is required";
        }

        if (!formData.branchName.trim()) {
            newErrors.branchName = "Branch name is required";
        }

        // if (!formData.branchPan.trim()) {
        //     newErrors.branchPan = "Branch PAN is required";
        // } else if (!panRegex.test(formData.branchPan.trim().toUpperCase())) {
        //     newErrors.branchPan = "Invalid PAN format";
        // }

        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
        } else {
            // verify age >= 18
            const birth = new Date(formData.dob);
            const today = new Date();
            let age = today.getFullYear() - birth.getFullYear();
            const m = today.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            if (age < 18) {
                newErrors.dob = "You must be at least 18 years old";
            }
        }

        if (!formData.gstNo.trim()) {
            newErrors.gstNo = "GST No. is required";
        } else if (!gstRegex.test(formData.gstNo.trim())) {
            newErrors.gstNo = "Invalid GSTIN format";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.mobileNo.trim()) {
            newErrors.mobileNo = "Mobile number is required";
        } else if (!mobileRegex.test(formData.mobileNo.trim())) {
            newErrors.mobileNo = "Enter a valid 10‑digit mobile number";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }

        if (!formData.pinCode.trim()) {
            newErrors.pinCode = "Pin code is required";
        } else if (!pinCodeRegex.test(formData.pinCode.trim())) {
            newErrors.pinCode = "Pin code must be 6 digits";
        }

        if (!formData.state.trim()) {
            newErrors.state = "State is required";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.district.trim()) {
            newErrors.district = "District is required";
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "You must agree to the terms";
        }

        if (!formData.ageConfirmed) {
            newErrors.ageConfirmed = "Please confirm your age";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;
        let newValue = type === "checkbox" ? checked : value;

        // automatically uppercase certain identifiers
        if (name === "branchPan" || name === "gstNo") {
            newValue = String(newValue).toUpperCase();
        }

        // allow only digits for mobile and pincode
        if (name === "mobileNo" || name === "pinCode") {
            // strip non-digits
            newValue = newValue.replace(/\D/g, "");
        }

        setFormData({
            ...formData,
            [name]: newValue
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateForm()) {

            const memberId = generateMemberId();

            const userData = {
                memberId,
                ...formData
            };

            const existingUsers =
                JSON.parse(localStorage.getItem("users")) || [];

            existingUsers.push(userData);

            localStorage.setItem(
                "users",
                JSON.stringify(existingUsers)
            );

            alert("Signup Successful\nMember ID: " + memberId);

            navigate("/signin");
        }
    };


    return (

        <div className="min-h-screen bg-gray-200 flex justify-center items-center">

            <div className="w-full max-w-3xl ">

                {/* logo */}
                <div className="text-center mb-6 mt-6">
                    <img
                        src="/images/4steplogo.png"
                        className="mx-auto h-20"
                        alt="logo"
                    />

                    <div className=" p-3 overflow-hidden rounded-xl text-center mb-4 mt-4 bg-[#8b5e3c]">
                        <h1 className='text-3xl font-semibold text-white '>Sign up</h1>
                    </div>
                </div>


                <form onSubmit={handleSubmit}>

                    {/* Personal Details */}
                    <div className="bg-white rounded-xl p-6 mb-6">

                        <h3 className="text-[#AE4329] text-lg font-bold mb-3">
                            Personal Details
                        </h3>
                       {/* Full Name  */}
                        <div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="fullname" className="text-black text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <div className="flex items-center border-b">
                                    <input
                                        id="fullname"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-sm "
                                    />
                                </div>
                            </div>
                            {errors.fullname &&
                                <p className="text-red-500 text-xs">
                                    {errors.fullname}
                                </p>}
                        </div>
                        {/* Brach Name & Brach PAN */}
                        <div className="grid grid-cols-2 gap-6 mb-4">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="branchName" className="text-black text-sm font-medium mb-2">
                                        Branch Name
                                    </label>
                                    <div className="flex items-center border-b">
                                        <input
                                            id="branchName"
                                            name="branchName"
                                            value={formData.branchName}
                                            onChange={handleChange}
                                            className="w-full  bg-transparent outline-none text-sm text-black  "
                                        />
                                    </div>
                                </div>
                                {errors.branchName &&
                                    <p className="text-red-500 text-xs">
                                        {errors.branchName}
                                    </p>}
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="branchPan" className="text-black text-sm font-medium mb-2">
                                        Branch PAN
                                    </label>
                                    <div className="flex items-center border-b">
                                        <input
                                            id="branchPan"
                                            name="branchPan"
                                            type="text"
                                            maxLength={10}
                                            value={formData.branchPan}
                                            onChange={handleChange}
                                            className="w-full bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        {/* DOB & GST NO */}
                        <div className="grid grid-cols-2 gap-6 mb-4">
                            <div className="flex flex-col">
                                <label htmlFor="dob" className="text-black text-sm font-medium mb-2">
                                    Date of Birth
                                </label>
                                <div className="flex items-center border-b">
                                    <input
                                        id="dob"
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-sm"
                                    />
                                </div>
                                {errors.dob &&
                                    <p className="text-red-500 text-xs">
                                        {errors.dob}
                                    </p>}
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="gstNo" className="text-black text-sm font-medium mb-2">
                                        GST NO.
                                    </label>
                                    <div className="flex itemscenter border-b">
                                        <input
                                            id="gstNo"
                                            name="gstNo"
                                            type="text"
                                            maxLength={15}
                                            value={formData.gstNo}
                                            onChange={handleChange}
                                            className="w-full bg-transparent outline-none  text-sm "
                                        />

                                    </div>
                                </div>

                                {errors.gstNo &&
                                    <p className="text-red-500 text-xs">
                                        {errors.gstNo}
                                    </p>}
                            </div>

                        </div>
                        {/* Email & Phone No */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-black text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <div className="flex items-center border-b ">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                {errors.email &&
                                    <p className="text-red-500 text-xs">
                                        {errors.email}
                                    </p>}
                            </div>

                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="mobileNo" className="text-black text-sm font-medium mb-2">
                                        Mobile No.
                                    </label>
                                    <div className="flex items-center border-b">
                                        <input
                                            id="mobileNo"
                                            name="mobileNo"
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            maxLength={10}
                                            value={formData.mobileNo}
                                            onChange={handleChange}
                                            className="w-full bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                {errors.mobileNo &&
                                    <p className="text-red-500 text-xs">
                                        {errors.mobileNo}
                                    </p>}
                            </div>

                        </div>

                    </div>
 {/* Address Details */}
                    <div className="bg-white rounded-xl p-6 mb-6">
                        <h3 className="text-[#AE4329] text-lg font-bold mb-3">
                            Address Details
                        </h3>
                        {/* Address */}
                        <div>
                            <div className="flex flex-col mb-4">

                                <label htmlFor="address" className="text-black text-sm font-medium mb-2">
                                    Address
                                </label>
                                <div className="flex items-center border-b">
                                    <input
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full bg-transparent outline-none text-sm "
                                    />
                                </div>
                            </div>

                            {errors.address &&
                                <p className="text-red-500 text-xs mb-4">
                                    {errors.address}
                                </p>}
                        </div>
                        {/* Pin Code & State */}
                        <div className="grid grid-cols-2 gap-6 mb-4">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="pinCode" className="text-black text-sm font-medium mb-2">
                                        Pincode
                                    </label>
                                    <div className="flex items-center border-b ">
                                        <input
                                            id="pinCode"
                                            name="pinCode"
                                            type="text"
                                            pattern="[0-9]{6}"
                                            maxLength={6}
                                            value={formData.pinCode}
                                            onChange={handleChange}
                                            className=" bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                {errors.pinCode &&
                                    <p className="text-red-500 text-xs">
                                        {errors.pinCode}
                                    </p>}
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="state" className="text-black text-sm font-medium mb-2">
                                        State
                                    </label>
                                    <div className="flex items-center border-b ">
                                        <input
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className=" bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                {errors.state &&
                                    <p className="text-red-500 text-xs">
                                        {errors.state}
                                    </p>}
                            </div>
                        </div>
                        {/* City & District */}
                        <div className="grid grid-cols-2 gap-6 mb-4">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="city" className="text-black text-sm font-medium mb-2">
                                        City
                                    </label>
                                    <div className="flex items-center border-b ">
                                        <input
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className=" bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                {errors.city &&
                                    <p className="text-red-500 text-xs">
                                        {errors.city}
                                    </p>}
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="district" className="text-black text-sm font-medium mb-2">
                                        District
                                    </label>
                                    <div className="flex items-center border-b ">
                                        <input
                                            id="district"
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            className=" bg-transparent outline-none  text-sm "
                                        />
                                    </div>
                                </div>
                                {errors.district &&
                                    <p className="text-red-500 text-xs">
                                        {errors.district}
                                    </p>}
                            </div>

                        </div>
                        {/* checkboxes */}
                        <div className="text-xs text-red-600 space-y-2">

                            <label className="flex items-center font-semibold">
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                I have read & agree to Terms and Conditions*
                            </label>
                            {errors.agreeTerms && (
                                <p className="ml-6 text-red-500 text-xs ">
                                    {errors.agreeTerms}
                                </p>
                            )}

                            <label className="flex items-center font-semibold">
                                <input
                                    type="checkbox"
                                    name="ageConfirmed"
                                    checked={formData.ageConfirmed}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                I am atleast 18 years old (21 years in case of domicile being Maharashtra) and citizen of India
                            </label>
                            {errors.ageConfirmed && (
                                <p className="ml-6 text-red-500 text-xs ">
                                    {errors.ageConfirmed}
                                </p>
                            )}

                        </div>

                    </div>

                    {/* submit */}
                    <div className="text-center">

                        <button
                            type="submit"
                            className={`px-14 py-2 rounded text-white mb-4 ${formData.agreeTerms && formData.ageConfirmed
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-gray-400 cursor-not-allowed"
                                }`}
                            disabled={!(formData.agreeTerms && formData.ageConfirmed)}
                        >
                            Submit
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Signup;