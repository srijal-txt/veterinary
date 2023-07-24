import React from 'react'
import BlogPost from '../../context/BlogPost'
import BlogCard from '../BlogCard/BlogCard'
import './Blog.scss'
const Blog = () => {
  return (
    <section className='blog con'>
        <div className="blog-head">
            <h2 className='primary-heading text-center'>Our Blogs</h2>
        </div>
        <div className="blog-body">
            {BlogPost.map((blog)=>
                <BlogCard blog={blog}/>
            )}
        </div>
    </section>
  )
}

export default Blog