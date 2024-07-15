import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import WritePage from "./pages/WritePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  // {
  //   path: "/articles",
  //   element: <NavBar page="write" />,
  // },
  {
    path: "/articles/:articleId",
    element: <ArticlePage />,
  },
  {
    path: "/articles/write",
    element: <WritePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
