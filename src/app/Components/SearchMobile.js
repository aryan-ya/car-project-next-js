import DateSelection from "./DateSelection";
import Hoursselection from "./Hoursselection";
import LocationSelection from "./LocationSelection";


export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-4">
        {/* location selection car next js */}
     <LocationSelection />
      {/* Date Selection car nextjs */}
        <DateSelection />
       {/* hours selection */}
        <Hoursselection />     
       
       {/* car js  search button mobile next js*/}
        <div className="flex items-center px-6">
          <button className="btn  btn-accent w-[164px] p-4 mx-auto">search</button>
        </div>
      </div>
    </div>
    </div>
  )
}
