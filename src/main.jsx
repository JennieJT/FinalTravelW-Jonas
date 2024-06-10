import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Stopwatch from "./features/Timers/Stopwatch";
import CountUp from "./features/Timers/CountUp.jsx";
import Timer from "./features/Timers/Timer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/countup",
    element: <CountUp />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
