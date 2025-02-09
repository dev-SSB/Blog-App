import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";

const BlogDetail = () => {
  const { blogs,setBlogs } = useContext(UserContext);
  const { blogid } = useParams();

  // Go Back
  const navigate = useNavigate();
  const handleGoBack = ()=>{
    navigate("/blogs");
  }

  // Delete Blog
  const handleDeleteBlog = ()=>{
    const newBlogs = blogs.filter((obj)=> obj.id !== blogid)
    navigate(-1);
    setBlogs(newBlogs);
  };

  // Edit Blog
  const handleBlogEdit = ()=>{};

  // Display Selected Blog
  const blog = blogs.find((obj) => obj.id == blogid);



  if (!blog) {
    return (
      <div className="bg-white p-4 sm:px-10">
        <h1 className="text-center text-red-500 font-bold text-2xl">Blog Not Found</h1>
      </div>
    );
  }
  return (
    <div className='bg-white p-4 sm:px-10 flex flex-col gap-2 sm:gap-5' >

      <i className="ri-arrow-left-line font-extrabold text-2xl sm:text-3xl" onClick={handleGoBack}></i>

      <div className="lg:grid lg:grid-cols-2 lg:justify-between lg:gap-5">
        <div className="w-full">
          <img src={blog.imageURL} alt={blog.header} className='w-full h-64 sm:h-96 lg:h-full object-cover lg:mb-3 rounded-md' />
        </div>
      

        <div className='flex flex-col gap-2 sm:gap-4'>
          <div className='flex gap-3 text-md sm:text-xl font-semibold'>
            <h4>{blog.user}</h4>
            <h4>| {blog.date}</h4>
          </div>
          <h1 className='font-bold text-2xl leading-tight lg:leading-12 sm:text-5xl'>{blog.header}</h1>
          <p className='text-md sm:text-xl lg:text-base font-normal text-gray-500'>{blog.information}</p>
          <h4 className='font-semibold text-red-600 mb-3 sm:mb-5 w-fit text-lg sm:text-2xl lg:text-xl border-b-2 hover:border-b-blue-400 hover:text-blue-600'>{blog.tags}</h4>
          <div className="flex justify-between">
            <Link to={`/createblog/${blogid}`} className="px-5 sm:px-10 lg:px-6 py-1 sm:py-2 lg:py-1 bg-green-300 rounded-sm text-lg sm:text-2xl lg:text-xl font-normal sm:font-semibold" onClick={handleBlogEdit}>Edit</Link>
            <button className="px-5 sm:px-10 lg:px-6 py-1 sm:py-2 lg:py-1 bg-red-300 rounded-sm text-lg sm:text-2xl lg:text-xl font-normal sm:font-semibold"  onClick={handleDeleteBlog}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
