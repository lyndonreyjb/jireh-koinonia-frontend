import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import Loading from "../../Loading";
import Welcome from "./Welcome";
import MapBox from "../../MapBox";
import Connect from "../connect/Connect";

const Landing = () => {
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
          className="h-screen relative"
          key={hero.title + index}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${urlFor(
              hero.mainImage
            ).toString()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="flex flex-col  text-center md:w-3/6 w-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-xl uppercase ">
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-300">
                  {hero.title}
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </div>
            <div className="text-slate-200 md:text-7xl text-6xl font-bold uppercase">
              {hero.description1}
            </div>
            <div className="mt-4  text-slate-300 md:text-xl text-lg ">
              {hero.description2}
            </div>
          </div>
        </div>
      ))}
      <Welcome />
      <Connect />
      <MapBox />
    </div>
  );
};

export default Landing;
