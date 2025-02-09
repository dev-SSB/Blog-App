import React, { useContext } from 'react'
import { UserContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const {blogs} = useContext(UserContext);
  
    // Current Date
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  return (
    <div className='bg-white p-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'>

      { blogs.map( (obj) =>
        <Link key={obj.id} to={`/blogs/${obj.id}`} className='flex flex-col gap-5 border-1 border-gray-200 shadow-sm p-3 min-h-96'>
          <img src={obj.imageURL} alt="" 
          className='object-cover w-full h-52 sm:h-52 rounded-md'
          />

          <div className='flex flex-col gap-1 sm:gap-2'>
            <div className='flex gap-3 text-md font-semibold'>  
              <h4>{obj.user}</h4>
              <h4>| {currentDate}</h4>
            </div>
            <h1 className='font-semibold text-base sm:text-xl lg:text-2xl'>{obj.header}</h1>
            <p className='text-md sm:text-lg lg:text-base font-normal text-gray-500'>{obj.information}</p>
            <h4 className='font-semibold text-red-600 w-fit mt-2 border-b-2 hover:border-b-blue-400 hover:text-blue-600'>
              {obj.tags}
            </h4>
          </div>
        </Link>)
        
      }

    </div>
  )
}

export default Blogs