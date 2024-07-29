import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LikeButton from '../components/likebtn';

const fetchArticle = async (id) => {
  const response = await fetch('http://localhost:3001/articles.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.articles.find(article => article.id === parseInt(id));
};

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle(id)
      .then(data => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    
    <div className="p-6">
            <h1 className='text-4xl mb-6 P-6'>{article.title}</h1>
            <div className='flex justify-around '>
             
      <div className="bg-gray-100 p-10 rounded-2xl w-[900px] ">
        <p className="whitespace-normal break-words">{article.body}</p>
      </div>
      <div className='bg-gray-100 w-[250px] rounded-2xl p-10 '><h6 className='text-gray-400 '>Author: {article.author}</h6>
      <LikeButton/></div>
      </div>

    </div>
  );
};

export default ArticlePage;
