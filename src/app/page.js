import About from "./Components/About";
import Cars from "./Components/Cars";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TestimonalSlider from "./Components/TestimonalSlider";
import Testimonial from "./Components/Testimonial";

import BackToBtn from "./Components/BackToBtn";
import Why from "./Components/Why";


export default function Home() {
  return (
    <main className="max-[w-1920px] bg-white mx-auto relative overflow-hidden">
   <Header />
   <Hero />
   <Cars />
   <About />
   <Why />
   <Testimonial />
   
   <Cta />
   <Footer /> 
   <BackToBtn />
<div className="h-[4000px]"></div>
    </main>
  );
}
