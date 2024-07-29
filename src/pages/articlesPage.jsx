import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

async function getArticles() {
  const response = await fetch('http://localhost:3001/articles.json');
  const data = await response.json();
  return data.articles;
}

async function deleteArticle(id) {
  const response = await fetch(`http://localhost:3001/articles/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete the article');
  }
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const query = useQuery();
  const searchTerm = query.get('search') || '';

  useEffect(() => {
    async function fetchData() {
      const articlesData = await getArticles();
      setArticles(articlesData);
      if (searchTerm) {
        const filtered = articlesData.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filtered);
      } else {
        setSearchResults(articlesData);
      }
    }
    fetchData();
  }, [searchTerm]);

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setSearchResults(searchResults.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete the article');
    }
  };

  return (
    <div>
      <h1 className='text-4xl ml-10 m-6'>Articles</h1>
      <ul>
        {searchResults.map(article => (
          <li key={article.id} className='p-8 bg-gray-100 m-4 font-bold ml-10 mr-10 rounded-2xl flex items-center'>
            <Link to={`/articles/${article.id}`} className='flex-grow'>
              {article.title}
            </Link>
            <button
              onClick={() => handleDelete(article.id)}
              className='ml-4 text-red-500 hover:text-red-700'
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
