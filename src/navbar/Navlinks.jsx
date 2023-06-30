import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:block hidden font-medium uppercase ">
      <NavLink className="mr-4" to="/">
        Home
      </NavLink>
      <NavLink className="mr-4" to="/connect">
        Connect
      </NavLink>
      <NavLink className="mr-4" to="/contact">
        Contact
      </NavLink>
      <div
        className="relative inline-block about-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="flex items-center w-full">
          <a className="mr-1">about</a>
          <FaChevronDown />
        </div>

        {isOpen && (
          <div className="absolute w-56 top-12  mt-2 bg-white border border-gray-200 rounded-md shadow-md">
            <NavLink
              to="/about/who-we-are"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Who We Are
            </NavLink>
            <NavLink
              to="/about/what-we-believe"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              What We Believe
            </NavLink>
            <NavLink
              to="/about/our-location"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Our Location
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
