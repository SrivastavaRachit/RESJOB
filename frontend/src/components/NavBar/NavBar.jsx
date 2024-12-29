import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/path-to-your-logo.png"
                        alt="Logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-white font-bold text-xl">BrandName</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-white text-lg font-medium hover:text-yellow-300 ${isActive ? "border-b-2 border-yellow-300" : ""
                            }`
                        }
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/create"
                        className={({ isActive }) =>
                            `text-white text-lg font-medium hover:text-yellow-300 ${isActive ? "border-b-2 border-yellow-300" : ""
                            }`
                        }
                    >
                        CREATE
                    </NavLink>
                    <NavLink
                        to="/see"
                        className={({ isActive }) =>
                            `text-white text-lg font-medium hover:text-yellow-300 ${isActive ? "border-b-2 border-yellow-300" : ""
                            }`
                        }
                    >
                        SEE
                    </NavLink>
                </div>

                {/* Login Button */}
                <div>
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-indigo-700 font-semibold py-2 px-4 rounded-full transition duration-300">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
