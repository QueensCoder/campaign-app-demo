import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">Campaign-Demo</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#features">
              <p className="text-gray-700 hover:text-blue-600">Features</p>
            </Link>
            <Link href="#testimonials">
              <p className="text-gray-700 hover:text-blue-600">Testimonials</p>
            </Link>
            <Link href="#contact">
              <p className="text-gray-700 hover:text-blue-600">Contact</p>
            </Link>
          </div>
          <button className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>
    </nav>
  );
};

export default Navbar;
