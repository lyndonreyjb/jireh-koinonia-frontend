import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop
        smooth
        component={
          <div className="flex justify-center items-center text-yellow-600 font-bold text-2xl h-10 w-10">
            <FaArrowUp />
          </div>
        }
      />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
