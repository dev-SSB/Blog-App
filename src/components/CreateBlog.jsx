import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const CreateBlog = () => {

  const { blogs, setBlogs } = useContext(UserContext);
  const navigate = useNavigate();
  const { blogid } = useParams();


  const [blog,setBlog] = useState({
    imageURL:"",
    user:"",
    date:"",
    header:"",
    information:"",
    tags:""
  });

  useEffect(() => {
    if (blogid) {
      const existingBlog = blogs.find((b) => b.id === blogid);
      if (existingBlog) setBlog(existingBlog);
    }
  }, [blogid, blogs]);

  const handleChange = (e)=>{
    setBlog({...blog,[e.target.name]:e.target.value});
  }

  const formatDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" }); // e.g., "Dec"
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSubmitBTN= (e)=>{

    if (blog.imageURL && blog.user && blog.header && blog.information && blog.tags) {
        if (blogid) {
          // Update blog
          const updatedBlogs = blogs.map((b) => (b.id === blogid ? { ...blog } : b));
          setBlogs(updatedBlogs);
        } 
        else {
          // Add new blog
          const newBlog = { ...blog, id: uuidv4(), date: formatDate() };
          setBlogs([newBlog,...blogs]);
        }
        navigate("/blogs");
    }
    else {
      alert("All fields are required!");
    }
  }

  const handleBackBTN = ()=>{
    navigate("/");
  };

  return (
    <div className='bg-white p-4 sm:px-10 flex flex-col gap-2 sm:gap-5' >
      <h1 className='text-3xl sm:text-5xl font-bold text-center'>{blogid ? "Edit Blog" : "Create a New Blog"}</h1>
      <form className='flex flex-col gap-3 sm:gap-5 justify-center items-center mt-5' onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='enter imageURL' name='imageURL' value={blog.imageURL} onChange={handleChange} className='text-lg sm:text-xl border-1 border-gray-400 p-3 sm:p-4 lg:p-2 font-bold rounded-md w-5/6 bg-gray-100'/>
        <input type="text" placeholder='enter user' name='user' value={blog.user} onChange={handleChange} className='text-lg sm:text-xl border-1 border-gray-400 p-3 sm:p-4 lg:p-2 font-bold rounded-md w-5/6 bg-gray-100'/>
        <input type="text" placeholder='enter header' name='header' value={blog.header} onChange={handleChange} className='text-lg sm:text-xl border-1 border-gray-400 p-3 sm:p-4 lg:p-2 font-bold rounded-md w-5/6 bg-gray-100'/>
        <textarea name="information" placeholder='enter information' value={blog.information} onChange={handleChange} className='text-lg sm:text-xl border-1 border-gray-400 p-3 sm:p-4 lg:p-2 font-bold rounded-md w-5/6 bg-gray-100'></textarea>
        <input type="text" placeholder='enter tags' name='tags' value={blog.tags} onChange={handleChange} className='text-lg sm:text-xl border-1 border-gray-400 p-3 sm:p-4 lg:p-2 font-bold rounded-md w-5/6 bg-gray-100'/>
        <button onClick={handleSubmitBTN} className='px-4 py-2 bg-green-400 rounded-md w-5/6 border-1 border-gray-600 text-lg sm:text-xl font-semibold'>{blogid ? "Update Blog" : "Publish Blog"}</button>
        <button className='px-4 py-2 bg-red-400 rounded-md w-5/6 border-1 border-gray-600 text-lg sm:text-xl font-semibold' onClick={handleBackBTN}>Back</button>
      </form>
    </div>
  )
}

export default CreateBlog