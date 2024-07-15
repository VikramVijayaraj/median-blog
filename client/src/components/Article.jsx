import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "./Dropdown";

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
      <div className="flex justify-between mb-4 text-sm">
        <p>{article.author}</p>
        <Dropdown />
      </div>
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      <h3 className="text-2xl mb-6">{article.description}</h3>
      <p className="text-xl font-light whitespace-pre-line">{article.content}</p>
    </div>
  );
}

export default Article;
