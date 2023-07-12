import { NavLink } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";

const Error = () => {
  return (
    <div className="bg-neutral-900 flex flex-col items-center justify-center h-screen">
      <TfiFaceSad className="text-9xl text-yellow-500 mb-8" />
      <div className="text-center text-neutral-100">
        <h1 className="text-4xl font-bold mb-4">Error 404</h1>
        <p className="text-xl">Page does not exist</p>
        <NavLink
          to="/"
          className="inline-block px-4 py-2 mt-4 text-neutral-900 font-medium bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-lg">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
