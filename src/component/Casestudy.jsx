import React from 'react'
import { caseStudy } from '../utility/servicesData'
import { MdOutlineArrowBack, MdOutlineArrowOutward } from 'react-icons/md'
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const Casestudy = () => {
  return (
    <section className='pt-10 w-full flex flex-col justify-center items-center pb-3' id='useCases'>
    <div className="w-[90%] md:w-full px-10  sm:px-6 py-10  md:py-12">
        <div className="flex md:flex-col gap-4 md:gap-3 ">
           <div className="bg-primary px-8 md:w-fit flex items-center p-3 overflow-hidden ">
             <motion.h2  initial='hidden'
           whileInView='visible'
           viewport={{amount: 0.1}}
           variants={variants('bottom', 0.2)} className='text-2xl font-bold'>Case Studies</motion.h2>
             </div> 
             <div className="overflow-hidden">
             <motion.p  initial='hidden'
           whileInView='visible'
           viewport={{amount: 0.1}}
           variants={variants('bottom', 0.4)}  className='text-secondary w-2/3 md:w-full'>
               Explore real life example of our proven digital marketing success through our case studies
             </motion.p >
             </div>
        </div>
        {/*case cards */}
        <div className=" bg-secondary text-white p-8 rounded-md grid grid-cols-3 md:grid-cols-1 mt-5 gap-6 justify-center items-center">
       
            {
                caseStudy.map((data,index)=>(
                    <div key={index} className={index===1? 'border-x border-gray800 md:border-none p-4 md:p-0': 'p-4 md:p-0'}>
                        <h3 className='text-xl font-semibold mb-2'>{data.title} </h3>
                        <p className='mb-4'>{data.desc}</p>
                        <a href={data.link} className='text-primary flex items-center'>
                            Learn More <MdOutlineArrowOutward className='ml-2'/>
                        </a>
                    </div>
                ))
            }
          
        </div>
    </div>
</section>
  )
}

export default Casestudy