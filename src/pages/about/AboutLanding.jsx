import { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import Loading from "../../Loading";
import { NavLink } from "react-router-dom";
const AboutLanding = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "about"]';
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
              <h2 className="mt-4 text-neutral-100 md:text-4xl font-extrabold text-2xl text-center md:text-left">
                Until Everyone Knows Jesus.
              </h2>
              <p className="mt-4 text-neutral-100 md:text-md text-md text-center md:text-left">
                {hero.description}
              </p>
              <p className=" text-center md:text-left mt-4 text-neutral-100 font-semibold">
                Service starts at
                <span className="text-2xl text-yellow-500"> 3:00PM </span> every
                Sundays
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className=" flex justify-center items-center">
        <div className="md:w-3/6 flex flex-col md:flex-row  justify-center items-center">
          <div className=" p-4 md:p-10 md:order-2 ">
            <h1 className="font-bold text-5xl">About Us</h1>
            <p className="mt-4">
              We believe that the journey of faith is not meant to be walked
              alone. It is in community, together with fellow believers, that we
              find encouragement, support, and a deeper understanding of God's
              love and purpose for our lives. Whether you are just starting to
              explore your faith or have been on this journey for a while, we
              invite you to join us as we grow and learn together.
            </p>
            <p className="mt-4">
              Whether you are seeking answers, longing for deeper connections,
              or desiring to make a difference, we invite you to be a part of
              our church family. Join us as we journey together, supporting one
              another, growing in faith, and impacting the world around us. We
              look forward to meeting you and walking alongside you on this
              incredible adventure of faith.
            </p>
          </div>
          <div className="h-full w-full grid grid-cols-3  bg-neutral-900">
            <NavLink
              to="/about/who-we-are"
              className=" relative  md:col-span-3 border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
              <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
              <span className="uppercase text-center relative w-full text-white text-sm md:text-md ">
                Who We Are
              </span>
            </NavLink>
            <NavLink
              to="/about/what-we-believe"
              className="relative  md:col-span-3 border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
              <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
              <span className="uppercase text-center relative w-full text-white text-sm md:text-md ">
                What We Believe
              </span>
            </NavLink>
            <NavLink
              to="/about/our-location"
              className="relative  md:col-span-3 border-e-2 border-t-2 border-b-2 border-neutral-50 flex items-center justify-start p-4 overflow-hidden font-bold group">
              <span className="absolute top-0 left-0 w-full h-56 transition-all duration-500 ease-in-out -translate-x-full -translate-y-24 bg-yellow-600 opacity-100 group-hover:translate-x-0"></span>
              <span className="uppercase text-center relative w-full text-white text-sm md:text-md ">
                Our Location
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
