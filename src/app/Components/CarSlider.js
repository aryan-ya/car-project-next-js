"use client";
// carslider
//import swiper react components

import {Swiper , SwiperSlide} from "swiper/react";

//import swiper style components

import 'swiper/css';

//image
import Image from "next/image";

//icons

import { FaStar , FaStarHalfAlt ,FaRegStar } from "react-icons/fa";

//framer motion

import { motion } from "framer-motion";

//variants

import {fadeIn} from "/variant";


//car date 
const  cars= [

  // all information
  {
    type :'Hatchback',
    name :'Ford Focus',
    price : 29,
    stars :3.5 ,
    image :'assets/images/carSlider/car01.svg',

    info: [
      {
        icon :'assets/icons/carSlider/gearshift.svg',
        text : 'Manual',

      },
      {
        icon :'assets/icons/carSlider/seat.svg',
        text : '5 seats',
        
      },

      {
        icon :'assets/icons/carSlider/gas.svg',
        text : 'Gas',
        
      },
      {
        icon :'assets/icons/carSlider/wheel.svg',
        text : 'Front',
        
      },

    ]
  },

  {
    type :'Sedan',
    name :'Toyota carola',
    price : 25,
    stars :5 ,
    image :'assets/images/carSlider/car02.svg',

    info: [
      {
        icon :'assets/icons/carSlider/gearshift.svg',
        text : 'Manual',

      },
      {
        icon :'assets/icons/carSlider/seat.svg',
        text : '5 seats',
        
      },

      {
        icon :'assets/icons/carSlider/gas.svg',
        text : 'Gas',
        
      },
      {
        icon :'assets/icons/carSlider/wheel.svg',
        text : 'Front',
        
      },

    ]
  },


  {
    type :'Suv',
    name :'Hondas Cr-v',
    price : 29,
    stars :3.5 ,
    image :'assets/images/carSlider/car03.svg',

    info: [
      {
        icon :'assets/icons/carSlider/gearshift.svg',
        text : 'Automatic',

      },
      {
        icon :'assets/icons/carSlider/seat.svg',
        text : '5 seats',
        
      },

      {
        icon :'assets/icons/carSlider/gas.svg',
        text : 'Gas',
        
      },
      {
        icon :'assets/icons/carSlider/wheel.svg',
        text : 'Front',
        
      },

    ]
  },

  {
    type :'Convertible',
    name :'Mazda mx-5',
    price : 32,
    stars :4.9 ,
    image :'assets/images/carSlider/car02.svg',

    info: [
      {
        icon :'assets/icons/carSlider/gearshift.svg',
        text : 'Automatic',

      },
      {
        icon :'assets/icons/carSlider/seat.svg',
        text : '5 seats',
        
      },

      {
        icon :'assets/icons/carSlider/gas.svg',
        text : 'Gas',
        
      },
      {
        icon :'assets/icons/carSlider/wheel.svg',
        text : 'Front',
        
      },

    ]
  },


  {
    type :'BMW',
    name :'Mazda mx-5',
    price : 32,
    stars :4.9 ,
    image :'assets/images/carSlider/car02.svg',

    info: [
      {
        icon :'assets/icons/carSlider/gearshift.svg',
        text : 'Automatic',

      },
      {
        icon :'assets/icons/carSlider/seat.svg',
        text : '5 seats',
        
      },

      {
        icon :'assets/icons/carSlider/gas.svg',
        text : 'Gas',
        
      },
      {
        icon :'assets/icons/carSlider/wheel.svg',
        text : 'Front',
        
      },

    ]
  }
]


export default function CarSlider() {
  return (
    <motion.div 
    
    variants={fadeIn('up', 0.4)} 
    initial= "hidden" whileInView={"show"}
    viewport={{once: false ,amount: 0.2}} 
    
    
    
    className="container mx-auto">
      <Swiper 
      breakpoints=
               {{
                320 : {slidesPerView: 1, spaceBetween: 15},
                 640: {slidesPerView: 2, spaceBetween:32},
                 1260 :{slidesPerView : 3, spaceBetween: 32},
                 
              }}>
                
                {cars.map((car , index) => {
                 return  <SwiperSlide key={index}>
                 <div className="max-w-[395px] mx-auto sm:mx-0 ">
                  <Image src={car.image} width={380} height={284} alt="" />
                  <div className="flex justify-between">
                    <div className="">
                      <div className="text-[13px] text-secondary uppercase">{car.type}</div>
                      <h3>{car.name}</h3>
                      <div className="mb-10 text-accent font-semibold">{car.price}/day</div>
                    </div>

                    {/* stars */}
                    <div className="flex gap-x-2 text-accent h-max">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>

                  {/* //carinfo */}

                  <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10" >
                    {car.info.map((item , index)=>{
                      return (
                      <div key={index} className="flex flex-col items-center">

                        <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center mb-2">
                          <Image src= {item.icon} width={24} height={24} alt="" />
                        </div>

                        <div className="text-[12] uppercase">{item.text}</div>
                      </div>)
                    })}
                  </div>
                  <button className="btn btn-accent btn-lg">See details</button>
                 </div>
              
                 </SwiperSlide>
                })}
                
                </Swiper>  
    </motion.div>
  )
}
