import React, { useState, useEffect } from "react";
import bgVideo from "./assets/aquariumvideo.mp4";
import jellyfish from "./assets/jellyfish.jpg"; // Add a placeholder image
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Banner4 from "./components/Banner/Banner4";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      {/* Adjust the height to prevent overflow */}
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="h-[700px] relative">
          {/* Placeholder Image */}
          {isVideoLoading && (
            <img
              src={jellyfish}
              alt="Background placeholder"
              className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
            />
          )}

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            className={`absolute right-0 top-0 h-full w-full object-cover z-[-1] ${
              isVideoLoading ? "hidden" : "block"
            }`}
            onLoadedData={() => setIsVideoLoading(false)}
            onError={() => setIsVideoLoading(true)} // Keep the placeholder if video fails to load
          >
            <source src={bgVideo} type="video/mp4" />
          </video>

          {/* Navbar and Hero */}
          <NavBar />
          <Hero />
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <Services />
          <Banner />
          <Banner2 />
          <Banner3 />
          <Banner4 />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
