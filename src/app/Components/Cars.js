import Brands from "./Brands";
import CarSlider from "./CarSlider";


export default function Cars() {
  return (

    <section className="h-[130vh] flex items-center" id="cars">
      <div className="container mx-auto">
        {/* components  next js */}
        <Brands />
        <CarSlider />
      </div>
    </section>
  )
}

