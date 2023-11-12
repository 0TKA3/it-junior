import Header from "../components/Header";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Article = ({ posts }) => {
  const [article, setArticle] = useState([]);
  const currentArticle = localStorage.getItem("currentArticle");
  const [htmlMarkup, setHtmlMarkup] = useState('')
  
  useEffect(() => {
    if (currentArticle !== null) {
      const filteredPosts = posts.filter((item) => item.id == currentArticle);
      if (filteredPosts.length > 0) {
        setArticle([...filteredPosts]);
      }
    }
  }, [currentArticle, posts]);
  
  return (
    <>
        {article.map((item)=>{
            return(
                <div className="article-block mt-6 w-full h-auto flex p-5 rounded-xl flex-col" key={item.id}>
                    <div className="article-block-header h-48 flex">
                        <img  className="w-40 h-40 mr-6 rounded-xl" src={item.image} alt={item.title} onClick={()=>{console.log(item.content)}}/>
                        <h1 className="article-block-header-titile text-3xl font-semibold text-white mr-4" >{item.title}</h1>
                        {item.tags.map((tag)=>{
                            return(
                                <p key={tag} className="article-tag p-2 pl-3 pr-3 text-white h-9 ml-2 mr-2 rounded-2xl align-middle">{tag}</p>
                            )
                        })}
                    </div>
                    <div className="content text-white font-medium text-lg">
                        {
                          <div dangerouslySetInnerHTML={{ __html: item.content}} />
                        }
                    </div>
                </div>
            )
        })}
    </>
  );
};

export default Article;
