import { useEffect, useState } from "react";
import Loading from "../../Loading";
import { client, urlFor } from "../../client";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Welcome = () => {
  const [welcome, setWelcome] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "landing"]';
      const data = await client.fetch(query);
      setWelcome(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-neutral-900 flex items-center justify-center">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="p-0 md:p-20 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-3/6 ">
          <img
            src={urlFor(welcome[0].image)}
            className="object-fill h-full w-full hidden md:block"
          />
        </div>
        <div className="w-full md:w-4/6 p-8 flex justify-center items-center">
          <div>
            <span className="text-neutral-100 md:text-xl font-semibold text-md">
              Welcome to
              <span className="ml-2 text-yellow-600 text-2xl">
                Jireh Koinonia
              </span>
            </span>
            <h2 className="mt-2 text-neutral-100 md:text-3xl font-extrabold text-3xl">
              {welcome[0].title}
            </h2>
            <p className="mt-2 text-neutral-100 md:text-md text-md">
              {welcome[0].description}
            </p>
            <NavLink
              onClick={scrollToTop}
              to="/about"
              className="flex items-center justify-center mt-4 h-14 w-44 rounded-lg bg-yellow-600 hover:bg-yellow-500 hover:scale-90 text-white transition-all duration-300">
              About Us
              <div className="ml-2">
                <BsArrowRightShort className="text-3xl transition-transform duration-300 transform-gpu" />
              </div>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
