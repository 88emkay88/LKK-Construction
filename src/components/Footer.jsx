import React from 'react'

const Footer = () => {
  return (
    <div className="bg-amber-300 px-10 md:px-20 pt-5">
      <div className="md:grid grid-cols-2 space-y-4 md:space-y-0">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-amber-800 font-bold tracking-wide">
            <span className="text-xs md:text-sm tracking-widest">LKK</span>
            <img
              src="/public/Elephant_Head.svg"
              alt="Elephant Head Logo"
              height={10}
              width={50}
            />
            <span className="text-xs md:text-sm w-200px">
              CONSTRUCTION AND MAINTENANCE
            </span>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl bg-gradient-to-tr from-yellow-600 via-amber-700 to-amber-900 text-transparent bg-clip-text font-bold">
            Navigation
          </h1>

          <nav className="flex w-1/3 flex-col space-x-4 text-sm md:text-lg font-bold text-amber-800 trasnition duration-500 mb-8">
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
        </div>
      </div>

      <div className="text-amber-900 text-sm">
        <h1 className="text-lg md:text-2xl bg-gradient-to-tr from-yellow-600 via-amber-700 to-amber-900 text-transparent bg-clip-text font-bold">
          Contact
        </h1>
        <p> 51 STARFLOWER STREET</p>
        <p>RIVERSIDE VIEW FOURWAYS</p>
        <p>kagisokgosana99@gmail.com</p>
        <p>065 860 6090</p>
      </div>

      <div className="md:py-10 py-6 text-sm md:text-lg text-center mt-10 text-amber-800 border-t-1 border-amber-200">
        <p>© 2025 LKK CONSTRUCTION AND MAINTAINANCE (PTY) LTD</p>
      </div>
    </div>
  );
}

export default Footer;