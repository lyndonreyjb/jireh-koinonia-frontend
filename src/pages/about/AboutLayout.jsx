import { Outlet } from "react-router-dom";
import AboutLanding from "./AboutLanding";

const AboutLayout = () => {
  return (
    <div>
      <AboutLanding />
      <Outlet />
    </div>
  );
};

export default AboutLayout;
