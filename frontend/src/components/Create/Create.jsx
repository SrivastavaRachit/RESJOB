import React, { useState } from "react";
import Navbar from '../NavBar/NavBar';
import axios from "axios";


const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    passOutYear: "",
    experience: "",
    jobDescription: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const submitData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("college", data.college);
      formData.append("passOutYear", data.passOutYear);
      formData.append("jobDescription", data.jobDescription);
      if (data.profileImage) {
        formData.append("profileImage", data.profileImage);
      }
  
      const response = await axios.post("http://localhost:4000/api/form/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitData(formData); // Replace with actual API call later
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
          <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            User Information Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  College Name
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter your college name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Pass Out Year
                </label>
                <input
                  type="number"
                  name="passOutYear"
                  value={formData.passOutYear}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter pass-out year"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Job Description
              </label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your job description"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Profile Image
              </label>
              <input
                type="file"
                name="profileImage"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPage;