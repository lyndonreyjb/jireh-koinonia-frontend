import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import Loading from "../Loading";

const Connect = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "post"]';
      const data = await client.fetch(query);
      setHeader(data);
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
    <div className="min-h-screen bg-slate-200">
      {header.map((hero, index) => (
        <div
          className="relative"
          key={hero.title + index}
          style={{
            height: "70vh",
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
