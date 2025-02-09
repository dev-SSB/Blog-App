import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { HashRouter as Router } from "react-router-dom";
import Home from '../components/Home'
import Blogs from '../components/Blogs'
import About from '../components/About'
import CreateBlog from '../components/CreateBlog'
import Signup from '../components/Signup'
import BlogDetail from '../components/BlogDetail'

const DemoRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogid' element={<BlogDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/createblog' element={<CreateBlog />} />
        <Route path='/createblog/:blogid' element={<CreateBlog />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default DemoRoutes