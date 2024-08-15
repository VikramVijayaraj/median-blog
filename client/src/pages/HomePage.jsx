import { useState } from "react";

import ArticleList from "../components/ArticleList";
import NavBar from "../components/NavBar";
import FileUpload from "../components/FileUpload";

function HomePage() {
  return (
    <>
      <NavBar />
      <ArticleList />
      {/* <FileUpload /> */}
    </>
  );
}

export default HomePage;
