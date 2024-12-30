import React, { useEffect, useState } from "react";
import Navbar from '../NavBar/NavBar'; // Import the Navbar component

const DisplayPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // Simulate fetching data from a backend
    console.log("Fetching user data...");
    const mockData = [
      {
        name: "John Doe",
        college: "Example University",
        passOutYear: "2020",
        experience: "2 years",
        jobDescription: "Frontend Developer",
        profileImage: null,
      },
      {
        name: "Jane Smith",
        college: "Sample Institute",
        passOutYear: "2018",
        experience: "4 years",
        jobDescription: "Backend Developer",
        profileImage: null,
      },
    ];
    setUsers(mockData);
  };

  useEffect(() => {
    fetchUsers(); // Replace with actual API call later
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex flex-col">
      <Navbar /> {/* Add the Navbar component here */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          User Information
        </h1>
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((user, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {user.profileImage ? (
                    <img
                      src={URL.createObjectURL(user.profileImage)}
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
                  <span className="font-medium">Experience:</span>{" "}
                  {user.experience}
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

export default DisplayPage;