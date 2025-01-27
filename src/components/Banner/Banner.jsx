// import React from 'react'
import fish from "../../assets/fish.png"

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                    <img src={fish} alt="" />
                </div>
                <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                    <p className="text-sky-800 uppercase">About Us</p>
                    <h1 className="uppercase text-5xl">Marine Aquatics</h1>
                    <p>
                        At Marine Aquatics, we are passionate about connecting people to the vibrant 
                        beauty of live ornamental fish. 
                        With years of experience in the aquatics industry, we specialize
                        in the safe and efficient shipping of exotic fish species worldwide. 
                        Our commitment to quality, care, and customer satisfaction 
                        ensures every shipment arrives healthy and stress-free, 
                        ready to bring life and color to aquariums around the globe.
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

export default Banner