// import React from 'react'
import { FaFish, FaTruck, FaHandsHelping } from "react-icons/fa";
import wave from "../../assets/wave.gif";

const ServiceData = [
    {
        title: "End-to-End Logistics Support",
        content: "Comprehensive shipping solutions",
        description: 
            "We provide door-to-door solutions, handle all documentation for smooth customs clearance, and offer real-time tracking to ensure your shipment's journey is seamless.",
        icon: <FaTruck className="text-7xl" />,
        aosDelay: "300"
    },
    {
        title: "Live Fish Guarantee Program",
        content: "Safe and stress-free shipping",
        description: 
            "Using state-of-the-art oxygenation systems and temperature-controlled packaging, we ensure your live ornamental fish arrive in perfect condition with our Live Arrival Guarantee.",
        icon: <FaFish className="text-7xl" />,
        aosDelay: "500"
    },
    {
        title: "Exclusive Benefits for Frequent Shippers",
        content: "Loyalty rewards and priority",
        description: 
            "Enjoy discounted rates, priority handling during peak seasons, and value-added services like cost-optimization consultations and customized packaging solutions.",
        icon: <FaHandsHelping className="text-7xl" />,
        aosDelay: "700"
    }
]
const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
        <div className="container">
            <div className="min-h-[400px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {ServiceData.map((data, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={index}
                        className="min-h-[180px] flex flex-col gap-4 justify-center items-center
                                bg-sky-900/60 rounded-xl backdrop-blur-sm 
                                text-center py-8 px-5 w-full 
                                lg:w-[300px] mx-auto shadow-lg transition-transform 
                                hover:scale-105 hover:shadow-2xl">
                        <div className="text-7xl text-yellow-300">{data.icon}</div>
                        <h1 className="text-xl font-bold text-white">{data.title}</h1>
                        <p className="text-base text-gray-200 italic">{data.content}</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                ))}
                </div>
                <img src={wave} alt=""
                className="h-[200px] w-full object-cover mix-blend-screen-translate-y-24 relative z-[0]" />
            </div>
        </div>
    </div>
  )
}

export default Services