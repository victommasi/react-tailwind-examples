import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <ul className="flex flex-col space-y-3 items-center 
    justify-center h-screen bg-zinc-700">
    <Link to="/email" className="px-5 py-3 w-64 text-center text-xs rounded-md text-zinc-800 bg-lime-500
        hover:bg-lime-600 hover:text-white duration-300"> Email Subscribe</Link>
    <Link to="/pricingcard" className="px-5 py-3 w-64 text-center text-xs rounded-md text-zinc-800 bg-violet-500
        hover:bg-violet-600 hover:text-white duration-300"> Pricing Cards</Link>
    <Link to="/productmodel" className="px-5 py-3 w-64 text-center text-xs rounded-md text-zinc-800 bg-blue-500
        hover:bg-blue-600 hover:text-white duration-300"> Product Model</Link>
    <Link to="/imagegallery" className="px-5 py-3 w-64 text-center text-xs rounded-md text-zinc-800 bg-cyan-50
        hover:bg-cyan-100 hover:text-black duration-300"> Image Gallery </Link>
    <Link to="/loginmodal" className="px-5 py-3 w-64 text-center text-xs rounded-md text-zinc-800 bg-rose-50
        hover:bg-rose-100 hover:text-black duration-300"> Login Modal </Link>
  </ul>;
}

export default Home;