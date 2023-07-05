import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <footer className="mt-auto text-center text-neutral-600 bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
