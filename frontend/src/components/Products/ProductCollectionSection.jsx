import React from 'react';
import librarypic from "../../assets/librarypic.jpg";
import society from "../../assets/society.jpg";
import xerox from "../../assets/xerox.jpg";
import { Link } from 'react-router-dom';

const ProductCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
            
            <div className="relative flex-1">
                <img src={society} alt="society" className="w-full h-80 object-cover" />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Stationery</h2>
                    <Link to = "/collections/all?nmit = society" className="text-gray-900 underline">
                    Buy Now
                    
                    </Link>
                </div>
            </div>
            <div className="relative flex-1">
                <img src={librarypic} alt="library" className="w-full h-80 object-cover" />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Textbook Collection</h2>
                    <Link to = "/collections/all?nmit = library" className="text-gray-900 underline">
                    Buy Now
                    
                    </Link>
                </div>
            </div>
            <div className="relative flex-1">
                <img src={xerox} alt="xerox" className="w-full h-80 object-cover" />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 ">Xerox enter</h2>
                    <Link to = "/collections/all?nmit = Xerox" className="text-gray-900 underline">
                    Buy Now
                    
                    </Link>
                </div>
            </div>
            
            
        </div>

    </section>
  );
};

export default ProductCollectionSection;