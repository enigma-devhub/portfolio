import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header 
    
    
     className="sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
        // initial state
         initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
          }} 
          // animate to
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
// time in seconds
        transition ={{
          duration: 1.5,
        }}
        
        
        className='flex flex-row items-center'>
            {/* social icons*/}
            <SocialIcon url= "https://twitter.com/Soy_Enigma" 
            fgColor="gray" bgColor="transparent" />
             <SocialIcon url= "https://medium.com/@enigma13x"
            fgColor="gray" bgColor="transparent" />
             <SocialIcon url= "https://www.youtube.com/channel/UCjDojDzEpXEUqnv-NVPbGvw" 
            fgColor="gray" bgColor="transparent" />
             <SocialIcon url= "https://www.linkedin.com/in/enigma-eo-22b7a51a7/"
            fgColor="gray" bgColor="transparent" />
              <SocialIcon url= "https://www.instagram.com/_enigma1337x/" network="instagram"
            fgColor="gray" bgColor="transparent" />
            <SocialIcon url= "https://t.me/Enigma_78"
            fgColor="gray" bgColor="transparent" />
            {/* 29th   minute */}
        </motion.div>
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
          }} 
          // animate to
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}

        transition ={{
          duration: 2,
        }}
        
        className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon className="cursor-pointer" 
          network="email"
          fgColor="gray"
          bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
          {/* change to uppercase, hide in mobile, make inline flex in middle(md) text size sm(small) */}
        </motion.div>
    </header>
  )
}