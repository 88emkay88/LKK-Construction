import React from 'react'
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';


const TopBanner = () => {
  return (
    <div className="text-black hidden md:flex justify-center space-x-40 px-15 py-5 border-b-2 transition duration-500">
      <div className="flex space-x-2 items-center">
        <FaPhoneAlt />
        <a className="hover:text-amber-900 cursor-pointer">065 860 6090</a>
      </div>

      <div className="flex space-x-2 items-center">
        <IoMdMail />
        <a className="hover:text-amber-900 cursor-pointer">
          kagisokgosana99@gmail.com
        </a>
      </div>

      <div className="flex">
        <ul className="flex space-x-2 items-center">
          <a href="#">
            <FaFacebook size={25} className="hover:text-amber-800" />
          </a>
          <a href="#">
            <BiLogoInstagramAlt size={25} className="hover:text-amber-800" />
          </a>
          <a href="#">
            <FaSquareXTwitter size={25} className="hover:text-amber-800" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default TopBanner