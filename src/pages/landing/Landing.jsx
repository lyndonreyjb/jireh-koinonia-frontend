import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import Loading from "../../Loading";
import Welcome from "./Welcome";
import MapBox from "../../MapBox";
import ConnectLanding from "./ConnectLanding";

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
    <div className="min-h-screen bg-neutral-900">
      {header.map((hero) => (
        <div
          className="h-screen relative"
          key={hero._id}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${urlFor(
              hero.mainImage
            ).toString()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="flex flex-col  text-center md:w-3/6 w-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex justify-center  text-3xl md:text-3xl uppercase">
              <span className="font-bold mx-4 text-yellow-500">
                {hero.title}
              </span>
            </div>

            <div className="mt-4 text-slate-200 md:text-7xl text-6xl font-bold uppercase">
              {hero.description1}
            </div>
            <div className="mt-4  text-slate-300 md:text-xl text-lg ">
              {hero.description2}
            </div>
            <div className="mt-4  text-yellow-500 md:text-2xl text-2xl font-bold uppercase ">
              {hero.time}
            </div>
          </div>
        </div>
      ))}

      <Welcome />

      <ConnectLanding />

      <MapBox />
    </div>
  );
};

export default Landing;
