import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [toggle, setToggle] = useState(false); // For mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown toggle

  return (
    <div className="p-4 bg-white">
      <div className="max-w-[1240px] py-[12px] flex items-center justify-between mx-auto">
        {/* Logo Section */}
        <div className="border-2 p-3 border-black text-2xl md:text-4xl lg:text-5xl rounded-bl-[71px] font-bold">
          tranch
        </div>

        {/* Spacer */}
        <div className="hidden sm:block w-10 lg:w-16"></div>

        {/* Menu Icon for Mobile */}
        {!toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(true)}
            className="text-3xl sm:hidden block cursor-pointer"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(false)}
            className="text-3xl sm:hidden block cursor-pointer"
          />
        )}

        {/* Navigation Links for Desktop */}
        <ul className="font-bold hidden sm:flex gap-6 md:gap-10 lg:gap-12">
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:underline flex items-center gap-1 text-sm md:text-base lg:text-lg"
            >
              Products <IoIosArrowDown className="text-white text-xl" />
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white text-black rounded shadow-lg mt-2 p-2 w-[150px]">
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Product 1
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Product 2
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Product 3
                </li>
              </ul>
            )}
          </li>
          <li className="text-sm md:text-base lg:text-lg">Solutions</li>
          <li className="text-sm md:text-base lg:text-lg">Resources</li>
          <li className="text-sm md:text-base lg:text-lg">About Us</li>
        </ul>

        {/* Responsive Menu for Mobile */}
        <ul
          className={`bg-white font-bold text-lg sm:hidden w-full h-screen fixed top-[92px] z-50 ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-4">Products</li>
          <li className="p-4">Solutions</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About Us</li>
          <li className="absolute font-bold border border-black rounded-br-[20px] inset-x-0 text-lg p-3 bottom-[235px] h-12 text-center m-auto w-[90%]">
            Contact Sales
          </li>
          <button className="absolute font-bold border border-black rounded-tr-[20px] inset-x-0 text-lg p-3 bottom-[170px] h-12 text-center m-auto w-[90%]">
            Login
          </button>
        </ul>

        {/* Contact and Login */}
        <div className="font-bold p-3 hidden sm:flex gap-4 md:gap-6">
          <a href="" className="text-sm md:text-base lg:text-lg">
            Contact Sales
          </a>
          <button className="border-2 border-black rounded-tr-[16px] px-3 text-sm md:text-base lg:text-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
