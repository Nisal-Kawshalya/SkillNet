import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RTopNavbar3() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-4 md:px-8 flex items-center justify-between relative">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
        </li>
        <li>
          <a href="/StudentConnect" className="hover:text-indigo-600">
            Request
          </a>
        </li>
        <li>
          <a href="/GroupChat" className="hover:text-indigo-600">
            Groups
          </a>
        </li>
        <li>
          <a href="/SelectTeacher" className="hover:text-indigo-600">
            Teach & Learn
          </a>
        </li>
        <li>
          <a href="/Settings" className="hover:text-indigo-600">
            Settings
          </a>
        </li>
      </ul>
      {/* Custom Right Section */}
      <div className="flex items-center gap-4 ml-4">
        {/* User Avatar */}
        <Link
          to="/Profile"
          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
        >
          <img
            src="https://randomuser.me/api/portraits/men/14.jpg"
            alt="Jane Doe"
            className="h-8 w-8 rounded-full object-cover border-2 border-white shadow"
          />
          <span className="font-medium text-gray-700">Jane Doe</span>
        </Link>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center p-2 text-indigo-700 focus:outline-none"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-4 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium w-full items-center">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-600 w-full block text-center"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/StudentConnect"
                className="hover:text-indigo-600 w-full block text-center"
              >
                Request
              </a>
            </li>
            <li>
              <a
                href="/GroupChat"
                className="hover:text-indigo-600 w-full block text-center"
              >
                Groups
              </a>
            </li>
            <li>
              <a href="/SelectTeacher" className="hover:text-indigo-600">
                Teach & Learn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-600 w-full block text-center"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
