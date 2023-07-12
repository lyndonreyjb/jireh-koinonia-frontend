import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AboutLayout,
  Contact,
  Layout,
  Landing,
  OurLocation,
  WhatWeBelieve,
  WhoWeAre,
  Connect,
  Error,
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

            <Route path="about/" element={<AboutLayout />}>
              <Route path="our-location" element={<OurLocation />} />
              <Route path="what-we-believe" element={<WhatWeBelieve />} />
              <Route path="who-we-are" element={<WhoWeAre />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
