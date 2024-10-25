import React,{useState} from 'react'
import teamData from '../utility/teamData'
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const Team = () => {
    const [visibleTeam, setvisibleTeam] = useState(6)
    const handleShowMore=()=>{
       
            setvisibleTeam(prev=>prev +3)   
    
    }
  return (
   <section className='pt-10 w-full flex flex-col justify-center items-center pb-3' id='team'>
    <div className="w-[90%] md:w-full px-10  sm:px-6 py-10  md:py-12">
    <div className="flex md:flex-col gap-4 md:gap-3">
               <div className="bg-primary px-8 md:w-fit flex items-center p-3 overflow-hidden ">
                 <motion.h2 
                  initial='hidden'
                  whileInView='visible'
                  viewport={{amount: 0.1}}
                  variants={variants('bottom', 0.2)}
                 className='text-2xl font-bold'>Team</motion.h2>
                 </div> 
                 <div className="overflow-hidden">
                 <motion.p initial='hidden'
                  whileInView='visible'
                  viewport={{amount: 0.1}}
                  variants={variants('bottom', 0.4)} className='text-secondary w-2/3 md:w-full'>
                    Meet the skill and experienced team behind our successful digital marketing strategies
                 </motion.p>
                 </div>
            </div>
            {/* team member card  */}
            <div className="grid mt-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    teamData.slice(0,visibleTeam).map((team,i)=>(
                        <div key={i} className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                        <div  className="relative mb-4">
                           <div className="flex flex-col md:flex-row md:items-end items-center gap-4 justify-start">
                            <img src={team.image} alt="team member image" className='rounded-full w-32 h-32 object-cover' />
                            <div className="">
                                <h3 className='text-xl font-semibold'> {team.name} </h3>
                                <p className='text-secondary'> {team.position} </p>
                            </div>
                            <a href="#" className='size-8 absolute p-2 top-0 right-0 bg-secondary text-white hover:bg-primary hover:text-secondary hover:text-white  rounded-full cursor-pointer transition-all duration-300 '>
                                <FaLinkedinIn className='hover:text-secondary '/>
                            </a>
                           </div> 
                        </div>
                          {/* bottom */}
                          <div className='px-2' >
                                <hr className="my-4 border-secondary"/>
                                <p className='text-secondary'> {team.description} </p>
                           </div>
                        </div>
                    ))
                }
            </div>
            {/* show more btn */}
            {
                visibleTeam<teamData.length && (
                    <div className="flex justify-end mt-4">
                    <button onClick={handleShowMore} className='inline-block px-6 py-3 bg-primary text-secondary font-semibold rounded-md hover:bg-secondary hover:text-primary transition-all duration-300'>See All Team</button>
                </div>
                )
            }
          
    </div>
   </section>
  )
}

export default Team