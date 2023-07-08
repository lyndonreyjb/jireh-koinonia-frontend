import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Layout,
  Landing,
  OurLocation,
  WhatWeBelieve,
  WhoWeAre,
  Connect,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "connect",
        element: <Connect />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "our-location",
            element: <OurLocation />,
          },
          {
            path: "what-we-believe",
            element: <WhatWeBelieve />,
          },
          {
            path: "who-we-are",
            element: <WhoWeAre />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
