import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import church from "../assets/church.png";
import NavLinks from "./Navlinks";

import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="z-40 fixed top-0 flex items-center justify-center w-full bg-white shadow">
      <div className="w-11/12  flex justify-between">
        <img src={church} className="h-20 p-2" />
        <div className="flex justify-center items-center ">
          <NavLinks />
        </div>
        <div className="flex justify-end items-center">
          <button
            className="text-white h-10 bg-slate-300 hover:bg-slate-200 font-medium rounded-md px-5 py-2.5 md:hidden"
            onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
