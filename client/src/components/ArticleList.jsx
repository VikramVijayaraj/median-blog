import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

function ArticleList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAllArtilces() {
    setIsLoading(true);
    await axios.get(API_URL + "/").then((response) => {
      setAllArticles(response.data);
    });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchAllArtilces();
  }, []);

  return (
    <div className="p-0 lg:pl-60 lg:pr-60">
      <h1 className="lg:p-4 text-xl font-mono text-slate-400">Today's picks</h1>
      <div>
        {isLoading && <p className="lg:p-4 text-slate-400">Loading...</p>}
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
    </div>
  );
}

export default ArticleList;
