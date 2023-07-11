import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Layout,
  Landing,
  OurLocation,
  WhatWeBelieve,
  WhoWeAre,
  Connect,
  Kids,
  Youth,
  Men,
  Women,
} from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="contact" element={<Contact />} />

            <Route path="connect/" element={<Connect />} />

            <Route path="about/" element={<About />}>
              <Route path="our-location" element={<OurLocation />} />
              <Route path="what-we-believe" element={<WhatWeBelieve />} />
              <Route path="who-we-are" element={<WhoWeAre />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
