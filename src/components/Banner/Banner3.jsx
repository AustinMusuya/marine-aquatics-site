// import React from 'react'
import fish from "../../assets/fish.png"

const Banner3 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div data-aos="zoom-in">
                    <img src={fish} 
                    alt=""
                    className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
                </div>
                <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                    <p data-aos="fade-up" data-aos-delay="300"  
                    className="text-sky-800 uppercase">
                        Marine Aquatics Kenya
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="500" 
                    className="uppercase text-5xl">
                        Our Vision
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="700">
                        To be the leading global provider of live ornamental fish logistics, 
                        setting the gold standard in reliability, innovation, 
                        and customer satisfaction.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner3