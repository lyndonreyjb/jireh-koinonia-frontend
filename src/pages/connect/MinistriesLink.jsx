import { motion } from "framer-motion";
const MinistriesLink = () => {
  return (
    <div className="text-neutral-100">
      <div className="h-20 grid grid-cols-5 bg-neutral-900">
        <button className="relative border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
          <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
          <span className="relative w-full text-white text-sm md:text-md ">
            Kids
          </span>
        </button>

        <button className="relative border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
          <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
          <span className="relative w-full text-white text-sm md:text-md">
            Youth
          </span>
        </button>

        <button className="relative border-e-2 border-t-2 border-b-2  border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
          <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
          <span className="relative w-full text-white text-sm md:text-md">
            Men
          </span>
        </button>

        <button className="relative border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
          <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
          <span className="relative w-full text-white text-sm md:text-md">
            Women
          </span>
        </button>
        <button className="relative border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
          <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
          <span className="relative w-full text-white text-sm md:text-md">
            Young Adults
          </span>
        </button>
      </div>
    </div>
  );
};

export default MinistriesLink;
