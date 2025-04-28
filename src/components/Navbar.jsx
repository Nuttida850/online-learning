import React from 'react'
import logo from '../assets/logos/logo-black.png'
function Navbar() {
  return (
    <div className='w-full'>
        <div className='max-w-7xl p-4 flex flex-col md:flex-row md:justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar