import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import axios from "axios";

function Bookmarks({ posts,setPosts }) {
  let [markPosts,setMarkPosts] = useState([]);

  useEffect(()=>{
    axios
    .get('http://localhost:3001/posts')
    .then(data => {
      setPosts(data.data)
    })
  },[])

  useEffect(() => {
    const marks = JSON.parse(localStorage.getItem("marks"));
    setMarkPosts(posts.filter((post) => {
      if (marks.find((item) => item == post.id)) {
        return true;
      } else {
        return false;
      }
    }));
  }, [posts]);
  return (
    <div className="bookmarks__posts-container">
      {markPosts.map((post) => {
        return <div className="mb-5" key={post.id}><Post post={post} ></Post></div>;
      })}
    </div>
  );
}

export default Bookmarks;
