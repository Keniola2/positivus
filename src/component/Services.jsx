import React from 'react'
import { servicesData } from '../utility/servicesData'
import Linkicon from '../assets/link-icon.png'
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const Services = () => {
  return (
    <section className='pt-10 w-full flex flex-col justify-center items-center pb-3' id='services'>
        <div className="w-[90%] md:w-full px-10  sm:px-6 py-10  md:py-12">
            <div className="flex md:flex-col gap-4 md:gap-3">
               <div className="bg-primary px-8 md:w-fit flex items-center p-3 ">
                 <h2 className='text-2xl font-bold'>Services</h2>
                 </div> 
                 <div className="overflow-hidden">
                 <motion.p
                   initial='hidden'
                   whileInView='visible'
                   viewport={{amount: 0.1}}
                   variants={variants ('bottom', 0.2)}
                 className='text-secondary w-2/3 md:w-full'>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include
                 </motion.p>
                 </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 mt-5 gap-6 justify-center items-center">
                {servicesData.map((data,index)=>(
                    <div key={index} className={`flex cursor-pointer  h-full justify-between gap-6 p-6 rounded-lg border border-[#191A23] ${data.bg} ${data.textColor}`}>
                       <div className="w-1/2 h-full flex flex-col justify-between">
                        <button className={`font-semibold md:px-2   text-xl md:text-lg py-1.5 mb-2 rounded-sm  ${data.foregroundColor}`}> {data.title} </button>
                        <a href="#" className={`flex items-center gap-4 py-2  rounded-md text-secondary hover:bg-opacity-80 hover:text-secondary/80`}>
                          <img src={Linkicon} alt="link icon" className='size-6 rounded-full' />
                          <span>Learn More</span>
                        </a>
                       </div>
                       {/* img */}
                       <div className="w-1/2">
                        <img src={data.img} alt="service images" className='w-full object-cover rounded-md mb-4' />
                       </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services