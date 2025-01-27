// import React from 'react'
import deepseafishing from "../../assets/deepseafishing.jpg"

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
                <p data-aos="fade-up" data-aos-delay="300" 
                className="text-sky-800 uppercase">
                    Marine Aquatics Kenya
                </p>
                    <h1 data-aos="fade-up" data-aos-delay="500"  
                    className="uppercase text-5xl">
                        Our Mission
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="700">
                        To deliver the world’s finest ornamental fish with unmatched care and 
                        efficiency, ensuring their safe arrival to enthusiasts, collectors, 
                        and businesses alike while maintaining sustainability and 
                        promoting the beauty of aquatic life.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105 cursor-pointer">
                        Learn More
                    </button>
                </div>
                <div data-aos="zoom-in">
                    <img src={deepseafishing} 
                    alt=""
                    className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2