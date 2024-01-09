import React from "react"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing, Error, Register, Dashboard } from "./pages";
import { AddJobs, AllJobs, Profile, Stats } from "./pages/dashboard/";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Stats />,
        },
        {
          path: "addjobs",
          element: <AddJobs />,
        },
        {
          path: "alljobs",
          element: <AllJobs />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
       
      ],
    },
    {
      path: "/landing",
      element: <Landing />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
