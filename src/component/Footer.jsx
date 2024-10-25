import React from 'react'
import logo from '../assets/footer-logo.png'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import FooterContact from './FooterContact';

const Footer = () => {
  return (
   
  <footer className='w-[90%] md:w-full mx-auto px-10 sm:px-6 pt-10  md:py-12'>
        <div className="bg-secondary w-full  rounded-t-2xl">
            {/* top row */}
            <div className="flex justify-between items-center md:flex-col md:items-start md:gap-3 gap-6 px-8 py-12 md:py-10 md:px-4">
                {/* logo */}
                <div className="">
                    <img src={logo} alt="footer logo" className='h-8' />
                </div>
                {/* menu item */}
                <div className="flex md:flex-col md:space-y-2 md:space-x-0 space-x-8">
                   <a href="#about" className='text-white hover:text-primary '>About Us</a>
                   <a href="#services" className='text-white hover:text-primary'>Services</a>
                   <a href="#useCases" className='text-white hover:text-primary'>Use Cases</a>
                   <a href="#team" className='text-white hover:text-primary'>Team</a>
                   <a href="#testimonial" className='text-white hover:text-primary'>Testimonial</a>
                </div>
                {/* social-icon */}
                <div className="flex justify-between gap-4">
                    <a href="#">
                    <FaFacebook size={24} className='text-white hover:text-primary md:size-5' />
                    </a>
                    <a href="#">
                    <BsTwitterX size={24} className='text-white hover:text-primary md:size-5'/>
                    </a>
                    <a href="#">
                    <FaLinkedinIn size={24} className='text-white hover:text-primary md:size-5' />
                    </a>
                </div>
            </div>
            {/* middle contact */}
           <FooterContact/>
           <hr className= 'my-4 border border-primary' />
           <div className="flex justify-center pb-5">
            <h5 className='text-white text-base'> Copyright Sage studios {new Date().getFullYear()} </h5>
           </div>
        </div>
  </footer>
 
  )
}

export default Footer