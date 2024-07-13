import { useParams } from "react-router-dom";

function ArticlePage() {
  const { articleId } = useParams();

  return (
    <section>
      <p>This is Article page.</p>
    </section>
  );
}

export default ArticlePage;
