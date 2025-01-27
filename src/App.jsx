import React from 'react'
import bgVideo from "./assets/aquariumvideo.mp4";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(()=>{
    AOS.init({
      duratione:1200,
      easing: "ease-in-out",
    })
  });
  
  return (
    <div>
      <div className="h-[700px] relative">
        <video
        autoPlay
        loop
        muted
        className="fixed right-0 top-0 h-[700[px] w-full object-cover z[-1]">
          <source src={bgVideo} type="video/mp4"/>
        </video>
        <NavBar />
        <Hero />
        {/* Services Card Section */}
        <Services />
        <Banner />
        <Banner2 />
        <Footer />
      </div> 
    </div>
  )
}

export default App