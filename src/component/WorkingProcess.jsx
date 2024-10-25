import React, { useState } from 'react'
import processSteps from '../utility/processSteps'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import {motion} from 'framer-motion'
import variants from '../utility/variants'


const WorkingProcess = () => {
    
    const [openIndex, setopenIndex] = useState(0)
    const handleToggle=(index)=>{
            setopenIndex(openIndex===1? -1: index )
    }

  return (
   <section className='pt-12 flex flex-col justify-center items-center pb-3 bg-white'>
        <div className="w-[90%] md:w-full px-10  sm:px-6 py-10 ">
        <div className="flex md:flex-col gap-4 md:gap-3 ">
               <div className="bg-primary px-8 md:w-fit flex items-center p-3 overflow-hidden">
                 <motion.h2
                 initial='hidden'
                 whileInView='visible'
                 viewport={{amount: 0.1}}
                 variants={variants('bottom', 0.2)} className='text-2xl font-bold'>Our Working Process</motion.h2>
                 </div> 
                 <div className="overflow-hidden">
                 <motion.p  initial='hidden'
                 whileInView='visible'
                 viewport={{amount: 0.1}}
                 variants={variants('bottom', 0.4)} className='text-secondary w-2/3 md:w-full'>
                   Step by step guide to achieving your business goal.
                 </motion.p>
                 </div>
            </div>
            {/* accordion */}
            <div className="mt-5">
              {
                processSteps.map((data,index)=>(
                  <div key={index} className={`border rounded-md mb-4 overflow-hidden ${openIndex===index? 'border-primary':'border-[#D1D5DB]'}`}>
                    <button onClick={()=>handleToggle(index)} className={`w-full text-left p-4 flex justify-between items-center ${openIndex===index? 'bg-primary':'bg-bermuda'} `}>
                      <div className="flex items-center">
                        <span className='text-secondary font-extrabold text-2xl mr-4' > {data.number} </span>
                        <h3 className='text-lg font-semibold'> {data.question} </h3>
                      </div>
                      <div className="bg-white text-secondary border p-1.5 rounded-full">
                        {
                          openIndex===index? ( <FaMinus/> ):(<FaPlus/>)
                        }
                      </div>
                    </button>
                    {
                      openIndex===index && (
                        <div className=" p-4 bg-primary text-secondary">
                          <hr className='mt-0 mb-5 border-secondary' />
                          <p> {data.answer} </p>
                        </div>
                      )
                    }
                  </div>
                ))
              }
            </div>
        </div>
   </section>
  )
}

export default WorkingProcess