"use client";

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';


//import swiper slides
import 'swiper/css';
import 'swiper/css/pagination';

//import requires modules

import {Pagination}  from 'swiper/modules';

//icons 
import { FaQuoteLeft } from "react-icons/fa";

// framer motion
import { motion } from "framer-motion";
//variants testimonial

import TestimonalSlider from './TestimonalSlider';


export default function Testimonial() {
  return (

    // testimonal section in next js section next js
    <section className="section flex items-center " id='testimonial'> 
    <div className="container mx-auto">

    <TestimonalSlider />
    </div>
    
    </section>
  )
}
