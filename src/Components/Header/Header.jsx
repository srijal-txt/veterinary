import React, { useState } from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const[nav,setNav]=useState(false);
  return (
    <>
      <div className='top'>
        <p className='text-center'>Call us for Veterinary Support: <a href='tel:9861859764'>+977-9861859764</a></p>
      </div>
      <header className='header con'>
        <div className="logo">
          <h2>YOUR LOGO HERE</h2>
          <FontAwesomeIcon icon={!nav ? faBars :  faTimes} onClick={()=> setNav(!nav)}/>
        </div>
        <nav className='nav'>
          <ul>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Breeds</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Gallery</a></li>
          </ul>
        </nav>
        <div className="last">
          <div className="searchbar">
            <input type='text' placeholder='Search...' />
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </div>
          <FontAwesomeIcon icon={faHeart} />
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>2 item</span>
          </div>
        </div>
        <div className="responsive-nav">
        <FontAwesomeIcon icon={!nav ? faBars :  faTimes} onClick={()=> setNav(!nav)}/>
              <ul className={!nav ? 'm-0 responsive-nav-menu' :'m-0 responsive-nav-menu menu-active'}>
                  <li><a href="" onClick={()=> setNav(!nav)}>Home</a></li>
                  <li><a href='' onClick={()=> setNav(!nav)}>About</a></li>
                  <li><a href="" onClick={()=> setNav(!nav)}>Services</a></li>
                  <li><a href="" onClick={()=> setNav(!nav)}>Breeds</a></li>
                  <li><a href="" onClick={()=> setNav(!nav)}>Shop</a></li>
                  <li><a href="" onClick={()=> setNav(!nav)}>Gallery</a></li>
                </ul>
        </div>
      </header>
    </>
  )
}

export default Header