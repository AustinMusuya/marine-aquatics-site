// import React from 'react'
import MountainPng from "../../assets/MountainPng.png"

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grif-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4 lg:pr-36">
                <h1 className="text-5xl font-bold">Explore the World of Live Ornamental Fish</h1>
                <p>
                    Discover vibrant, exotic fish species shipped with care and precision. We ensure safe, reliable delivery with unbeatable rates and IATA-approved handling.
                </p>

                    <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        {/* surface section */}
        <img src={MountainPng} 
        alt="" 
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"/>
        
        {/* bottom gradient section */}
        <div 
        className="absolute bottom-0 w-full z-30 
        bg-gradient-to-b from-transparent from-10% 
        to-black to-90% h-[20px] sm:h-[50px] md:[60px]">

        </div>
    </div>
  )
}

export default Hero