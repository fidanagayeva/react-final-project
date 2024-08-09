import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/Layout";
import Home from "./pages/Home";
import Gadgets from "./pages/Gadgets";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gadgets",
        element: <Gadgets />,
      },
    ],
  },
]);
