import React from "react";

const Header = () => {
  return (
    <div className="border-b border-white w-screen">
      <header className="flex justify-between items-center py-5 px-5 lg:px-20 bg-amber-900">
        {/* Logo */}
        <div className="flex flex-col items-center text-amber-100 font-semibold md:font-bold tracking-wide">
          <span className="text-xs md:text-sm tracking-widest">LKK</span>
          <img
            src="/public/Elephant_Head.svg"
            alt="Elephant Head Logo"
            height={10}
            width={50}
          />
          <span className="text-xs md:text-sm">CONSTRUCTION AND MAINTENANCE</span>
        </div>

        <div className="flex items-center space-x-7">
          <nav className="hidden md:flex space-x-4 text-lg font-bold text-amber-100 trasnition duration-500">
            <a href="#" className="hover:text-amber-600 hover:underline">
              Home
            </a>
            <a href="#about" className="hover:text-amber-600 hover:underline">
              About
            </a>
            <a
              href="#services"
              className="hover:text-amber-600 hover:underline"
            >
              Services
            </a>
            <a href="#contact" className="hover:text-amber-600 hover:underline">
              contact
            </a>
          </nav>

          <a className="bg-amber-400 hover:bg-yellow-400 cursor-pointer text-amber-100 rounded-xl py-2 px-2 lg:px-12" href="#contact">
            Hire Us
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
