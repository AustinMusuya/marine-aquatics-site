import MountainPng from "../../assets/MountainPng.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      {/* Hero Content */}
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Text Content */}
          <div className="space-y-4 lg:pr-36">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Explore the World of Live Ornamental Fish
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm sm:text-base md:text-lg"
            >
              Discover vibrant, exotic fish species shipped with care and
              precision. We ensure safe, reliable delivery with unbeatable rates
              and IATA-approved handling.
            </p>

            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Surface Image Section */}
      <img
        src={MountainPng}
        alt="Mountain background"
        className="absolute right-0 bottom-0 w-full brightness-50 z-10 object-cover"
      />

      {/* Gradient Bottom Section */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
};

export default Hero;
