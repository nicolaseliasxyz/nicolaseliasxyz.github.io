import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Inicial from "./routes/Inicial";
import Github from "./routes/Github";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import SobreEu from "./routes/SobreEu";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inicial />,
      },
      {
        path: "/github",
        element: <Github />,
      },
      {
        path: "/contato",
        element: <Contact />,
      },
      {
        path: "/sobre",
        element: <SobreEu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
