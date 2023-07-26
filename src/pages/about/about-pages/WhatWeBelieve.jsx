import { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { client } from "../../../client";
import Loading from "../../../Loading";
import { motion } from "framer-motion";

const WhatWeBelieve = () => {
  const [beliefs, setBeliefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedBeliefs, setExpandedBeliefs] = useState({});

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "beliefs"]';
      const data = await client.fetch(query);
      setBeliefs(data);
      // Initialize expandedBeliefs state with false for all beliefs
      setExpandedBeliefs(
        data.reduce((obj, belief) => ({ ...obj, [belief._id]: false }), {})
      );
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleBelief = (beliefId) => {
    setExpandedBeliefs((prevExpandedBeliefs) => ({
      ...prevExpandedBeliefs,
      [beliefId]: !prevExpandedBeliefs[beliefId],
    }));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="md:3/6 md:pb-40  md:pt-10 flex flex-col md:justify-center md:items-center">
        <h1 className="md:mb-12 uppercase p-8 text-3xl md:text-5xl font-extrabold text-center">
          Our Beliefs
        </h1>
        {/* {beliefs.map((belief) => (
          <div key={belief._id} className="relative flex flex-col m-4 md:w-3/6">
            <button
              className="text-3xl flex justify-between"
              onClick={() => toggleBelief(belief._id)}>
              <h1 className="uppercase text-2xl md:text-4xl font-extrabold">
                {belief.title}
              </h1>
              {expandedBeliefs[belief._id] ? (
                <IoIosArrowDown className="text-yellow-600" />
              ) : (
                <IoIosArrowUp className="text-yellow-600" />
              )}
            </button>

            <div>
              {expandedBeliefs[belief._id] && (
                <motion.div
                  className="mt-2"
                  style={{
                    display: expandedBeliefs[belief._id] ? "block" : "none",
                  }}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                  {belief.description}
                </motion.div>
              )}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default WhatWeBelieve;
