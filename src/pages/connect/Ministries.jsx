import React from "react";
import Men from "./ministries/Men";
import Women from "./ministries/Women";
import Youth from "./ministries/Youth";
import Kids from "./ministries/Kids";
import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import Loading from "../../Loading";
import ConnectGroup from "./ministries/ConnectGroup";

const Ministries = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = '*[_type == "ministries"]';
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
      <ConnectGroup header={header} urlFor={urlFor} />
      <Youth header={header} urlFor={urlFor} />
      <Women header={header} urlFor={urlFor} />
      <Men header={header} urlFor={urlFor} />
      <Kids header={header} urlFor={urlFor} />
    </div>
  );
};

export default Ministries;
