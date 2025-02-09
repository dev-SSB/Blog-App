import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Home = () => {

  const {blogs,setBlogs} = useContext(UserContext);

  // Current Date
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className='bg-white p-4 sm:px-10 flex flex-col gap-5 sm:gap-6 lg:gap-8'>
      {/* Welcome Section */}
      <div className='flex flex-col gap-3 sm:gap-5 bg-gray-200 sm:justify-center items-center rounded-lg p-3 sm:p-5'>
        <h1 className='text-xl sm:text-2xl text-gray-600 font-medium uppercase tracking-wide sm:tracking-widest'>Welcome to  <span className='text-red-600 font-extrabold'>TechTrove</span> Blog</h1>
        <div className='flex flex-col justify-center items-center gap-1'>
          <span className='font-semibold text-lg sm:text-sm'>The blog</span>
          <h3 className='text-center text-3xl sm:text-6xl font-semibold'>Writings from our Team</h3>
        </div>
        <p className='font-normal text-lg sm:text-lg text-gray-600 text-center'>The <span className='text-red-600 font-bold'> Latest industry</span> news, interviews, technologies, and resources.</p>
      </div>

      {/*  Blog */}
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:justify-between gap-5 w-full'>
        {/* imgae */}
        <div className='rounded-md overflow-hidden w-full h-56 sm:h-64 lg:h-72'>
          <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
          className='object-left-top'
          />
        </div>

        {/* Data */}
        <div className='flex flex-col gap-2 w-full sm:w-5/6'>
          <div className='flex gap-3 text-md font-semibold'>  
            <h4>John Wick</h4>
            <h4>| {currentDate}</h4>
          </div>
          <h1 className='font-semibold text-xl sm:text-3xl lg:text-4xl'>Most Anticipated PC Games of 2025</h1>
          <p className='text-base  lg:text-lg font-normal text-gray-500'>A personal computer game, also known as a computer game or abbreviated PC game, is a video game played on a personal computer (PC).</p>
          <h4 className='font-semibold text-red-600 border-2 border-red-400 py-1 px-2 w-fit rounded-xl'>Game</h4>
        </div>
      </div>

      {/* Recent Blog Posts*/}
      <div>
        <h1 className='text-blue-600 text-4xl sm:text-7xl lg:text-5xl font-bold text-center p-2 sm:p-4 lg:p-4'>Recent Blog Posts</h1>

        <div className='mt-5 flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-6'>
          
          {/* 1st Col */}
          <Link to={`/blogs/${blogs[0].id}`} className='w-full lg:w-2/5'>
            {/* 1st Col image */}
            <img 
              src={blogs[0].imageURL} alt="" 
              className='w-full h-40 sm:h-72 object-cover mb-2 lg:mb-3'
            />
            {/* 1st Col Data */}
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3 text-md font-semibold'>  
                  <h4>{blogs[0].user}</h4>
                  <h4>| {currentDate}</h4>
                </div>
                <h1 className='font-semibold text-3xl sm:text-2xl'>{blogs[0].header}Building Your Movie API</h1>
                <p className='text-md sm:text-lg lg:text-base font-normal text-gray-500'>{blogs[0].information}</p>
                <h4 className='font-semibold text-red-600 border-1 lg:text-sm border-red-400 py-1 px-2 w-fit rounded-xl'>{blogs[0].tags}</h4>
            </div>
          </Link>


          {/* 2nd Col */}
          <div className='flex flex-col lg:grid lg:grid-rows-2 w-full lg:w-3/5 gap-8 sm:gap-4 lg:gap-1' >

            {/* 2nd Col Part 1 */}
            <Link to={`/blogs/${blogs[1].id}`} className='flex flex-col sm:flex-row sm:justify-between gap-4 w-full'>
              <img 
                src={blogs[1].imageURL} alt="" 
                className=' w-full sm:w-2/5 sm:h-56 lg:h-48 object-cover mb-2'
              />
              <div className='flex flex-col gap-3 sm:gap-2 lg:gap-1 w-full sm:w-3/5'>
                  <div className='flex gap-3 text-md font-semibold'>  
                    <h4>{blogs[1].user}</h4>
                    <h4>| {currentDate}</h4>
                  </div>
                  <h1 className='font-semibold text-2xl lg:text-xl'>{blogs[1].header}</h1>
                  <p className='text-sm sm:text-base lg:text-sm font-normal text-gray-500'>{blogs[1].information}</p>
                  <h4 className='font-semibold text-red-600 border-2  lg:text-sm border-red-400 py-1 px-2 w-fit rounded-xl'>{blogs[1].tags}</h4> 
              </div>
            </Link>

            {/* 2nd Col Part 2 */}
            <Link to={`/blogs/${blogs[2].id}`} className='flex flex-col sm:flex-row sm:justify-between gap-4 w-full'>
              <img 
                src={blogs[2].imageURL} alt="" 
                className='w-full sm:w-2/5 sm:h-56 h-48 object-cover mb-2'
              />
              <div className='flex flex-col gap-3 sm:gap-2 lg:gap-1 w-full sm:w-3/5'>
                  <div className='flex gap-3 text-md font-semibold'>  
                    <h4>{blogs[2].user}</h4>
                    <h4>| {currentDate}</h4>
                  </div>
                  <h1 className='font-semibold text-2xl lg:text-xl'>{blogs[2].header}</h1>
                  <p className='text-sm sm:text-base lg:text-sm font-normal text-gray-500'>{blogs[2].information}</p>
                  <h4 className='font-semibold text-red-600 border-1 lg:text-sm border-red-400 py-1 px-2 w-fit rounded-xl'>{blogs[2].tags}</h4>
              </div>
            </Link>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Home