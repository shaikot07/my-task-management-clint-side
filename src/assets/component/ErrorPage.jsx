import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
      return (
            <div>
                  <div className='max-w-6xl mx-auto'>
                 <img src="../404.gif" alt="" /> 

                <div className='flex justify-center'>
                <Link to='/'><button className='bg-red-600 text-white px-5 py-2 rounded-md mt-5'>Go back Home</button></Link>
                </div>
            </div>
            </div>
      );
};

export default ErrorPage;