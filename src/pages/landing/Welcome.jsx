import { useEffect, useState } from "react";
import Loading from "../../Loading";
import { client, urlFor } from "../../client";
import { BsArrowRightShort } from "react-icons/bs";
const Welcome = () => {
  const [welcome, setWelcome] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "landing"]';
      const data = await client.fetch(query);
      setWelcome(data);
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
    <div className="bg-neutral-900 flex items-center justify-center">
      <div className="p-0 md:p-20 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-3/6   mt-14 md:mt-0">
          <img
            src={urlFor(welcome[0].image)}
            className="object-fill h-full w-full"
          />
        </div>
        <div className="w-full md:w-4/6 p-8 flex justify-center items-center">
          <div>
            <h3 className="text-neutral-100 md:text-2xl font-extrabold text-md mb-4">
              Welcome
            </h3>
            <h2 className="text-neutral-100 md:text-3xl font-extrabold text-3xl">
              {welcome[0].title}
            </h2>
            <p className="mt-4 text-neutral-100 md:text-md text-md">
              {welcome[0].description}
            </p>
            <button className="flex items-center justify-center mt-4 h-14 w-44 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white">
              About Us
              <div className="ml-2">
                <BsArrowRightShort className="text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
