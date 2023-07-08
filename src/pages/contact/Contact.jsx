import RandomVerse from "../RandomVerse";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import bg from "../../assets/bg.jpg";
import Loading from "../../Loading";
import Socials from "./Socials";
import MapBox from "../../MapBox";
import { motion } from "framer-motion";
const Contact = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "contact"]';
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
    <div className="bg-neutral-900">
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
            <motion.div
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className="w-5/6 md:w-3/6 mx-auto md:mx-0">
              <h2 className="text-neutral-100 md:text-5xl font-extrabold text-4xl text-center md:text-left">
                {hero.title}
              </h2>
              <p className="mt-4 text-neutral-100 md:text-md text-md text-center md:text-left">
                {hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      ))}

      <Socials />

      <div className="flex justify-center items-center  relative">
        <div className="flex flex-col md:flex-row w-full md:w-4/5">
          <div
            className=" w-full flex justify-center items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg.toString()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <RandomVerse />
          </div>

          <div className="w-full md:w-5/6 flex justify-center items-center p-10 mx-auto  bg-slate-200">
            <div className="w-full">
              <h1 className="text-5xl text-center uppercase">Chat with us</h1>
              <h3 className="text-2xl text-center uppercase mt-2 text-yellow-600">
                Get in contact with us
              </h3>
              <form className="mt-4">
                <div className="flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="border border-gray-300  rounded-lg outline-none w-full  p-4"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="border border-gray-300  rounded-lg outline-none w-full  p-4"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="mt-4 border border-gray-300  rounded-lg outline-none w-full  p-4"
                  />
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="mt-4 border h-40 border-gray-300 outline-none p-4 rounded-lg"></textarea>
                  <button className="mt-4 h-14 w-32 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MapBox />
      </div>
    </div>
  );
};

export default Contact;
