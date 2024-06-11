"use client";
import { useState } from "react";
import Link from "next/link";
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-white text-2xl font-bold">
          Quiz App
        </Link>
        <div className="hidden md:flex space-x-4 flex-row items-center justify-center">
          <Link href="#" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Co
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Link href="#" className="block text-gray-300 hover:text-white p-2">
          Home
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white p-2">
          About
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white p-2">
          Services
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white p-2">
          C
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
