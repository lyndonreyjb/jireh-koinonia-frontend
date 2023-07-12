import { useEffect, useState } from "react";
import { client } from "../client";
import Loading from "../Loading";
const RandomVerse = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  const randomIndex = Math.floor(Math.random() * header.length);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "verse"]';
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
    <div className="w-5/6 flex justify-center items-center">
      <div className="text-center flex flex-col">
        <p className=" text-2xl md:text-3xl font-bold text-yellow-500">
          {header[randomIndex].title}
        </p>
        <p className="mt-4 text-xl md:text-2xl  text-slate-100">
          {header[randomIndex].description}
        </p>
      </div>
    </div>
  );
};

export default RandomVerse;
