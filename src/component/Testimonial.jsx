import React, { useEffect, useState } from 'react'
import testimonialsData from '../utility/testimonialsData'
import { BsChatQuote } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import {motion} from 'framer-motion'
import variants from '../utility/variants'

const Testimonial = () => {
    const [currentIndex, setcurrentIndex] = useState(0)
    const [itemsShow, setitemsShow] = useState(1)
    useEffect(() => {
        const interval=setInterval(()=>{
            handleNext()
        },2000)
    
      return () =>clearInterval(interval)
    
    }, [currentIndex])

    useEffect(()=>{
        const handleResize=()=>{
            if (window.innerWidth >768) {
                setitemsShow(3)
            }else{
                setitemsShow(1)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return()=>window.removeEventListener('resize', handleResize)
    },[])

    const handleNext=()=>{
        setcurrentIndex(prev=>(prev + itemsShow) % testimonialsData.length )
    }
    const handlePrev=()=>{
        setcurrentIndex(prev=>(prev - itemsShow + testimonialsData.length) % testimonialsData.length ) 
    }
    const handleDotClick=(index)=>{
        setcurrentIndex(index)
    }
    
    
  return (
    <section className='pt-10 w-full flex flex-col justify-center items-center pb-3' id='testimonials'>
        <div className="w-[90%] md:w-full px-10  sm:px-6 py-10  md:py-12 relative">
        <div className="flex md:flex-col gap-4 md:gap-3">
               <div className="bg-primary px-8 md:w-fit flex items-center p-3 overflow-hidden ">
                 <motion.h2
                  initial='hidden'
                  whileInView='visible'
                  viewport={{amount: 0.1}}
                  variants={variants('bottom', 0.2)}
                 className='text-2xl font-bold'>Testimonials</motion.h2>
                 </div> 
                 <div className="overflow-hidden">
                 <motion.p
                 initial='hidden'
                 whileInView='visible'
                 viewport={{amount: 0.1}}
                 variants={variants('bottom', 0.4)}
                 className='text-secondary w-2/3 md:w-full'>
                 Hear from our satisfied clients. Read our testimonials to learn more about our digital marketing services.
                 </motion.p>
                 </div>
            </div>
            {/* testimonials */}
            <div className="relative mb-12 mt-5">
                <div className="flex justify-center md:gap-3 overflow-hidden md:flex-col ">
                    {
                        testimonialsData.slice(currentIndex, currentIndex + itemsShow).map((data,index)=>(
                            <motion.div
                            initial={{opacity:0, x:50}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:-50}}
                            transition={{duration:0.5}}
                            key={index} className="w-full  relative py-5 px-2 ">
                                <div className="absolute top-0 left-0 z-30">
                                    <BsChatQuote size={32} className=''/>
                                    </div>
                                    <div className="bg-white h-[100%] w-fit hover:bg-primary rounded-lg border-secondary hover:border-primary shadow-lg p-4 cursor-pointer transition-all duration-300">
                                        <p className='text-lg font-medium mb-4'>{data.text} </p>
                                        <p className='text-sm font-semibold text-[#374151] '> {data.author} </p>
                                    </div>
                            </motion.div>
                        ))
                    }
                </div>
                 {/* dot navigation */}
                <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
                        <button onClick={handlePrev} className='text-secondary'>
                         <IoArrowBack/>
                        </button>
                        {/* dots */}
                        <div className="flex space-x-2">
                            {
                                testimonialsData.map((_, index)=>(
                                    <button onClick={()=>handleDotClick(index)} key={index} className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemsShow? 'bg-primary':'bg-[#9CA3AF]'}`}/>

                                   
                                ))
                            }
                        </div>
                        <button onClick={handleNext} className='text-secondary'>
                            <IoArrowForward/>
                        </button>
                </div>
            </div>
          
        </div>
    </section>
  )
}

export default Testimonial