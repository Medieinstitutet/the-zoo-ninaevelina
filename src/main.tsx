import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import App from './App'
import "./index.scss";
import { Main } from "./components/pages/Main";
import { Animals } from "./components/pages/Animals";
import { Animal } from "./components/pages/Animal";
import { AnimalView } from "./components/pages/AnimalView";
//import { AnimalView } from './components/pages/AnimalView';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    //errorElement:
  },
  {
    path: "/animals",
    element: <Animals></Animals>, //animalcomponent
    children: [],
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>, //single animal
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
