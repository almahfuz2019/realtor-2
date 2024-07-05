"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" bg-transparent relative z-10 ">
      <div className="navbar   z-50 text-secondary max-w-[1420px] mx-auto pt-5 font-montserrat px-4">
        <div className="navbar-start">
          <a href="#home">
            <Image
              className="hidden md:block"
              height="72"
              width="116"
              src="https://i.ibb.co/jTPYyhs/Group-162-1.png"
              alt="Tech Plato Logo"
            />
            <Image
              height="36"
              width="58"
              className="block md:hidden"
              src="https://i.ibb.co/R776pwf/Group-192.png"
              alt="Tech Plato Logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              "Home",
              "About Me",
              "Services",
              "Listing",
              "Guideline",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-secondary text-2xl font-medium "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/RcgMwDm/Frame-456.png"
                  height="32"
                  width="32"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/NS9qWnT/Frame-457.png"
                  height="32"
                  width="32"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-xl">
                <Image
                  src="https://i.ibb.co/zs4RCS5/Frame-458.png"
                  height="32"
                  width="32"
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <div
              className="dropdown dropdown-end bg-[#e6e6e6] shadow rounded-md"
              ref={menuRef}
            >
              <button
                className=" bg-[#e6e6e6] p-2 focus:outline-none rounded-xl focus:shadow-outline"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 sm:w-10 h-6 sm:h-10"
                >
                  <path
                    className={!menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    className={menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {menuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md rounded-box w-52 sm:w-60  bg-[#e6e6e6] "
                >
                  {[
                    "Home",
                    "About Me",
                    "Services",
                    "Listing",
                    "Guideline",
                    "Contact",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-secondary text-xl sm:text-3xl sm:mt-3 mt-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
