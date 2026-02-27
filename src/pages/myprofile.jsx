import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function MyProfileView() {
  const [editMode, setEditMode] = useState(false);

  const [address, setAddress] = useState({
    address: "B-28, Bussa Society, Dahej By Road, Bharuch",
    state: "Gujarat",
    city: "Bharuch",
    district: "Bharuch",
    pincode: "392001",
  });

  const [tempAddress, setTempAddress] = useState(address);

  const handleEdit = () => {
    setTempAddress(address);
    setEditMode(true);
  };

  const handleChange = (e) => {
    setTempAddress({
      ...tempAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setAddress(tempAddress);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleUpdate = () => {
    alert("Profile updated successfully!");
    window.location.reload(); 
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        <Navbar />

        {/* Page Title */}
        <div className="text-center mt-6">
          <h1 className="text-2xl font-bold text-[#B0422E]">
            My Profile
          </h1>
        </div>

        <div className="p-6 space-y-6">

          {/* USER CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-blue-700 text-lg font-bold">
              Natasha Khaleira
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Gujarat, India
            </p>
          </div>

          {/* PERSONAL INFO */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-blue-700 text-lg font-bold mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-3 gap-y-6">
              <Info label="First Name" value="Natashia" />
              <Info label="Last Name" value="Khaleira" />
              <Info label="Date of Birth" value="12-10-1990" />
              <Info label="Email Address" value="info@binary-fusion.com" />
              <Info label="Phone Number" value="(+91) 94094 11724" />
              <Info label="Gender" value="Male" />
            </div>
          </div>

          {/* SHIPPING ADDRESS */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-blue-700 text-lg font-bold">
                Shipping Address
              </h2>

              {!editMode ? (
                <button
                  onClick={handleEdit}
                  className="bg-[#B0422E] hover:bg-[#B0422E] text-white px-5 py-2 rounded-md text-sm"
                >
                  ✎ Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-5 gap-y-6">

              {/* Address */}
              <Field
                label="Address"
                name="address"
                value={tempAddress.address}
                editMode={editMode}
                onChange={handleChange}
                colSpan="col-span-2"
              />

              <Field
                label="State"
                name="state"
                value={tempAddress.state}
                editMode={editMode}
                onChange={handleChange}
              />

              <Field
                label="City"
                name="city"
                value={tempAddress.city}
                editMode={editMode}
                onChange={handleChange}
              />

              <Field
                label="District"
                name="district"
                value={tempAddress.district}
                editMode={editMode}
                onChange={handleChange}
              />

              <Field
                label="Pincode"
                name="pincode"
                value={tempAddress.pincode}
                editMode={editMode}
                onChange={handleChange}
              />

            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleUpdate}
              className="bg-[#B0422E] hover:bg-red-800 text-white px-8 py-2 rounded-md text-sm"
            >
              Update
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/* Reusable display component */
function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

/* Editable field component */
function Field({ label, name, value, editMode, onChange, colSpan }) {
  return (
    <div className={colSpan}>
      <p className="text-gray-500 text-sm">{label}</p>

      {editMode ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded px-3 py-1 mt-1"
        />
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  );
}