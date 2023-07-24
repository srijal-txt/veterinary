import React from 'react'
import './About.scss'
import Check from '../../assets/check.svg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <section className='about con'>
            <div className="about-img">
                <img src={require('../../assets/aboutimg.jpg')} />
            </div>
            <div className="about-text">
                <h2 className='primary-heading'>About Us</h2>
                <p className="primary-text">Pet House & Animal clinic was established with moto to provide qualitative and affordable animal healthcare service to your doorstep.</p>
                <ul>
                    <li><img src={Check} /><span>Comprehensive</span></li>
                    <li><img src={Check} /><span>Professional</span></li>
                    <li><img src={Check} /><span>Compassionate veterinary service.</span></li>
                </ul>
                <button className="primary-btn"><span>Contact</span><FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
        </section>
    )
}
export default About