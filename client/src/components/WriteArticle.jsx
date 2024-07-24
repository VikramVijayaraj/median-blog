import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function WriteArticle({ publishClicked, mode }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { articleId } = useParams();

  const [articleData, setArticleData] = useState({
    title: "",
    desc: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setArticleData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (publishClicked && articleData.title) {
      if (mode === "write") {
        axios
          .post(API_URL + "/articles/write", articleData)
          .then(() => console.log("New Article Created!"))
          .catch((err) => console.log(err));
      } else if (mode === "edit") {
        axios
          .put(`${API_URL}/articles/${articleId}/edit`, articleData)
          .then(() => console.log("Article Updated!"))
          .catch((err) => console.log(err));
      }

      navigate("/");
    }
  }, [publishClicked]);

  // When edit clicked, populate the current data for that article
  useEffect(() => {
    if (mode === "edit") {
      axios
        .get(`${API_URL}/articles/${articleId}`)
        .then((response) =>
          setArticleData({
            title: response.data.title,
            desc: response.data.description,
            content: response.data.content,
          })
        )
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="flex flex-col items-center text-md md:text-lg lg:text-xl place-content-center">
      <textarea
        onChange={handleChange}
        className="resize-none mb-5 focus:outline-none w-11/12 md:w-9/12 lg:w-1/2"
        placeholder="Your title..."
        // cols="70"
        rows="2"
        name="title"
        value={articleData.title}
      />
      <textarea
        onChange={handleChange}
        className="resize-none mb-5 focus:outline-none w-11/12 md:w-9/12 lg:w-1/2"
        placeholder="Your description..."
        // cols="70"
        name="desc"
        value={articleData.desc}
      />
      <textarea
        onChange={handleChange}
        className="resize-none mb-5 focus:outline-none w-11/12 md:w-9/12 lg:w-1/2"
        placeholder="Tell your story..."
        // cols="70"
        rows="300"
        name="content"
        value={articleData.content}
      />
    </div>
  );
}

export default WriteArticle;
