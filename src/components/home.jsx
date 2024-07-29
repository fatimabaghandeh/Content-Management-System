import React from 'react';
import NavBar from './nav';


function HomePage() {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen font-bold transition-colors bg-white">
        <h1 className='text-7xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
          Inspire
        </h1>
      </div>
    </>
  );
}

export default HomePage;
