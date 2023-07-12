import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
const Youth = ({ header, urlFor }) => {
  const ministry = header;
  return (
    <div
      id="youth"
      className="bg-neutral-900  flex items-center justify-center ">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="md:w-5/6 p-0 md:p-20 flex flex-col md:flex-row h-full w-full ">
        <div className="w-full md:w-3/6 ">
          <img
            src={urlFor(ministry[3].image)}
            className="object-cover h-96 md:h-full  w-full"
          />
        </div>
        <div className="text-neutral-100 w-full md:w-4/6 p-8 flex justify-center items-center">
          <div>
            <h2 className="uppercase text-yellow-600 md:text-lg font-medium text-lg">
              {ministry[3].title}
            </h2>
            <h2 className=" mt-4 md:text-3xl font-bold text-2xl">
              A nurturing environment for youth to cultivate authentic
              connections.
            </h2>
            <p className="mt-4  md:text-md text-md">
              {ministry[3].description}
            </p>

            <div className="mt-4 flex justify-between">
              <div>
                <p className="">Youth Connect Group every</p>
                <span className="text-xl md:text-2xl font-bold text-yellow-600">
                  Friday at 7PM
                </span>
              </div>

              <a
                target="_blank"
                href="https://www.facebook.com/groups/3442503869169735/"
                className="text-sm flex items-center justify-center h-14 w-44  rounded-lg bg-yellow-600 hover:bg-yellow-500 hover:scale-90 text-white transition-all duration-300">
                Get Connected
                <div className="ml-2">
                  <BsArrowRightShort className="text-3xl transition-transform duration-300 transform-gpu" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Youth;
