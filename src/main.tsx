import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./styles/Navbar.scss";
import { Main } from "./components/pages/Main";
import { Animals } from "./components/pages/Animals";
import { Animal } from "./components/pages/Animal";
import { AnimalView } from "./components/pages/AnimalView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
    children: [],
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
