import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import WriteArticle from "./components/WriteArticle.jsx";
import NavBar from "./components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/articles",
    element: <NavBar />,
    children: [
      {
        path: "/articles/:articleId",
        element: <ArticlePage />,
      },
      {
        path: "/articles/write",
        element: <WriteArticle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
