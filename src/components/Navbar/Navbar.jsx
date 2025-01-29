import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-60 bg-black/10 backdrop-blur-sm py-4 sm:py-4"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <a href="#home">
              <img src={Logo} alt="logo" className="w-20" />
            </a>
            <a href="#home">
              <span className="text-white">Marine Aquatics Kenya</span>
            </a>
          </div>

          {/* Navigation Links (Hidden on Small & Medium Screens) */}
          <div className="hidden md:hidden lg:flex text-white">
            <ul className="flex items-center gap-4 text-xl py-4 sm:py-0">
              <li className="cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer">
                <a href="#products">Products</a>
              </li>
              <li className="cursor-pointer">
                <a href="#services">Services</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>

          {/* Login Button (Hidden on Small & Medium Screens) */}
          {/* <div className="hidden md:hidden lg:block">
            <button className="text-white border-2 border-white px-3 py-1 rounded-md cursor-pointer">
              Login
            </button>
          </div> */}

          {/* Hamburger Menu (Visible on Small & Medium Screens) */}
          <div className="sm:block md:block lg:hidden">
            <GiHamburgerMenu
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Small Screen Overlay */}
        {toggleMenu && (
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="fixed top-0 left-0 w-screen h-screen bg-black/90 text-white flex flex-col justify-center items-center z-60"
          >
            <FaFish
              fontSize={27}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="flex flex-col items-center gap-6 text-xl">
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => setToggleMenu(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setToggleMenu(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </a>
              </li>
              {/* <li>
                <button
                  onClick={() => setToggleMenu(false)}
                  className="text-white border-2 border-white px-3 py-1 rounded-md"
                >
                  Login
                </button>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
