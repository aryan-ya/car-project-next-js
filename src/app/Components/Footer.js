"use client"
// next image

import Image from 'next/image'

// icons
import {Link} from 'react-scroll';
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

//component
import Copyright from './Copyright'

//motion

import {motion} from 'framer-motion';

//variants
import { fadeIn } from "/variant"

import React from 'react'

export default function Footer() {
  return (
   <footer id='contact' className='pt-20 bg-white z-20'>
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
           
           <div className='font-medium'>office@carland.com</div>
           </div>
          </div>
          </div>  
          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center">

            <div><h3 className='h3 font-bold mb-8'>Company</h3>
              <ul>
              <li><a href="">New York</a></li>
              <li><a href="">Carrier</a></li>
              <li><a href="">Mobiles</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">How we Work</a></li>

            
              </ul>
            
            
            </div>
          </div>
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>Working Hours</h3>
            <div className='flex flex-col gap-y-4'>
            <div className='flex gap-x-2'>
              <div className='text-secondary'>Mon-Fri:</div>
              <div className='font-semibold'>09:00AM - 09:00PM</div>
            </div>
            <div className='flex gap-x-2'>
              <div className='text-secondary'>Sat:</div>
              <div className='font-semibold'>09:00AM - 07:00PM</div>
            </div>
            <div className='flex gap-x-2'>
              <div className='text-secondary'>Sun:</div>
              <div className='font-semibold'>Closed</div>

              </div>
            </div>
          </div>
          <div className='flex-1'>
            <h3 className='h3 font-bold mb-8'>NewsLetter</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur.


          </div>
          <form className='flex gap-x-2 h-14' action="">
            <input type="text" placeholder='your email' className='outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent' />
            <button type='submit' className='btn btn-sm btn-accent w-20'>Submit</button>
          </form>
          </div>
       </div>
    </motion.div>
    <Copyright />
   </footer>

  )
}
