import { motion } from "framer-motion";
const Kids = ({ header, urlFor }) => {
  const ministry = header;
  return (
    <div id="kids" className="bg-neutral-100 flex items-center justify-center">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="xl:w-5/6 p-0 md:p-20 flex flex-col xl:flex-row h-full w-full">
        <div className="w-full xl:w-3/6 xl:order-2">
          <img
            src={urlFor(ministry[1].image)}
            className="object-cover h-96 xl:h-full w-full"
          />
        </div>
        <div className="w-full text-neutral-900  xl:w-4/6 p-8 flex justify-center items-center md:order-1">
          <div>
            <h2 className="uppercase text-yellow-600 md:text-lg font-medium text-lg">
              {ministry[1].title}
            </h2>
            <h2 className=" mt-4 md:text-3xl font-bold text-2xl">
              A safe haven for kids to foster genuine bonds.
            </h2>
            <p className="mt-4 md:text-md text-md">{ministry[1].description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kids;
