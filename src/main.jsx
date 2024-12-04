import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import Header from "./components/Header.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Search from "./components/Search.jsx";
import Paginacion from "./components/Paginacion.jsx";
import Error404 from "./components/Error404.jsx";
import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "movie/:id",
    element: <MovieDetails />,
  },
  {
    path: "pelicula/:id",
    element: <Navigate replace to="/movie/:id" />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/paginacion",
    element: <Paginacion />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
