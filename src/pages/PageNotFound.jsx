import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center text-center h-5/6'>
            <header className='font-extrabold mt-48 mb-4 h-10 w-full text-4xl'>Page Note Found</header>
            <p className='text-base mb-10 px-5'>The page you're looking for doesn't exist.</p>
            <Link to="/home"><button className='rounded text-lg p-2 mb-28 border-solid border-2 border-black hover:bg-gray-400 hover:text-white'>Go Back to Home Page</button></Link>
        </div>
    </div>
  )
}

export default PageNotFound