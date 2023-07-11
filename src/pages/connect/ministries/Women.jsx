import { motion } from "framer-motion";
const Women = ({ header, urlFor }) => {
  const ministry = header;
  return (
    <div
      id="women"
      className="bg-neutral-100 min-h-screen flex items-center justify-center">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="p-0 md:p-20 flex flex-col md:flex-row h-full w-full">
        <div className="w-full md:w-3/6 md:order-2">
          <img
            src={urlFor(ministry[4].image)}
            className="object-cover h-96 w-full"
          />
        </div>
        <div className="w-full text-neutral-900 md:w-4/6 p-8 flex justify-center items-center md:order-1">
          <div>
            <h2 className="uppercase text-yellow-600 md:text-lg font-extrabold text-lg">
              {ministry[4].title}
            </h2>
            <h2 className=" mt-4 md:text-3xl font-extrabold text-3xl">
              An empowering community for women to cultivate authentic
              connections.
            </h2>
            <p className="mt-4  md:text-md text-md">
              {ministry[4].description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Women;
