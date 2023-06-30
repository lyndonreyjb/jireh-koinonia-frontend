import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    toggleAboutDropdown,
    aboutDropdownOpen,
  } = useGlobalContext();

  return (
    <aside
      className={
        isSidebarOpen
          ? "fixed top-0 right-0 w-5/6 h-full bg-gradient-to-r from-slate-200 to-slate-300 transform translate-x-0 transition-transform duration-300 md:hidden block"
          : "fixed top-0 right-0 w-5/6 h-full bg-gradient-to-r from-slate-200 to-slate-300 transform translate-x-full transition-transform duration-300 md:hidden block"
      }>
      <div className="p-10 md:p-8 relative text-xl uppercase ">
        <button
          onClick={closeSidebar}
          className="text-3xl absolute top-4 right-4 cursor-pointer">
          <FaTimes />
        </button>
        <div className="flex flex-col ">
          <NavLink
            className="p-1 hover:pl-4 transition-all duration-300"
            to="/">
            Home
          </NavLink>
          <NavLink
            className="p-1 hover:pl-4 transition-all duration-300"
            to="/connect">
            Connect
          </NavLink>
          <NavLink
            className="p-1 hover:pl-4 transition-all duration-300"
            to="/contact">
            Contact
          </NavLink>
          <div className="p-1">
            <button
              className="flex items-center w-full"
              onClick={toggleAboutDropdown}>
              <span className="mr-2 uppercase">About</span>
              {aboutDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {aboutDropdownOpen && (
              <div className="pl-5">
                {" "}
                <div className="mt-2">
                  <NavLink
                    to="/about/who-we-are"
                    className="block p-1 hover:pl-4 transition-all duration-300">
                    Who We Are
                  </NavLink>
                  <NavLink
                    to="/about/what-we-believe"
                    className="block p-1 hover:pl-4 transition-all duration-300">
                    What We Believe
                  </NavLink>
                  <NavLink
                    to="/about/our-location"
                    className="block p-1 hover:pl-4 transition-all duration-300">
                    Our Location
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
