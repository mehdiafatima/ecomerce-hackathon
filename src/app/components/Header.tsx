"use client"
import { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          {/* Logo Image */}
          <Image
            src="/logo.png" // Replace with the actual path to your logo image
            alt="Furniro Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          {/* Logo Text */}
          <span className="text-xl font-bold text-black">Furniro</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 gap-8">
          <a href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </a>
          <a href="/shop" className="text-gray-700 hover:text-black font-medium">
            Shop
          </a>
          <a href="/blog" className="text-gray-700 hover:text-black font-medium">
            Blog
          </a>
          <a href="/contact" className="text-gray-700 hover:text-black font-medium">
            Contact
          </a>
        </nav>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex space-x-4 text-gray-600 gap-3">
          <Link href="/login">
            <FaUser className="text-lg hover:text-black cursor-pointer" />
          </Link>
          <FaSearch className="text-lg hover:text-black cursor-pointer" />
          <FaHeart className="text-lg hover:text-black cursor-pointer" />
          <Link href="/cartpage"><FaShoppingCart className="text-lg hover:text-black cursor-pointer" /></Link>
        </div>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <nav className="flex flex-col items-center py-4">
          <a href="/" className="py-2 text-gray-700 hover:text-black font-medium">
            Home
          </a>
          <a href="/shop" className="py-2 text-gray-700 hover:text-black font-medium">
            Shop
          </a>
          <a href="/blog" className="py-2 text-gray-700 hover:text-black font-medium">
            Blog
          </a>
          <a href="/contact" className="py-2 text-gray-700 hover:text-black font-medium">
            Contact
          </a>
          <div className="flex justify-center space-x-4 mt-4 text-gray-600 gap-3">
            
           <Link href="/login"> <FaUser className="text-lg hover:text-black cursor-pointer" /></Link>  
          
            <FaSearch className="text-lg hover:text-black cursor-pointer" />
            <FaHeart className="text-lg hover:text-black cursor-pointer" />
            <Link href="/cartpage"><FaShoppingCart className="text-lg hover:text-black cursor-pointer" />  </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
