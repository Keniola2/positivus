import React from 'react'
import banner from '../assets/banner.png'
import LogoCarousel from './LogoCarousel'
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const Hero = () => {
  return (
    <section className='bg-[#FFFF] pt-12 w-full flex flex-col justify-center items-center pb-3' id='about'>
        <div className=" w-[90%] md:w-full px-10  sm:px-6 py-10  md:py-12 ">
        <div className="flex md:flex-col-reverse justify-center items-center gap-6 overflow-hidden">
            <div className="w-1/2 md:w-full sm:w-full">
            <div className="w-[85%] md:w-full">
              <div className="overflow-hidden">
           <motion.h1
           initial='hidden'
           whileInView='visible'
           viewport={{amount: 0.1}}
           variants={variants('bottom', 0.2)}
            className='text-4xl font-bold text-secondary mb-4 '>Navigating the digital landscape for success</motion.h1></div>
            <div className="overflow-hidden">
           <motion.p
             initial='hidden'
             whileInView='visible'
             viewport={{amount: 0.1}}
             variants={variants('bottom', 0.5)} className='text-gray600 mb-6'>
            Our digital marketing agency help business grow and succeed online through a range of service including SEO, PPC, social media marketing
            and content creation.
           </motion.p></div>
        
           <motion.button
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.1}}
            variants={variants('bottom', 0.7)} className='inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-primary hover:text-secondary transition-all duration-300'>Book a Consultation
            </motion.button>
      
           
           </div>
            </div>
            {/* right */}
            <div className="w-1/2 md:w-full md:mt-5 sm:w-full ">
            <img src={banner} alt="hero-img" className='w-full h-auto '/>
            </div>
        </div>
        <LogoCarousel/>
        </div>
      
    </section>
  )
}

export default Hero