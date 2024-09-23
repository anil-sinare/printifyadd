import React, { useState } from "react";
import logo_1 from "../assets/printify-logo.webp";
import logo_2 from "../assets/images.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="w-36  hidden sm:flex" src={logo_1} />
            <img className="w-16 sm:hidden" src={logo_2} />
          </div>

          <div className=" flex flex-row">
            <div className="hidden md:flex space-x-5 items-center">
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                Catalog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                How it works <i class="fa-solid fa-caret-down"></i>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                Services <i class="fa-solid fa-caret-down"></i>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                Use-cases <i class="fa-solid fa-caret-down"></i>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 px-1 py-2 rounded-md text-sm font-medium"
              >
                Need help? <i class="fa-solid fa-caret-down"></i>
              </a>
            </div>

            <div className="flex space-x-4 m-4 items-center ">
              <a
                href="/login"
                className="  border px-[20px] py-[7px] text-gray-700 hover:text-green-600   rounded-md text-sm font-medium"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="bg-green-600 text-white px-[20px] py-[7px] rounded-md text-sm font-medium hover:bg-green-500"
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-700 hover:text-green-600    block px-3 py-2 rounded-md text-base font-medium"
            >
              Catalog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600  block px-3 py-2 rounded-md text-base font-medium"
            >
              How it works
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600  block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600  block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600  block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600  block px-3 py-2 rounded-md text-base font-medium"
            >
              Use-cases
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600  block px-3 py-2 rounded-md text-base font-medium"
            >
              Need help?
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
