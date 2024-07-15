import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

function WriteArticle({ publishClicked }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

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
    if (publishClicked) {
      axios
        .post(API_URL + "/articles/write", articleData)
        .then(() => console.log("New Article Created!"))
        .catch((err) => console.log(err));

      navigate("/");
    }
  }, [publishClicked]);

  return (
    <div className="flex flex-col items-center text-xl place-content-center">
      <textarea
        onChange={handleChange}
        className="resize-none mb-5 focus:outline-none"
        placeholder="Your title..."
        cols="70"
        rows="2"
        name="title"
        value={articleData.title}
      />
      <textarea
        onChange={handleChange}
        className="resize-none mb-5 focus:outline-none"
        placeholder="Your description..."
        cols="70"
        name="desc"
        value={articleData.desc}
      />
      <textarea
        onChange={handleChange}
        className="resize-none mb-5 focus:outline-none"
        placeholder="Tell your story..."
        cols="70"
        rows="300"
        name="content"
        value={articleData.content}
      />
    </div>
  );
}

export default WriteArticle;
