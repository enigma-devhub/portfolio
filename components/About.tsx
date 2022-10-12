import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
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
        src="https://cdn.pixabay.com/photo/2017/01/20/13/01/africa-1994846_960_720.jpg" alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#800080]">little </span> background
            </h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis aliquam quae iure vel fugiat, harum ullam modi perspiciatis vero, sit repudiandae doloribus! Placeat explicabo et dolore molestiae provident aut voluptatum delectus obcaecati aliquid, cumque tempora voluptate numquam similique. Vel fugiat in, corrupti odio culpa similique quam atque fuga quidem! Veritatis nisi suscipit laborum enim accusantium aspernatur itaque illo voluptatibus in! Recusandae perferendis voluptates odio ipsam nihil sit eius aliquid eligendi ratione amet quod magnam beatae, debitis quisquam incidunt nam.</p>
        </div>
        </motion.div>
  )
}

export default About