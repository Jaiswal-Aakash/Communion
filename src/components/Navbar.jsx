import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Dummy Authentication Check
  const isAuthenticated = true;

  const handleCreateEvent = () => {
    if (isAuthenticated) {
      navigate("/create-event");
    } else {
      navigate("/login");
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle window resize to toggle mobile mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center sticky top-0 z-50 justify-between px-12 py-4 bg-white">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            alt="Logo"
            className="h-8 cursor-pointer"
          />
        </Link>

        {/* Hamburger Menu (Shown only on mobile) */}
        {isMobile ? (
          <button className="text-2xl" onClick={() => setIsSidebarOpen(true)}>
            <IoMenu />
          </button>
        ) : (
          /* Desktop Navigation */
          <div className="flex space-x-10 text-gray-800 font-medium">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-blue-600 focus:outline-none"
              >
                Events <span className="ml-1">›</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute -right-20 mt-2 w-48 bg-white rounded-md overflow-hidden border py-2 shadow-lg">
                  <Link
                    to="/upcoming-events"
                    className="block px-4 py-2 hover:bg-gray-100 font-normal hover:text-blue-600 border-b border-gray-200"
                  >
                    Upcoming Events
                  </Link>
                  <button
                    onClick={handleCreateEvent}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 font-normal hover:text-blue-600"
                  >
                    Create Event
                  </button>
                </div>
              )}
            </div>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </div>
        )}
      </nav>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform p-6 shadow-lg z-50`}
      >
        {/* Close Button */}
        <button
          className="text-2xl absolute top-4 right-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <IoClose />
        </button>

        {/* Sidebar Links */}
        <nav className="mt-10 space-y-6 text-lg">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/communities" className="block">
            Communities
          </Link>
          <Link to="/events" className="block">
            Events
          </Link>
          <Link to="/leaders" className="block text-blue-600">
            Leaders
          </Link>
          <Link to="/support" className="block">
            Support
          </Link>
        </nav>

        {/* Sign In Button */}
        <button className="w-full bg-gray-900 text-white py-3 mt-8 rounded-md">
          Sign in
        </button>
      </aside>
    </>
  );
};

export default Navbar;
