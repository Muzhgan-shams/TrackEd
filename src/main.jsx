import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./layouts/DasboardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Classes from "./pages/Classes.jsx";
import ClassDetail from "./pages/ClassDetail.jsx";
import LibraryPage from "./pages/LibraryPage.jsx";
import Holiday from "./pages/Holiday.jsx";
import Subject from "./pages/Subject.jsx";
import Setting from "./pages/Setting.jsx";
import Account from "./pages/Account.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import LogOut from "./pages/LogOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "logout",
        element: <LogOut />,
      },
    ],
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/students",
    element: <ClassDetail />,
  },
  {
    path: "/library",
    element: <LibraryPage />,
  },
  {
    path: "/holidays",
    element: <Holiday />,
  },
  {
    path: "/subjects",
    element: <Subject />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/help",
    element: <HelpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
