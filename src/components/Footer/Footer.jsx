// import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdEmail } from "react-icons/md";



const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800" id="contact">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" grid md:grid-cols-3 py-5">
          {/* first column */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Request Our Stocklist
            </h1>
            <p className="text-gray-400">
              Get latest{" "}
              <span className=" text-white font-bold "> stocklist updates</span>{" "}
              straight to your mailbox.{" "}
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 "
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-500/75 h-full inline-block py-2 px-6 text-white cursor-pointer">
                Submit
              </button>
            </div>
          </div>
          {/* Second column */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
                  <li className="cursor-pointer"><a href="#home">Home</a></li>
                  <li className="cursor-pointer"><a href="#about">About</a></li>
                  <li className="cursor-pointer"><a href="#products">Products</a></li>
                  <li className="cursor-pointer"><a href="#services">Services</a></li>
                  {/* <li className="cursor-pointer">Login</li> */}
                </ul>
              </div>
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div> */}
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker className="text-2xl" />
                    <p>Mombasa, Kenya</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdEmail className="text-2xl" />
                    <p>info@marineaquaticskenya.co.ke</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdCall className="text-2xl" />
                    <p>+254 XXX-XXX-XXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <p className="text-sm text-gray-400">
            Copyright ©  {currentYear} Marine Aquatics Kenya ||
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;