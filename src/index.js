import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/global.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Sitelayout";

import Home from "./Pages/Home";
import User from "./Pages/User";
import Menu from "./Pages/Menu";
import Login from "./components/Login";
let router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/main",
    element: <Layout />,
    children: [
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
