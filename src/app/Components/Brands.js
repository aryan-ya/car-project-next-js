"use client"
import Image from "next/image";

// framer motion
import { motion , easeInOut } from "framer-motion";

// fade in for variants in next jds
import {fadeIn} from '/variant';


export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
     <motion.div
        variants={fadeIn('up', 0.4)} 
        initial= "hidden" whileInView={"show"}
        viewport={{once: false ,amount: 0.6}} 
     
     
     
     className="container  mx-auto mt-8">

      {/* brand auto  car next js brands*/}
     <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between" >
   
        <div>
          <Image src={"assets/icons/brands/ford.svg"} width={85} height={32} alt=""  />
        </div>
     

          <div>
          <Image src={"assets/icons/brands/mercedes.svg"} width={60} height={60} alt=""  />
        </div>
    


      
        <div>
          <Image src={"assets/icons/brands/audi.svg"} width={85} height={50} alt=""  />
        </div>
     


     
        <div>
          <Image src={"assets/icons/brands/bmw.svg"} width={60} height={60} alt=""  />
        </div>

        <div>
          <Image src={"assets/icons/brands/vw.svg"} width={60} height={60} alt=""  />
        </div>

        <div>
          <Image src={"assets/icons/brands/mazda.svg"} width={62} height={50} alt=""  />
        </div>
        <div>
          <Image src={"assets/icons/brands/skoda.svg"} width={60} height={60} alt=""  />
        </div>

      </div>
      
      </motion.div>
      
   </section>
  )
}
