import { act, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import WriteArticle from "./WriteArticle";

function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  const { articleId } = useParams();
  const [isWritingPage, setIsWritingPage] = useState(false);
  const [isEditingPage, setIsEditingPage] = useState(false);
  const [publishButton, setPublishButton] = useState(false);

  useEffect(() => {
    if (pathname === "/articles/write") {
      setIsWritingPage(true);
    } else if (pathname === `/articles/${articleId}/edit`) {
      setIsEditingPage(true);
    }
  }, []);

  function handleClick() {
    setPublishButton(true);
  }

  return (
    <>
      <div className="mb-12">
        <ul className="flex justify-between items-center pt-4 pb-4">
          <div className="flex gap-8 items-center">
            <div className="text-3xl">
              <li>
                <Link to="/">Median</Link>
              </li>
            </div>
            {/* <input
              type="text"
              className="bg-slate-100 rounded-full pt-1 pb-1 p-3 lg:w-auto md:w-auto w-20"
              placeholder="search"
            /> */}
          </div>
          <div className="flex gap-8 items-center">
            {isWritingPage || isEditingPage ? (
              <button
                onClick={handleClick}
                className="bg-green-700 text-sm p-1 rounded-full w-20 text-white"
              >
                Publish
              </button>
            ) : (
              <Link to="/articles/write">
                <li className="flex gap-1">
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  <div className="hidden lg:block">Write</div>
                </li>
              </Link>
            )}
            {/* <li>
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </li> */}
            <li>
              <img
                className="rounded-full"
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1723704208~exp=1723704808~hmac=8185ad0bc2c201abc76e278ba012b21ef88d4e7c49b75ea744bba9a54c76b93c"
                width="32"
                height="32"
              />
            </li>
          </div>
        </ul>
      </div>

      {/* Page */}
      {isWritingPage && (
        <WriteArticle publishClicked={publishButton} mode="write" />
      )}
      {isEditingPage && (
        <WriteArticle publishClicked={publishButton} mode="edit" />
      )}
    </>
  );
}

export default NavBar;
