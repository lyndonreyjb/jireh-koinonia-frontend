import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { BsArrowRightShort } from "react-icons/bs";

const ConnectGroup = ({ header, urlFor }) => {
  const ministry = header;
  return (
    <div
      id="connect-group"
      className="bg-neutral-100  flex items-center justify-center">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="p-0 md:p-20 flex flex-col xl:flex-row h-full xl:w-5/6">
        <div className="w-full xl:w-3/6 xl:order-2">
          <img
            src={urlFor(ministry[0].image)}
            className="object-cover h-96 xl:h-full w-full"
          />
        </div>
        <div className="w-full text-neutral-900 xl:w-4/6 p-8 flex justify-center items-center md:order-1">
          <div>
            <h2 className="md:text-3xl font-extrabold text-yellow-600 text-3xl">
              {ministry[0].title}
            </h2>
            <p className="mt-4 md:text-md text-md">{ministry[0].description}</p>
            <HashLink
              to="/contact#get-connected"
              className="text-sm flex items-center justify-center mt-4 h-14 w-44 rounded-lg bg-yellow-600 hover:bg-yellow-500 hover:scale-90 text-white transition-all duration-300">
              Get Connected
              <div className="ml-2">
                <BsArrowRightShort className="text-3xl transition-transform duration-300 transform-gpu" />
              </div>
            </HashLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectGroup;
