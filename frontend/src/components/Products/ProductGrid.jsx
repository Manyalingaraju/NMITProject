import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {products?.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`} className='block'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='w-full h-60 mb-4'>
              {product?.images?.length > 0 ? (
                <img
                  src={product?.images[0]?.url || ""}
                  alt={product?.images[0]?.altText || product.name}
                  className='w-full h-full object-cover rounded-lg'
                />
              ) : (
                <span>No image available</span>
              )}
            </div>
            <div>
              <h3 className='text-lg font-semibold'>{product.name}</h3>
              <p className='text-gray-600'>${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
