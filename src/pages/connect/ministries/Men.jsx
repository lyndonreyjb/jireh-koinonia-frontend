import { motion } from "framer-motion";
const Men = ({ header, urlFor }) => {
  const ministry = header;
  return (
    <div id="men" className="bg-neutral-900 flex items-center justify-center ">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="md:w-5/6 p-0 md:p-20 flex flex-col md:flex-row h-full w-full ">
        <div className="w-full md:w-3/6 ">
          <img
            src={urlFor(ministry[2].image)}
            className="object-cover h-96  w-full"
          />
        </div>
        <div className="text-neutral-100 w-full md:w-4/6 p-8 flex justify-center items-center">
          <div>
            <h2 className="uppercase text-yellow-600 md:text-lg font-medium text-lg">
              {ministry[2].title}
            </h2>
            <h2 className=" mt-4 md:text-3xl font-bold text-2xl">
              A supportive space for men to build meaningful relationships.
            </h2>
            <p className="mt-4  md:text-md text-md">
              {ministry[2].description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Men;
