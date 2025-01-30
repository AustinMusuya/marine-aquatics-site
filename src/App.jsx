import React from "react";
import bgVideo from "./assets/aquariumvideo.mp4";
import underwater2 from "./assets/underwater2.jpg"; // Add a placeholder image
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isVideoLoading, setIsVideoLoading] = React.useState(true);

  React.useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      {/* Adjust the height to prevent overflow */}
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="h-[700px] relative" id="home">
          {/* Placeholder Image */}
          {isVideoLoading && (
            <img
              src={underwater2}
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
          <Products />
          <Banner />
          <Banner2 />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
