import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const maincol = '#2685bd';

  return (
    <div className="flex justify-between text-white max-w-[1240px] mx-auto h-24 p-5">
      <h1 className={`w-full text-3xl font-bold text-[${maincol}]`}>SVEN</h1>

      <ul className="hidden md:flex">
        <li className="p-4 mx-6  hover:ease-in-out hover:duration-300 hover:text-[#2685bd]">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 mx-6 hover:ease-in-out hover:duration-300 hover:text-[#2685bd]">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 mx-6  hover:ease-in-out hover:duration-300 hover:text-[#2685bd]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-1000 z-20'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className={`w-full text-3xl font-bold text-[${maincol}] m-5`}>
          SVEN
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
