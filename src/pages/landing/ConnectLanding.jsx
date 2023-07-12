import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import Loading from "../../Loading";
import MinistriesLink from "../connect/MinistriesLink";

const ConnectLanding = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "connect"]';
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
    <div>
      {header.map((hero) => (
        <div
          className="relative"
          key={hero._id}
          style={{
            height: "70vh",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${urlFor(
              hero.image
            ).toString()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className=" flex flex-col w-full h-full justify-center items-center">
            <div className="w-5/6 md:w-3/6 mx-auto md:mx-0">
              <h2 className="text-neutral-100 md:text-5xl font-extrabold text-4xl text-center md:text-left">
                Connect With Us
              </h2>
              <h2 className="mt-4 text-neutral-100 md:text-2xl font-bold text-xl text-center md:text-left">
                {hero.title}
              </h2>
              <p className="mt-4 text-neutral-100 md:text-md text-md text-center md:text-left">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div>
        <MinistriesLink />
      </div>
    </div>
  );
};

export default ConnectLanding;
