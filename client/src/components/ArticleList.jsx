import Card from "./Card";
import dummyData from "../dummyData";
import { Link } from "react-router-dom";

function ArticleList() {
  return (
    <div className="pl-60 pr-60 mt-12">
      <h1 className="p-4 text-xl font-mono text-slate-400">Today's picks</h1>
      {dummyData.map((article) => (
        <Link key={article.id} to={`/articles/${article.id}`}>
          <Card
            author={article.author}
            title={article.title}
            desc={article.description}
            img={article.img}
            content={article.content}
          />
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
