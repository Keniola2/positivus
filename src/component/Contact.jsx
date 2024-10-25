import React from 'react'
import contactImg from '../assets/contact.png'
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const Contact = () => {
  return (
    <section className='pt-10 w-full flex flex-col justify-center items-center pb-3' id='contact'>
        <div className="w-[90%] md:w-full px-10  sm:px-6 py-10  md:py-12">
            {/* header & description */}
        <div className="flex md:flex-col gap-4 md:gap-3">
               <div className="bg-primary px-8 md:w-fit flex items-center p-3 overflow-hidden ">
                 <motion.h2  initial='hidden'
                 whileInView='visible'
                 viewport={{amount: 0.1}}
                 variants={variants('bottom', 0.2)}className='text-2xl font-bold'>Contact Us</motion.h2>
                 </div> 
                 <div className=" overflow-hidden">
                 <motion.p
                  initial='hidden'
                  whileInView='visible'
                  viewport={{amount: 0.1}}
                  variants={variants('bottom', 0.4)}
                 className='text-secondary w-2/3 md:w-full'>
                  Reach out to us. Let's discuss your digital marketing needs
                 </motion.p>
                 </div>
            </div>
            {/* contact-form */}
            <div className="flex mt-4 justify-between bg-bermuda rounded-lg p-8 md:p-4 ">
                <div className="w-1/2 md:w-full md:p-0 p-4">
                    <form className='space-y-4' >
                        {/* radio input */}
                        <div className="flex md:flex-col items-start space-x-2 md:space-x-0">
                            <label className='flex items-center' >
                                <input type="radio" name="contact-type"  className='mr-2' value='hi'  />
                                Say Hi
                            </label>
                            <label className='flex items-center md:mt-2 md:ml-0' >
                                <input type="radio" name="contact-type" className='mr-2' value='quote'/>
                                Get a Quote
                            </label>
                        </div>
                        {/* name input */}
                        <div className="">
                             <label className='block text-sm font-medium text-[#374151] ' >Name</label>
                             <input type="text" name="name" id="name" placeholder='Enter your name' className='mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary' />
                        </div>
                        {/* email */}
                        <div className="">
                             <label className='block text-sm font-medium text-[#374151] ' >Email</label>
                             <input type="email" name="email" id="email" placeholder='Enter your email' className='mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary' />
                        </div>
                        {/* messages */}
                        <div className="">
                             <label className='block text-sm font-medium text-[#374151] ' >Messages</label>
                             <textarea rows='6'  name="message" placeholder='Enter your message' className='mt-2 py-2.5 px-4 resize-none block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary' id=""></textarea>
                        </div>
                        <button type='submit' className='inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-primary hover:text-secondary transition-all duration-300'>Send Message</button>
                    </form>
                </div>
                {/* img */}
                <div className="relative 1/2 flex justify-end items-center -m-8 overflow-hidden md:hidden">
                    <img src={contactImg} alt="contact-img" className='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact