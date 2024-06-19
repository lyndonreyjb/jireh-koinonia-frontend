import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const handleNavClick = () => {
    const scrollHeight = window.innerHeight * 0.6;
    window.scrollTo({
      top: scrollHeight,
      behavior: "instant",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:block hidden font-medium text-slate-100 uppercase ${
        isScrolled ? "text-slate-800" : ""
      }`}>
      <NavLink className="mr-4 nav-link" to="" onClick={handleNavLinkClick}>
        Home
      </NavLink>
      <div
        className="relative inline-block about-btn mr-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="flex items-center w-full">
          <NavLink
            to="/about"
            className={`mr-1 nav-link ${isScrolled ? "text-slate-800" : ""}`}
            onClick={handleNavLinkClick}>
            about
          </NavLink>
          <FaChevronDown />
        </div>

        {isOpen && (
          <div className="absolute w-56 top-12 mt-2 bg-white border border-gray-200 rounded-md shadow-md">
            <NavLink
              to="/about/who-we-are"
              className="block px-4 py-2 text-slate-800 hover:bg-gray-200 nav-link"
              onClick={handleNavClick}>
              Who We Are
            </NavLink>
            <NavLink
              to="/about/what-we-believe"
              className="block px-4 py-2 text-slate-800 hover:bg-gray-200 nav-link"
              onClick={handleNavClick}>
              What We Believe
            </NavLink>
            <NavLink
              to="/about/our-location"
              className="block px-4 py-2 text-slate-800 hover:bg-gray-200 nav-link"
              onClick={handleNavClick}>
              Our Location
            </NavLink>
          </div>
        )}
      </div>
      <NavLink
        className="mr-4 nav-link"
        to="/connect"
        onClick={handleNavLinkClick}>
        Connect
      </NavLink>
      {/* <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
        Contact
      </NavLink> */}
    </div>
  );
};

export default NavLinks;
