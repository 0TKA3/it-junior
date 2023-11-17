import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    // Assuming you fetch individual article by ID
    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-block mt-6 w-full h-auto flex p-5 rounded-xl flex-col">
      <div className="article-block-header h-48 flex">
        <img
          className="w-40 h-40 mr-6 rounded-xl"
          src={article.image}
          alt={article.title}
          onClick={() => {
            console.log(article.content);
          }}
        />
        <h1 className="article-block-header-titile text-3xl font-semibold text-white mr-4">
          {article.title}
        </h1>
        {article.tags.map((tag) => (
          <p
            key={tag}
            className="article-tag p-2 pl-3 pr-3 text-white h-9 ml-2 mr-2 rounded-2xl align-middle"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="content text-white font-medium text-lg">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Article;
