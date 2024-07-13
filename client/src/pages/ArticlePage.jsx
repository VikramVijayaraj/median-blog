import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function ArticlePage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { articleId } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/articles/${articleId}`)
      .then((response) => setArticle(response.data));
  }, []);

  return (
    <section>
      <NavBar />
      <h1>{article.title}</h1>
      <h3>{article.description}</h3>
      <p>{article.content}</p>
    </section>
  );
}

export default ArticlePage;
