import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App";

// page components

import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects/:id",
        element: <Projects />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
