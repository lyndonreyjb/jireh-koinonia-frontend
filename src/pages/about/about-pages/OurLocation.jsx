import MapBox from "../../../MapBox";
import Socials from "../../contact/Socials";

const OurLocation = () => {
  return (
    <div>
      <h1 className="md:mb-12 uppercase p-8 text-3xl md:text-5xl font-extrabold text-center">
        Join Us
      </h1>
      <div>
        <Socials />
      </div>

      <MapBox />
    </div>
  );
};

export default OurLocation;
