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
          <div className="flex flex-col  md:w-3/6 w-5/6 absolute top-1/2 md:bottom-1/2  left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-slate-200 md:text-7xl text-6xl font-bold uppercase">
              {hero.description1}
            </div>
            <div className="mt-6  text-slate-200 md:text-xl text-lg ">
              {hero.description2}
            </div>
            <div className="mt-2  text-yellow-500 md:text-2xl text-2xl font-semibold uppercase ">
              {hero.time}
            </div>
            <p className="mt-1 text-neutral-300 font-medium uppercase">
              Join us in person
            </p>
          </div>
        </div>
      ))}

      <Welcome />

      <ConnectLanding />
    </div>
  );
};

export default Landing;
