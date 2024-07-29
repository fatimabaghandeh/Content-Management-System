import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/articles?search=${searchTerm}`);
    }
  };

  return (
    <nav className='p-1 bg-white flex items-center justify-around text-black shadow'>
      <a href='/'>
        <h1 className="mr-20 text-2xl">CMS Inspire</h1>
      </a>
      <form onSubmit={handleSearchSubmit}>
        <input
          type='search'
          className='w-96 p-2 rounded-full border'
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <a href='/articles' className='text-1xl p-3'>Articles</a>
      <a href='/addarticle' className='text-1xl p-3'>Start Creating</a>
      <a href='/signup'>
        <button className='bg-black text-white p-1 rounded-full pr-3 pl-3 align-right ml-4'>Sign Up</button>
      </a>
    </nav>
  );
}

export default NavBar;
