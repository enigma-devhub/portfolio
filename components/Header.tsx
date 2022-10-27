import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
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

          {socials.map((social) => (
            <SocialIcon 
            key={social._id}
            url={social.url}
            fgColor="gray" bgColor="transparent" 
            
            />

          )
              
            )
          }
            {/* social icons*/}

            {/* 29th   minute */}
        </motion.div>

        <Link href="#contact">
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
        </Link>
    </header>
  )
}