"use client"
// next image

import Image from 'next/image'

// icons
import {Link} from 'react-scroll';
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

//component
// import Copyright from './Copyright'

//motion

import {motion} from 'framer-motion';

//variants
import { fadeIn } from "/variant"

import React from 'react'

export default function Footer() {
  return (
   <footer className='pt-20 bg-white z-20'>
    <motion.div 
    
    variants={fadeIn('up',0.2)}
    initial= 'hidden'
    whileInView={'show'}
    viewport={{once: false , amount: 0.6}}
    
    className="container mx-auto mb-24">
      <div className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-14">
         <div className='flex flex-col flex-1 gap-y-8'>
          <Link to={'home'} smooth={true} spy={true} className='cursor-pointer'>
           <Image src={'assets/icons/logo.svg'} width={200} height={200} alt='' />
          </Link>
           {/* text */}
          <div className='text-secondary'>Lorem ipsum dolor sit amet consectetur.</div>
          {/* phone */}

          <div className='flex flex-col gap-y-4 font-semibold'>
            <div className='flex items-center gap-x-[10px]'>
              <FaPhone />
              <div className='font-medium'>(123)456-7890</div>
             </div>
            <div  className='flex items-center gap-x-[10px]'>
              <FaEnvelope />
              Email</div>
          </div>
          </div>  
          <div className="">2</div>
          <div>3</div>
          <div>4</div>
       </div>
    </motion.div>
   </footer>
  )
}
