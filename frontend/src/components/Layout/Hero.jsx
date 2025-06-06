import React, { useState, useEffect } from "react";
import collegepic from "../../assets/collegepic.png";
import collegepic2 from "../../assets/collegepic2.jpg";
import collegepic3 from "../../assets/collegepic3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: collegepic, // Use the correct image file here
      title: "Nitte University",
      description: "Explore Nitte.",
    },
    {
      id: 2,
      src: collegepic2, // Second image
      title: "Nitte University",
      description: "Discover Excellence.",
    },
    {
      id: 3,
      src: collegepic3, // Third image
      title: "Nitte University",
      description: "Achieve Greatness.",
    },
  ];

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 relative">
            <img
              src={image.src} // Render the correct image for each slide
              alt={image.title}
              className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase mb-4">
                  {image.title}
                </h1>
                <p className="text-sm tracking-tight md:text-lg mb-6">
                  {image.description}
                </p>
                <Link
                  to="#"
                  className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-800 px-3 py-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-800 px-3 py-2 rounded-full"
      >
        Next
      </button>
    </section>
  );
};

export default Hero;
