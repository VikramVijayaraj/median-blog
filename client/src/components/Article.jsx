import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { articleId } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/articles/${articleId}`)
      .then((response) => setArticle(response.data));
  }, []);

  return (
    <div className="px-96">
      <p className="mb-4 font-extralight text-sm">{article.author}</p>
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      <h3 className="text-2xl mb-6">{article.description}</h3>
      <p className="text-xl font-light">{article.content}</p>
    </div>
  );
}

export default Article;
