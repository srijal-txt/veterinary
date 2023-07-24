import React from 'react'
import './Banner.scss'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Banner = () => {
  return (
    <>
    <section className="banner">
        <div className="con">
            <p>One More Friend Thousands More Fun!</p>
            <h3>"Find your furry soulmate at Our Pet Shop."</h3>
            <button className="primary-btn"><span>Get Now</span><FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
    </section>
    </>
  )
}

export default Banner