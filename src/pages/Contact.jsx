import RandomVerse from "./RandomVerse";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import bg from "../assets/bg.jpg";
import Loading from "../Loading";

const Contact = () => {
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
    <div className="min-h-screen bg-slate-50">
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
      <div className="flex justify-center items-center pb-20 relative">
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
                  <button className="mt-4 h-14 w-32 rounded-lg bg-yellow-600 text-white">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
