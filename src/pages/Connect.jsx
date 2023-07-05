import { useEffect, useState } from "react";
import { urlFor, client } from "../client";

const Connect = () => {
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => setHeader(data));
  }, []);

  return (
    <div className="h-screen bg-slate-200 mt-20">
      {header.map((hero, index) => (
        <div
          className="h-4/6 relative"
          key={hero.title + index}
          style={{
            backgroundImage: `url(${urlFor(hero.mainImage).toString()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col text-center md:w-3/6 w-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-xl uppercase ">
              <div className="flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-300">
                  {hero.title}
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </div>

            <div className="mt-4  text-slate-300 md:text-xl text-lg ">
              {hero.description2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connect;
