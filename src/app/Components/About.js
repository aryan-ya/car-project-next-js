"use client"

//next image

import Image from "next/image";

//icons

import {MdOutlineMapsHomeWork , MdOutlineBuildCircle , MdOutlineDirections, MdOutlineDirectionsCar} from "react-icons/md";

//react count up

import CountUp from "react-countup";

//react intersection
import { useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion";

import { fadeIn } from "/variant";
const About = () => {

    const [ref , inView] = useInView({
        threshold: 0.5,
    })
    return ( 
    <section className="section flex items-center" id="about" ref={ref}>
       <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row xl:justify-between">
            {/* image */}
            <motion.div 
            variants={fadeIn('up',0.2)}
            initial= 'hidden'
            whileInView={'show'}
            viewport={{once: false , amount: 0.6}}
            className="flex-1 mb-8 xl:mb-0">
                <Image className="rounded-[20px]" src={'/assets/images/about/car01.png'} width={600} height={448} />
            </motion.div>

            {/* text stars */}
             <div className="flex-1 flex items-center xl:justify-center">
                <div className="xl:max-w-[517px]">
                <motion.h2 
                 variants={fadeIn('up',0.4)}
                 initial= 'hidden'
                 whileInView={'show'}
                 viewport={{once: false , amount: 0.6}}
                
                
                className="h2">Car services simplified</motion.h2>
                <motion.p 
                 variants={fadeIn('up',0.6)}
                 initial= 'hidden'
                 whileInView={'show'}
                 viewport={{once: false , amount: 0.6}}
                
                
                className="mb-[42px] max-w-md">Rent , choose and repair and ease . our components location diverse  car types and relaiable repair points ensure a seamless car experience</motion.p>
             

             {/* car types */}

             <motion.div
               variants={fadeIn('up',0.8)}
               initial= 'hidden'
               whileInView={'show'}
               viewport={{once: false , amount: 0.6}}
             
             className="flex items-center gap-x-8 mb-12">
             <div className="flex flex-col w-[100]">
                <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                <div className="text-3xl font-black mb-2">
                    {inView ? <CountUp start={0} end={50} duration={3} delay={1} /> :  null}+
                </div>
                <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br/> types
                </div>
             </div>

            {/* rental outlets */}
             <div className="flex flex-col w-[100]">
                <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                <div className="text-3xl font-black mb-2">
                    {inView ? <CountUp start={0} end={135} duration={3} delay={1} /> :  null}+
                </div>
                <div className="uppercase text-[13px] font-semibold text-secondary">
                    Rental <br/> types
                </div>
             </div>

            {/* repair points */}
             <div className="flex flex-col w-[100]">
                <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                <div className="text-3xl font-black mb-2">
                    {inView ? <CountUp start={0} end={35} duration={3} delay={1} /> :  null}+
                </div>
                <div className="uppercase text-[13px] font-semibold text-secondary">
                    Repair <br/> Points
                </div>
          
             </div>
           
             </motion.div>
             <motion.div 
                 variants={fadeIn('up',0.8)}
                 initial= 'hidden'
                 whileInView={'show'}
                 viewport={{once: false , amount: 0.6}}
             
             className=""
             
             >
             <button className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]">See all Cars</button>
             </motion.div>
             </div>
         </div>
         </div>
       </div>
    </section>
    
    );
}
 
export default About;