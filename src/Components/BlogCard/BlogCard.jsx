import React from 'react'
import './BlogCard.scss'
const ServiceCard = ({blog}) => {
  return (
    <>
    <div className="blog-card">
        <div className="blog-img">
            <img src={require(`../../assets/${blog.image}`)} alt=''/>
        </div>
        <div className="blog-details">
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
            <button className='secondary-btn'>View More</button>
        </div>
    </div>
    </>
  )
}

export default ServiceCard