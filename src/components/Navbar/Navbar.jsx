// import React from 'react'
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4 text-whute font-bold text-2xl'>
                    <img src={Logo} alt="" className="w-20" />
                    <span className="text-white">Marine Aquatics Kenya</span>
                </div>
                <div className="text-white">
                    <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="text-white border-2 borger-white px-3 py-1 rounded-md">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar