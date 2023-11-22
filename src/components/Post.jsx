import { Link } from "react-router-dom";
import bookMark from "../assets/icons/bookmark.svg";
import bookMarkRed from "../assets/icons/bookmarkRed.svg";
import { useEffect, useState } from "react";

const Post = ({ post }) => {
  const [bookMarkImage, setBookMarkImage] = useState(bookMark);

  useEffect(()=>{
    if(localStorage.getItem('marks')) {
      const storage = JSON.parse(localStorage.getItem('marks'))
      storage.find((item)=>{
        if(item == post.id) {
          setBookMarkImage(bookMarkRed)
        }
      })
    }
  },[])

  function addToBookMark(event) {
    const markId = event.target.getAttribute("articleid");
    if (localStorage.getItem("marks")) {
      const marksArray = JSON.parse(localStorage.getItem("marks"));

      if (marksArray.find((item) => item == markId)) {
        const filteredArray = marksArray.filter((item) => item !== markId);
        localStorage.setItem("marks", JSON.stringify(filteredArray));
        setBookMarkImage(bookMark)
      } else {
        marksArray.push(markId);
        localStorage.setItem("marks", JSON.stringify(marksArray));
        setBookMarkImage(bookMarkRed)
      }
    } else {
      const marksArray = [];
      marksArray.push(markId);
      localStorage.setItem("marks", JSON.stringify(marksArray));
      setBookMarkImage(bookMarkRed)
    }


  }

  return (
    <>
      <div key={post.id}>
        <div className="central-block-post h-52 w-full p-5 rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="central-block-post-image w-full h-full rounded-2xl"
          />
          <div className="post-right-side flex flex-col justify-around">
            <div className="flex justify-between items-center">
              <Link to={"/article/" + post.id}>
                <h1
                  articleid={post.id}
                  className="central-block-post-title text-white font-medium text-xl max-h-14 mb-1"
                >
                  {post.title}
                </h1>
              </Link>
              <button onClick={addToBookMark}>
                <img
                  articleid={post.id}
                  className="w-6 h-6 -mt-2"
                  src={bookMarkImage}
                  alt="#"
                />
              </button>
            </div>
            <div className="central-block-post-tags flex gap-3">
              {post.tags.map((tag) => {
                return (
                  <div
                    className="central-block-post-tag text-slate-400 p-1 pr-2 pl-2 rounded-3xl"
                    key={tag}
                  >
                    <p className="text-xs"></p>
                    {tag}
                  </div>
                );
              })}
            </div>
            <div className="central-block-post-information flex gap-6">
              <p className="text-sm text-slate-300 ">
                {post.information.views} Просмотров
              </p>
              <p className="text-sm text-slate-300 ">
                {post.information.likes} Лайков
              </p>
              <p className="text-sm text-slate-300 ">
                {post.information.comments} Комментариев
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
