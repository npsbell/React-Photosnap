import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State สำหรับจัดการหัวข้อที่ open/close small navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [active, setActive] = useState(""); // State สำหรับจัดการหัวข้อที่ active

  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false) //ปิดที่ navbar อัตโนมัติเมื่อคลิกที่หัวข้อ
  };

  return (
    <div className="flex justify-between align-center px-10 lg:px-20 w-screen h-20 fixed top-0 z-50 bg-white bg-opacity-95">
      {/* Logo */}
      <Link to="/" className="self-center">
        <img src={logo} alt="" />
      </Link>
      {/* ------------------md:bar--------------- */}
      <div className="self-center lg:gap-10 md:gap-5 tracking-widest hidden md:flex">
        <Link
          to="/stories"
          className="transform duration-300 ease-in-out hover:text-gray-300"
        >
          <button
            onClick={() => handleClick("stories")}
            className={`pb-2 px-2 ${
              active === "stories" ? "border-b-2 border-gray-300" : ""
            }`}
          >
            STORIES
          </button>
        </Link>
        <Link
          to="/features"
          className="transform duration-300 ease-in-out hover:text-gray-300"
        >
          <button
            onClick={() => handleClick("features")}
            className={`pb-2 px-2 ${
              active === "features" ? "border-b-2 border-gray-300" : ""
            }`}
          >
            FEATURES
          </button>
        </Link>
        <Link
          to="/pricing"
          className="transform duration-300 ease-in-out hover:text-gray-300 "
        >
          <button
            onClick={() => handleClick("pricing")}
            className={`pb-2 px-2 ${
              active === "pricing" ? "border-b-2 border-gray-300" : ""
            }`}
          >
            PRICING
          </button>
        </Link>
      </div>
      <button className="hidden md:block self-center bg-black text-white md:px-5 lg:px-10 py-3 tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
        GET AN INVITE
      </button>

      {/* ------------------sm:bar--------------- */}
      {/* Hamburger Button */}
      <div className="flex justify-center items-center md:hidden">
        <button
          className="flex flex-col justify-between items-center w-8 h-[14px]"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-black transform transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu */}
      {/* Popup Menu */}
      <div
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-96"
        } absolute top-20 px-10 left-0 w-full bg-white shadow-lg md:hidden transform transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col items-center gap-5 py-4">
          <Link
            to="/stories"
            className="transform duration-300 ease-in-out hover:text-gray-300 tracking-widest"
          >
            <button
              onClick={() => handleClick("stories")}
              className={`pb-2 px-2 ${
                active === "stories" ? "border-b-2 border-gray-300" : ""
              }`}
            >
              STORIES
            </button>
          </Link>
          <Link
            to="/features"
            className="transform duration-300 ease-in-out hover:text-gray-300 tracking-widest"
          >
            <button
              onClick={() => handleClick("features")}
              className={`pb-2 px-2 ${
                active === "features" ? "border-b-2 border-gray-300" : ""
              }`}
            >
              FEATURES
            </button>
          </Link>
          <Link
            to="/pricing"
            className="transform duration-300 ease-in-out hover:text-gray-300 tracking-widest"
          >
            <button
              onClick={() => handleClick("pricing")}
              className={`pb-2 px-2 ${
                active === "pricing" ? "border-b-2 border-gray-300" : ""
              }`}
            >
              PRICING
            </button>
          </Link>

          <button className="w-full self-center bg-black text-white py-3 tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
            GET AN INVITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [active, setActive] = useState(''); // State สำหรับจัดการหัวข้อที่ active

//   const handleClick = (item) => {
//     setActive(item);
//   };

//   return (
//     <nav className="flex justify-between items-center bg-white p-4 shadow-md">
//       <div className="text-lg font-bold">LOGO</div>
//       <ul className="flex space-x-4">
//         <li className="relative">
//           <button
//             onClick={() => handleClick('stories')}
//             className={`pb-2 ${
//               active === 'stories' ? 'font-bold text-black' : 'text-gray-500'
//             }`}
//           >
//             Stories
//           </button>
//           {/* ขีดล่าง */}
//           {active === 'stories' && (
//             <div className="absolute left-0 right-0 h-1 bg-black"></div>
//           )}
//         </li>
//         <li className="relative">
//           <button
//             onClick={() => handleClick('features')}
//             className={`pb-2 ${
//               active === 'features' ? 'font-bold text-black' : 'text-gray-500'
//             }`}
//           >
//             Features
//           </button>
//           {/* ขีดล่าง */}
//           {active === 'features' && (
//             <div className="absolute left-0 right-0 h-1 bg-black"></div>
//           )}
//         </li>
//         <li className="relative">
//           <button
//             onClick={() => handleClick('pricing')}
//             className={`pb-2 ${
//               active === 'pricing' ? 'font-bold text-black' : 'text-gray-500'
//             }`}
//           >
//             Pricing
//           </button>
//           {/* ขีดล่าง */}
//           {active === 'pricing' && (
//             <div className="absolute left-0 right-0 h-1 bg-black"></div>
//           )}
//         </li>
//         <li className="relative">
//           <button
//             onClick={() => handleClick('invite')}
//             className={`pb-2 ${
//               active === 'invite' ? 'font-bold text-black' : 'text-gray-500'
//             }`}
//           >
//             Get an Invite
//           </button>
//           {/* ขีดล่าง */}
//           {active === 'invite' && (
//             <div className="absolute left-0 right-0 h-1 bg-black"></div>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
