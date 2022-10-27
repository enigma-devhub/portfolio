import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../Sanity';
import { Project } from '../typings'

type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {
  
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    whileInView={{ opacity: 1 }}
    transition={{
      duration: 0.5,
    }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth z-0 ">

    <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">Projects
    </h3>

{/* all projects main div */}
<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20  scrollbar-thumb-[#800080]/80 scrollbar-thin'>
    {/* individual projects */}
    {projects?.map((project, i) => (
      <div
      key={project._id} 
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <motion.img 
        initial={{
          y:-300,
          opacity:0,
        }}
        transition={{durtion: 1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:false}}
        
        className ='h-40 w-40'
        src={urlFor(project?.image).url()}  />

      <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-4xl font-semibold text-center '>
          
          <span className='underline decoration-[#800080]'>Case study {i + 1} of {projects.length}:</span> {project.title} </h4>

          {/* {project?.technologies.map((technology) => (
            <img key={technology._id} src={urlFor(technology.image).url()} />
          ))}
              */}
          <p className='text-lg text-center md:text-left'> {project?.summary}</p>
      </div>
      </div>
    ))}
</div>
    {/* background slided bar */}
    <div className='w-full absolute top-[30%] bg-[#800080]/10 left-0 h-[500px] -skew-y-12'>

    </div>




  </motion.div>
  )
}

export default Projects 