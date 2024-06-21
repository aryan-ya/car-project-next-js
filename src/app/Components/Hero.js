"use client";
// components
import { useContext } from "react";
// Import the Search component
import Search from "./Search";

//context
import { SearchContext } from "../context/search";
import Image from "next/image";

// Define the Hero component


// framer motion
import { motion , easeInOut } from "framer-motion";

// variant framer motion
import { fadeIn } from "/variant";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  useContext(SearchContext);
  return (

    // hero section next js
    <section className="h-screen xl:h-[90vh]  bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and image wrapper for car next js*/}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center  xl:max-w-xl xl:text-left mt-20 xl:mt-0">
            <motion.h1 
            variants={fadeIn('down', 0.2)} initial= "hidden" whileInView={"show"} viewport={{once: false ,amount: 0.6}} 
            className="h1" >
              Explore the Finest <span className="text-accent">Global</span>
              Offers
            </motion.h1>
            <motion.p
            
            variants={fadeIn('down', 0.4)} initial= "hidden" whileInView={"show"} viewport={{once: false ,amount: 0.6}} 
            
            
            className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependency car rentals
            </motion.p>

            {/* btn hero */}
            <motion.div
              variants={fadeIn('down', 0.6)} 
              initial= "hidden" whileInView={"show"}
              viewport={{once: false ,amount: 0.8}} 
            
            
            className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta">
                <Image
                  src={"/assets/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"/assets/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                />
              </button>
            </motion.div>
          </div>
          <motion.div 
           variants={fadeIn('up', 0.6)} 
           initial= "hidden" whileInView={"show"}
           viewport={{once: false ,amount: 0.6}} 
          
          className="relative w-full   h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[660px] xl:max-h-[542px] xl:absolute xl:-right-[10px] min-[1680px]: xl:top-30">
            <Image src={"assets/images/hero/car.svg"} fill alt="" style={{objectFit: 'contain'}}
            priority
            
            />
          </motion.div>
        </div>
      </div>

      {searchActive ? (
        <motion.div 
        initial= {{y: '-100%'}}
        animate ={{y : 0}}
        transition={{ease : easeInOut}}
        
        className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1100px] mx-auto">
        <motion.div
        variants={fadeIn('up', 0.8)} 
           initial= "hidden" whileInView={"show"}
           viewport={{once: false ,amount: 0.2}} 
        >
        
          <Search />
        </motion.div>
        </div>
      )}
    </section>
  );
}
