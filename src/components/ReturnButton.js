import React from 'react';
import { Link } from 'react-router-dom';

function ReturnButton() {
  return <Link to='/' className="absolute left-0 top-0 m-4 p-1
  bg-white rounded-md text-sm hover:bg-slate-300 transition duration-200">
    Home </Link>;
}

export default ReturnButton;