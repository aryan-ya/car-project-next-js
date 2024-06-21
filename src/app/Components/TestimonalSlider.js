 
"use client";

import { FaQuoteLeft } from "react-icons/fa"

// framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "/variant"

//next image
import Image from "next/image";
// Import Swiper and SwiperSlide from swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper/core'; // Import Swiper modules

SwiperCore.use([Pagination])
//data

const testimonialData = [
  {
    message: 'They truly exceeded my expectations amd made my car rental experience a delight',
    avatar : '/assets/images/testimonial/avatar.png',
    name : 'John Doe',
    job : 'Photographer & VideoGrapher'
  },
  {
    message: 'They truly exceeded my expectations amd made my car rental experience a delight',
    avatar : '/assets/images/testimonial/avatar.png',
    name : 'John Doe',
    job : 'Photographer & VideoGrapher'
  },



]



export default function TestimonalSlider() {
  return (

    // testimonial slider car next js slider next js
    <div>
{/* car next js testimonial slider next js */}
      <Swiper pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    
      className="h-[450px] xl:h-[400px]"
      
      
      
      >
        {testimonialData.map((person, index) =>{
          const  {message, avatar, name, job} = person; 
          return <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center text-center">
              <FaQuoteLeft className="text-7xl text-accent mb-6" />
             
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                {message} </div>
                <Image src={avatar} width={64} height={64} alt=""  className="mb-4" />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
             
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  )
}
