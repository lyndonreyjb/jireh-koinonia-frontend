import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import Loading from "../../Loading";
import Ministries from "./Ministries";

const Connect = () => {
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
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${urlFor(
          header[0].image
        ).toString()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="items-center justify-center ">
      <div className="p-0 md:p-28 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-4/6 p-8 flex justify-center items-center">
          <div>
            <h3 className="text-neutral-100 md:text-2xl font-extrabold text-md mb-4">
              Connect With Us
            </h3>
            <h2 className="text-neutral-100 md:text-3xl font-extrabold text-3xl">
              {header[0].title}
            </h2>
            <p className="mt-4 text-neutral-100 md:text-md text-md">
              {header[0].description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Ministries />
      </div>
    </div>
  );
};

export default Connect;
