import React from 'react'
import logo from '../assets/logo.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => { 
    const [nav, setnav] = useState(false)
    const [activeItem, setactiveItem]=useState('')

    const toggleMenu=()=>{
        setnav(!nav)
    }
    const handleClick=(name)=>{
        setactiveItem(name)
        setnav(false)
    }

    const menuItem=[
        {
            id:1,
            name:'About us',
            href:'#about'
        },
        {
            id:2,
            name:'Services',
            href:'#services'
        },{
            id:3,
            name:'Use Cases',
            href:'#useCases'
        },
        {
            id:4,
            name:'Team',
            href:'#team'
        },
        {
            id:5,
            name:'Testimonials',
            href:'#testimonials'
        }
    ]
  return (
   <nav className='flex fixed top-0 w-full z-50 bg-white justify-center'>
    <div className="flex  w-[90%] md:w-full justify-between items-center h-16 px-10 sm:px-6">
        <div className=" ">
            <a href="/">
            <img src={logo} alt="logo" className='h-8 ' />
            </a>
        </div>
        {/* logo */}
        <div className="space-x-8 md:hidden">
            {menuItem.map((item,index)=>(
                     <a onClick={()=>handleClick(item.name)} key={index} href={item.href} className={`text-secondary px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem===item.name?'text-secondary bg-primary underline-offset-4': '' }`}> 
                     {item.name} 
                     </a>
            ))}

            <a href="#contact" className='border px-4 py-2 border-secondary hover:bg-primary hover:border-primary rounded-md transition-all duration-300'>Request a quote</a>
        </div>
        <div className="hidden md:flex md:items-center ">
            <button onClick={toggleMenu} className='text-secondary hover:text-primary focus:outline-none '>
           {nav? <MdOutlineClose size={24}/>  : <HiOutlineMenuAlt3 size={24}/>  }
            </button>
           
        </div>
    </div>
    {/* mobilenav */}
    <div className="">
        {
            nav ?
                <div className=" bg-[#FFFF]    shadow-md">
                    <div className="px-4 bg-primary z-70 pt-2 flex flex-col absolute top-[7vh] left-0 right-0  pb-3 space-y-2 sm:px-3">
                       
                    {menuItem.map((item,index)=>(
                     <a onClick={()=>handleClick(item.name)} key={index} href={item.href}
                      className={`text-secondary px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem ===item.name?'text-primary': '' }`}> 
                     {item.name} 
                     </a>
            ))}
             <a href="#contact" className='border px-4 py-2 border-secondary hover:bg-primary hover:border-primary rounded-md transition-all duration-300'>Request a quote</a>
                    </div>
                </div> :''
          
        }
    </div>
   </nav>
  )
}

export default Navbar