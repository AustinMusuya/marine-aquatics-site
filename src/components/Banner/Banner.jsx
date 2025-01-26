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
                    <p className="text-sky-800 uppercase">Our Mission</p>
                    <h1 className="uppercase text-5xl">RapidCast</h1>
                    <p>Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
                    Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
                    Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
                    Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner