import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { useEffect, useState } from "react";
import churchB from "../assets/churchB.png";
import churchW from "../assets/churchW.png";
import { NavLink } from "react-router-dom";
import NavLinks from "./Navlinks";

import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [logo, setLogo] = useState(churchW);

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll behavior
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg("bg-slate-50");
        setLogo(churchB);
      } else {
        setNavbarBg("bg-transparent");
        setLogo(churchW);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-40 fixed top-0 flex items-center justify-center w-full shadow ${navbarBg} transition-colors duration-500 ease-in-out`}>
      <div className="w-11/12  flex justify-between">
        <NavLink to="/" onClick={handleNavLinkClick}>
          <img src={logo} className="h-16 p-2" />
        </NavLink>
        <div className="flex justify-end items-center">
          <button
            className="text-white h-10 bg-slate-300 hover:bg-slate-200 font-medium rounded-md px-5 py-2.5 md:hidden"
            onClick={openSidebar}>
            <FaBars />
          </button>
          <div className="flex justify-center items-center ">
            <NavLinks />
          </div>
        </div>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
