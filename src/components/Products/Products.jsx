import Img1 from "../../assets/products/fish1.jpg";
import Img2 from "../../assets/products/invert.jpg";
import Img3 from "../../assets/products/fish3.jpg";
import Img4 from "../../assets/products/fish4.jpg";
import Img5 from "../../assets/products/fish2.jpg";
import Img6 from "../../assets/products/invert2.jpg";
import Img7 from "../../assets/products/seahorse.jpg";
import Img8 from "../../assets/products/fish5.jpg";
import Img9 from "../../assets/products/fish6.jpg";
import Img10 from "../../assets/products/fish7.jpg";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Lyretail anthias",
    rating: 5.0,
    color: "Red",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Acanthaster planci",
    rating: 4.5,
    color: "Red-White",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    title: "Ornate Wrasse",
    rating: 4.7,
    color: "Green",
    aosDelay: "300",
  },
  {
    id: 4,
    img: Img4,
    title: "Sunset Anthias",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img5,
    title: "Angel Fish",
    rating: 4.5,
    color: "Gold",
    aosDelay: "700",
  },
  {
    id: 6,
    img: Img6,
    title: "Sea Anemone",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Lined Seahorse",
    rating: 4.0,
    color: "Brown",
    aosDelay: "100",
  },
  {
    id: 8,
    img: Img8,
    title: "Yellow Tang",
    rating: 5.0,
    color: "Yellow",
    aosDelay: "200",
  },
  {
    id: 9,
    img: Img9,
    title: "Zebra Shark",
    rating: 5.0,
    color: "Brown",
    aosDelay: "500",
  },
  {
    id: 10,
    img: Img10,
    title: "Lion Fish",
    rating: 4.4,
    color: "Black-White",
    aosDelay: "700",
  },
];

const Products = () => {
  return (
    <div id="products"  
    className="bg-black text-white pb-12 relative z-50 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary uppercase tracking-wide">
            Premium Ornamental Fish
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold" id="products">
            Explore Our Collection
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400 mt-2">
            Discover a vibrant selection of exotic ornamental fish, carefully selected for 
            their beauty and elegance. Perfect for aquariums of all sizes.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
          {ProductsData.map((data) => (
            <motion.div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              whileHover={{ scale: 1.13 }}
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-full object-cover rounded-md cursor-pointer"
              />
              <div className="text-center mt-2">
                <h3 className="font-semibold text-lg cursor-pointer">{data.title}</h3>
                <p className="text-sm text-gray-400">Color: {data.color}</p>
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition-all cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Stocklist
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Products;
