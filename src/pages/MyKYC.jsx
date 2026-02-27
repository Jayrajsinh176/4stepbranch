import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { FiUpload } from "react-icons/fi";
function MyKYC() {
    const [documentType, setDocumentType] = useState("");
    const [file, setFile] = useState(null);
    const [fileError, setFileError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!documentType || !file) {
            alert("Please select document type and upload file");
            return;
        }

        alert("KYC Submitted Successfully");
        window.location.reload();
    };

    return (
        <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex-1 min-w-0 flex flex-col">
                <Navbar />

                <div className="text-center mt-6">
                    <h1 className="text-3xl font-bold text-[#B0422E]">
                        MY KYC
                    </h1>
                </div>
                <div className="p-6">
                    {/* Upload Card */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
                        <div className="bg-[#B0422E] text-white px-6 py-4">
                            <h2 className="font-semibold text-lg">
                                Upload your Authorized Person KYC Documents
                            </h2>
                            <p className="text-sm opacity-90">
                                Please update your valid KYC Documents
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6">

                            <div className="mb-6 flex items-center gap-6">

                                <label className="w-42 text-gray-700 font-medium items-start ">
                                    Select Document Type
                                </label>

                                <select
                                    value={documentType}
                                    onChange={(e) => setDocumentType(e.target.value)}
                                    className="flex-1 h-12 bg-gray-100 border border-gray-300 rounded-lg 
                                            px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                                >
                                    <option value="">Select document type</option>
                                    <option value="PAN CARD">PAN CARD</option>
                                    <option value="AADHAR CARD">AADHAR CARD</option>
                                    <option value="PASSPORT">PASSPORT</option>
                                    <option value="DRIVING LICENSE">DRIVING LICENSE</option>
                                </select>

                            </div>
                            <hr className="mb-6 border-gray-300 border border-dashed" />
                            {/* Upload File */}

                            <div className="mb-6">

                                <label className="block text-gray-700 font-medium mb-3">
                                    Upload Document :
                                </label>

                                <div className="flex  gap-3 mt-2">

                                    <label className="flex items-center gap-2 w-fit px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                                        <FiUpload className="h-5 w-5 text-gray-600" />
                                        Choose File
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/png, image/jpeg, image/jpg, image/gif"
                                            onChange={(e) => {
                                                const selectedFile = e.target.files[0];
                                                const maxSize = 2 * 1024 * 1024;

                                                if (selectedFile) {
                                                    if (selectedFile.size > maxSize) {
                                                        setFileError("File size must be less than 2MB");
                                                        setFile(null);
                                                        e.target.value = null;
                                                        return;
                                                    }

                                                    setFileError("");
                                                    setFile(selectedFile);
                                                }
                                            }}
                                        />
                                    </label>
                                    {file && (
                                        <p className="text-green-600 text-sm mt-2">
                                            File Name: <span className="font-medium">{file.name}</span>
                                        </p>
                                    )}
                                    {fileError && (
                                        <p className="text-red-500 text-sm mt-2">{fileError}</p>
                                    )}
                                </div>
                                <span className=" flex-1text-gray-500 text-sm inline mt-2">
                                    Max. file size allowed : 2 MB | Only upload image JPG/PNG/GIF
                                </span>
                            </div>
                            <hr className="mb-6 border-gray-300 border" />
                            <button
                                type="submit"
                                className="bg-[#B0422E] text-white px-8 py-2 rounded-lg shadow hover:bg-red-800"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Table Card */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                            <div className="grid grid-cols-5 bg-[#B0422E] text-white font-medium text-center py-3">

                                <div>Sr No</div>
                                <div>Upload date</div>
                                <div>Title</div>
                                <div>View Document</div>
                                <div>Status</div>

                            </div>
                            <div className="grid grid-cols-5 text-center py-4 text-black font-medium border-t">
                                <div>01</div>
                                <div>17-02-2026</div>
                                <div>PAN CARD</div>
                                <div>
                                    <a href="#" className="text-blue-600 hover:underline">
                                        IMG_2026_1243.jpg
                                    </a>
                                </div>

                                <div className="text-gray-600">
                                    Pending
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default MyKYC;