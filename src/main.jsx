import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Account from "./pages/Account.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import First from "./pages/First.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <First />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/cabins",
        element: <Cabins />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      gcTime: 5 * 1000,
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} /> 
    <Toaster 
    gutter = {12}
    toastOptions={{
      success:{
        duration:5000
      }
    }}
    />
    </QueryClientProvider>
  </React.StrictMode>
);
