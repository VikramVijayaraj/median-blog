import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function ArticleList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "/").then((response) => {
      setAllArticles(response.data);
    });
  }, []);

  return (
    <div className="pl-60 pr-60">
      <h1 className="p-4 text-xl font-mono text-slate-400">Today's picks</h1>
      {allArticles.map((article) => (
        <Link key={article._id} to={`/articles/${article._id}`}>
          <Card
            author={article.author}
            title={article.title}
            desc={article.description}
            // img={article.img}
            content={article.content}
          />
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
