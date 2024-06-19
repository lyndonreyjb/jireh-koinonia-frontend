import { useEffect, useState } from "react";
import { client } from "../../../client";
import Loading from "../../../Loading";

const WhoWeAre = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const query = '*[_type == "whoweare"]';
  //     const data = await client.fetch(query);
  //     setHeader(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div id="who-we-are">
      <div className="md:3/6 md:pb-40  md:pt-10 flex flex-col md:justify-center md:items-center">
        <h1 className="md:mb-12 uppercase p-8 text-3xl md:text-5xl font-extrabold text-center">
          Our Values
        </h1>
        {/* {header.map((values, index) => (
          <div
            key={values._id}
            className="relative m-4 p-4 md:p-14 md:w-3/6 bg-yellow-500 flex flex-col justify-center">
            <div className="absolute -top-2 -right-2 md:-top-5 md:-left-5 bg-neutral-900 text-neutral-100 text-2xl h-14 w-14 flex justify-center items-center font-bold">
              {index + 1}
            </div>
            <h1 className="uppercase w-5/6 text-2xl md:text-4xl font-extrabold">
              {values.title}
            </h1>
            <p className="mt-2">{values.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default WhoWeAre;
