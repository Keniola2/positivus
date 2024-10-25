import React from 'react'
import ctaImg from '../assets/cta-image.png'
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const CTA = () => {
  return (
   <section className='pt-10 relative w-full flex flex-col justify-center items-center pb-3 mb-12 md:mb-6' id='#'>
        <div className="w-[90%] bg-[#F3F3F3] flex justify-center items-center md:flex-col rounded-md md:w-full px-10  sm:px-6 py-10  md:py-12">
            {/* left side */}
            <div className="w-1/2 md:w-full md:text-center mb-8 sm:mb-0  ">
            <div className="overflow-hidden">
            <motion.h1 
             initial='hidden'
             whileInView='visible'
             viewport={{amount: 0.1}}
             variants={variants('bottom', 0.2)}
            className='text-3xl font-bold text-secondary mb-4 '>Let's make things happen</motion.h1></div>
            <div className="overflow-hidden">
           <motion.p   initial='hidden'
             whileInView='visible'
             viewport={{amount: 0.1}}
             variants={variants('bottom', 0.4)} className='text-gray600 mb-6 w-2/3 md:w-full'>
           Contact us today to learn more about our digital marketing services can help your business grow and succeed online.
           </motion.p>
            </div>
           <button className='inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-primary hover:text-secondary transition-all duration-300'>
           Get your free proposal</button>
            </div>
            {/* right-side */}
            <div className="w-1/2 md:hidden flex justify-center items-center relative"> 
                <img src={ctaImg} alt="cta image" className='absolute md:relative md:top-0 md:left-0 -top-52 bottom-0' style={{transform:'scale(1.05'}} />
            </div>
        </div>
   </section>
  )
}

export default CTA