import React from 'react'
import './Service.scss'
import ServicesData from '../../context/Services'
import ServiceCard from '../ServiceCard/ServiceCard'
const Service = () => {
    return (
        <>
            <section className='service con'>
                <div className="service-head">
                    <h2 className='primary-heading text-center'>Our Services</h2>
                    <p className='primary-text text-center'>We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care. We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.</p>
                </div>
                <div className="service-body">
                    {ServicesData.map((service)=>
                        <ServiceCard service={service}/>
                    )}
                </div>
            </section>
        </>
    )
}

export default Service