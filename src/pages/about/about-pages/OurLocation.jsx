import MapBox from "../../../MapBox";

const OurLocation = () => {
  return (
    <div>
      <h1 className="md:mb-12 uppercase p-8 text-3xl md:text-5xl font-extrabold text-center">
        Our Location
      </h1>
      <MapBox />
    </div>
  );
};

export default OurLocation;
