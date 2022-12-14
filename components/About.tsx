import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typings';
import { urlFor } from '../Sanity';

type Props = {
   pageInfo: PageInfo;
}


function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{
        duration:5
    }}
    
    className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">About
        </h3>
        
       
        
        <motion.img
        initial={{
         x: -400,   //So it'd come from the left
         opacity: 0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1, x:0}}
       // viewport={{once:true}}
       src={urlFor(pageInfo?.profilePic).url()} alt='gvb'

        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#800080]">little </span> background
            </h4>
            <p className='text-base'>
                {pageInfo?.backgroundInformation}</p>
        </div>
        </motion.div>
  )
}

export default About