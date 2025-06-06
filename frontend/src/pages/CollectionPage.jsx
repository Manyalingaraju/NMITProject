import React, { useEffect, useState, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOption from '../components/Products/SortOption';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        // Add the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // Empty dependency array ensures this effect runs once

    useEffect(() => {
        // Fetch products after 1 second
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: "product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=2" }],
                },
                {
                    _id: 2,
                    name: "product 2",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=3" }],
                },
                {
                    _id: 3,
                    name: "product 3",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=4" }],
                },
                {
                    _id: 4,
                    name: "product 4",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=5" }],
                },
                {
                    _id: 5,
                    name: "product 5",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }],
                },
                {
                    _id: 6,
                    name: "product 6",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }],
                },
                {
                    _id: 7,
                    name: "product 7",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }],
                },
                {
                    _id: 8,
                    name: "product 8",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=9" }],
                },
            ];
            setProducts(fetchedProducts);
        }, 1000);
    }, []); // Empty dependency array ensures this effect runs once

    return (
        <div className="flex flex-col lg:flex-row">
            <button
                onClick={toggleSidebar}
                className="lg:hidden border p-2 flex justify-center items-center"
            >
                <FaFilter className="mr-2" />Filters
            </button>
            <div
                ref={sidebarRef}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y z-50 l
                    eft-0 w-64 bg-white over-flow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4 '> All collection</h2>
                <SortOption/>
                <ProductGrid products={products}/>
            </div>
        </div>
    );
};

export default CollectionPage;