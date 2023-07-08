import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <Outlet />
      </main>

      <ScrollToTop
        smooth
        component={
          <div className="flex justify-center items-center text-yellow-600 font-bold text-2xl h-10 w-10">
            <FaArrowUp />
          </div>
        }
      />

      <footer className="mt-auto  text-center text-neutral-600 bg-neutral-900 dark:text-neutral-200 lg:text-left">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
