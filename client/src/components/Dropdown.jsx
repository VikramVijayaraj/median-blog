import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function Dropdown() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { articleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [isDropped, setIsDropped] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  function handleClick() {
    setIsDropped(!isDropped);
  }

  function handleDelete() {
    setIsDelete(true);
  }

  useEffect(() => {
    if (isDelete) {
      axios
        .delete(`${API_URL}/articles/${articleId}`)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));

      navigate("/");
      alert("Article deleted!");
    }
  }, [isDelete]);

  return (
    <div>
      <button onClick={handleClick} className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
      {isDropped && (
        <div className="absolute right-8 lg:right-auto shadow-md px-3 font-light text-gray-500 bg-white">
          <Link to={`${location.pathname}/edit`}>
            <div className="py-2">Edit Story</div>
          </Link>
          <Link>
            <div onClick={handleDelete} className="py-2">
              Delete Story
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
