import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Dropdown() {
  const [isDropped, setIsDropped] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsDropped(!isDropped);
  }

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
        <div className="absolute shadow-md px-3 font-light text-gray-500">
          <Link to={`${location.pathname}/edit`}>
            <div className="py-2">Edit Story</div>
          </Link>
          <Link>
            <div className="py-2">Delete Story</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
