import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import api from "../api/axios";

export default function MyProfileView() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    address: user?.address || "",
    state: user?.state || "",
    city: user?.city || "",
    district: user?.district || "",
    pin_code: user?.pin_code || "",
  });

  const fullName = user?.fullname?.trim() || "";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setFormData({
      address: user?.address || "",
      state: user?.state || "",
      city: user?.city || "",
      district: user?.district || "",
      pin_code: user?.pin_code || "",
    });
    setEditMode(false);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    if (!formData.pin_code) {
      alert("Pincode is required");
      return;
    }

    try {
      const response = await api.put(
        `/update-profile/${user.id}`,
        formData
      );
      alert("Profile updated successfully!");

      localStorage.setItem("user", JSON.stringify(response.data.data));

      setEditMode(false);
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Update failed");
    }
    window.location.reload();
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="text-center mt-6">
          <h1 className="text-2xl font-bold text-[#B0422E]">
            My Profile
          </h1>
        </div>

        <div className="p-6 space-y-6">

          {/* USER CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-blue-700 text-lg font-bold">
              {user?.fullname}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {user?.state}, India
            </p>
          </div>

          {/* PERSONAL INFO */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-blue-700 text-lg font-bold mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-3 gap-y-6">
              <Info label="First Name" value={firstName} />
              <Info label="Last Name" value={lastName} />
              <Info label="Date of Birth" value={user?.dob} />
              <Info label="Email Address" value={user?.email} />
              <Info label="Phone Number" value={`+91 ${user?.mobile_no}`} />
              {/* <Info label="Gender" value="Male" /> */}
              <Info label="GST NO" value={user?.gst_no} />
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
                  className="bg-[#B0422E] text-white px-5 py-2 rounded-md text-sm"
                >
                  ✎ Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-6 gap-y-6">

              <Field
                label="Address"
                name="address"
                value={editMode ? formData.address : user?.address}
                editMode={editMode}
                onChange={handleChange}
                colSpan="col-span-2"
              />

              <Field
                label="State"
                name="state"
                value={editMode ? formData.state : user?.state}
                editMode={editMode}
                onChange={handleChange}
              />

              <Field
                label="City"
                name="city"
                value={editMode ? formData.city : user?.city}
                editMode={editMode}
                onChange={handleChange}
              />

              <Field
                label="District"
                name="district"
                value={editMode ? formData.district : user?.district}
                editMode={editMode}
                onChange={handleChange}
              />

              <Field
                label="Pincode"
                name="pin_code"
                value={editMode ? formData.pin_code : user?.pin_code}
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

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

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