import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../NavBar/NavBar';

const See = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
try {
  setLoading(true);
  const response = await axios.get("https://resjob-backend.onrender.com/api/form/all");
  setUsers(response.data);
} catch (err) {
  console.error("Error fetching users:", err.response?.data || err.message);
  setError("Failed to load user data. Please try again later.");
} finally {
  setLoading(false);
}

  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex flex-col">
      <Navbar /> {/* Add the Navbar component here */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          User Information
        </h1>
        {loading ? (
          <p className="text-gray-500 text-center mt-10">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center mt-10">{error}</p>
        ) : users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((user, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage} // Assuming the backend sends a URL
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                      No Image
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-gray-700">
                    {user.name}
                  </h2>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">College:</span> {user.college}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Pass Out Year:</span>{" "}
                  {user.passOutYear}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Job Description:</span>{" "}
                  {user.jobDescription}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No user data available. Please add users.
          </p>
        )}
      </div>
    </div>
  );
};

export default See;
