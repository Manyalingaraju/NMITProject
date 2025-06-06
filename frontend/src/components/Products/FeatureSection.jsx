import React from 'react';
import { FaShoppingBag } from 'react-icons/fa'; // Shopping Bag icon
import { HiArrowPathRoundedSquare, HiOutlineCreditCard } from 'react-icons/hi2'; // Arrow and Credit Card icons

const FeatureSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        {/* Feature 1 - Free Packing */}
        <div className='flex flex-col items-center'>
          <div className='p-4 rounded-full mb-4 bg-gray-200'>
            <FaShoppingBag className="text-xl text-gray-700" /> {/* Shopping bag icon */}
          </div>
          <h4 className='tracking-tighter mb-2'>
            Free Packing
          </h4>
          <p className='text-gray-600 text-sm tracking-tighter'>
            On all orders over $100
          </p>
        </div>

        {/* Feature 2 - 1 Day Return */}
        <div className='flex flex-col items-center'>
          <div className='p-4 rounded-full mb-4 bg-gray-200'>
            <HiArrowPathRoundedSquare className="text-xl text-gray-700" /> {/* Return icon */}
          </div>
          <h4 className='tracking-tighter mb-2'>
            1 Day Return
          </h4>
          <p className='text-gray-600 text-sm tracking-tighter'>
            Money back guarantee
          </p>
        </div>

        {/* Feature 3 - Secure Checkout */}
        <div className='flex flex-col items-center'>
          <div className='p-4 rounded-full mb-4 bg-gray-200'>
            <HiOutlineCreditCard className="text-xl text-gray-700" /> {/* Credit card icon */}
          </div>
          <h4 className='tracking-tighter mb-2'>
            Secure Checkout
          </h4>
          <p className='text-gray-600 text-sm tracking-tighter'>
            100% secure checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
