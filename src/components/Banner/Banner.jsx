// import React from 'react'
import aquarium from "../../assets/aquariumSite.jpg"

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50" id="about">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div data-aos="zoom-in">
                    <img src={aquarium} 
                    alt=""
                    className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg" />
                </div>
                <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                    <p data-aos="fade-up" data-aos-delay="300" 
                    className="text-sky-800 uppercase">
                        Marine Aquatics Kenya
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="500" 
                    className="uppercase text-5xl">
                        About Us
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="700">
                        At Marine Aquatics, we are passionate about connecting people to the vibrant 
                        beauty of live ornamental fish. 
                        With years of experience in the aquatics industry, we specialize
                        in the safe and efficient shipping of exotic fish species worldwide. 
                        Our commitment to quality, care, and customer satisfaction 
                        ensures every shipment arrives healthy and stress-free, 
                        ready to bring life and color to aquariums around the globe.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105 cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner