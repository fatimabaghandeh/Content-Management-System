import React from 'react';
import NavBar from './components/nav';


function HomePage2() {
  return (
    <>
      <NavBar />
      <div className="relative flex items-center justify-center h-screen font-bold transition-colors bg-white">
        <h1 className='text-7xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
          Inspirehhh
        </h1>
      </div>
    </>
  );
}

export default HomePage2;
