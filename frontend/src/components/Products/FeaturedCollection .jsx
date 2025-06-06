import React from 'react';
import { Link } from 'react-router-dom';
import featured from "../../assets/featured.png"; // Correct path

const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center bg-green-50 rounded-3xl'>
        {/* Left text content */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
          <h2 className='text-lg font-semibold text-gray-700 mb-2'>
            Good quality and brand
          </h2>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Apparel made for your everyday life
          </h2>
          <p className='text-lg text-gray-600 mb-6'>
            Whether it’s for fun, knowledge, or just a bit of peace, a good book is the perfect companion. Grab one and get lost in the magic of words!
          </p>
          <Link
            to="/collection/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>

        {/* Right image content */}
        <div className='lg:w-1/2'>
          <img
            src={featured}
            alt="Featured collection"
            className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl'
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
