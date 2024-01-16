import React from "react"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing, Error, Register, Dashboard } from "./pages";
import { AddJobs, AllJobs, Profile, Stats } from "./pages/dashboard/";
import ProtectedRoute from "./pages/ProtectedRoute";
import { loader as statLoader } from "./pages/dashboard/statsPage";
import { loader as allJobs } from "./pages/dashboard/AllJobsPage";
// import { loader as profileLoader } from "./pages/dashboard/ProfilePage";



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
          loader: statLoader
        },
        {
          path: "addjobs",
          element: <AddJobs />,
        },
        {
          path: "alljobs",
          element: <AllJobs />,
          loader: allJobs
        },
        {
          path: "profile",
          element: <Profile />,
          // loader:profileLoader
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
