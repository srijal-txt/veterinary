import React from 'react'
import './ServiceCard.scss'
const ServiceCard = ({service}) => {
  return (
    <>
    <div className="service-card">
        <div className="service-img">
            <img src={require(`../../assets/${service.image}`)} alt=''/>
        </div>
        <div className="service-details">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className='text-center'><button className='secondary-btn'>View More</button></div>
        </div>
    </div>
    </>
  )
}

export default ServiceCard