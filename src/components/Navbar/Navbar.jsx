import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaCocktail } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-60 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="logo" className="w-20" />
            <span className="text-white">Marine Aquatics Kenya</span>
          </div>

          {/* Navigation Links (Hidden on Small Screens) */}
          <div className="hidden sm:flex text-white">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <li className="cursor-pointer">
                <a href="#">About Us</a>
              </li>
              <li className="cursor-pointer">
                <a href="#services">Services</a>
              </li>
              <li className="cursor-pointer">
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Login Button (Hidden on Small Screens) */}
          <div className="hidden sm:block">
            <button className="text-white border-2 border-white px-3 py-1 rounded-md cursor-pointer">
              Login
            </button>
          </div>

          {/* Hamburger Menu (Visible on Small Screens) */}
          <div className="sm:hidden">
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
          <div className="fixed top-0 left-0 w-full h-full z-60 bg-black/90 text-white flex flex-col justify-center items-center">
            <FaCocktail
              fontSize={27}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="flex flex-col items-center gap-6 text-xl">
              <li>
                <a href="#" onClick={() => setToggleMenu(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setToggleMenu(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#footer" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => setToggleMenu(false)}
                  className="text-white border-2 border-white px-3 py-1 rounded-md"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
