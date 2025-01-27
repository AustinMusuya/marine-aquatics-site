import React from 'react'
import bgVideo from "./assets/aquariumvideo.mp4";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Banner4 from "./components/Banner/Banner4";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(() => {
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
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
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

export default App