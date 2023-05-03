import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import App from './App'
import './index.scss'
import { Main } from './components/pages/Main';
import { Animals } from './components/pages/Animals';
import { Animal } from './components/pages/Animal';

/*
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    //errorElement:
  },
  {
    path: "/animals",
    element: <Animals></Animals>,//animalcomponent 
  },
  {
    path: "/animal/:id",
    element: <Animal></Animal>, //single animal
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
