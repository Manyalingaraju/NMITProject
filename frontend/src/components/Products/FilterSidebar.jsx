import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: '',
    color: '',
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
    type: '',
  });

  // Updated categories for stationery and textbooks
  const categories = ['Stationery', 'Textbook'];
  
  // Colors (remains the same)
  const colors = ['Red', 'Blue', 'Black', 'Green', 'Gray', 'White', 'Pink', 'Beige', 'Navy'];
  
  // Sizes (updated for multiple selection with checkboxes)
  const sizes = ['Small', 'Medium', 'Large'];

  // Updated materials relevant to stationery and textbooks
  const materials = [
    'Notebook Paper',
    'Parchment',
    'Recycled Paper',
    'Cardboard',
    'Glossy Paper',
    'Matte Paper',
    'Leather',
    'Plastic',
    'Metal',
    'Wood',
  ];

  // Brands (remains the same)
  const brands = ['Classmate', 'Archies', 'Camlin', 'Vidya', 'Cello'];

  // Types (remains the same)
  const types = ['SingleSided', 'DoubleSided'];

  // useEffect to sync the search params with filters state
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || '',
      color: params.color || '',
      size: params.size ? params.size.split(',') : [],
      brand: params.brand ? params.brand.split(',') : [],
      material: params.material ? params.material.split(',') : [],
      type: params.type || '',
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
  }, [searchParams]);

  // Helper function to add or remove query params in the URL
  const updateSearchParams = (newParams) => {
    const updatedParams = new URLSearchParams(searchParams);
    Object.keys(newParams).forEach((key) => {
      if (newParams[key]) {
        updatedParams.set(key, newParams[key]);
      } else {
        updatedParams.delete(key);
      }
    });
    setSearchParams(updatedParams);
  };

  // Handle change for category selection
  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
    updateSearchParams({ ...searchParams, category });
  };

  // Handle change for color selection
  const handleColorChange = (color) => {
    setFilters((prev) => ({
      ...prev,
      color,
    }));
    updateSearchParams({ ...searchParams, color });
  };

  // Handle size change (checkboxes for multiple selection)
  const handleSizeChange = (size) => {
    const newSize = filters.size.includes(size)
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];
    setFilters((prev) => ({
      ...prev,
      size: newSize,
    }));
    updateSearchParams({ ...searchParams, size: newSize.join(',') });
  };

  // Handle material change (checkboxes for multiple selection)
  const handleMaterialChange = (material) => {
    const newMaterial = filters.material.includes(material)
      ? filters.material.filter((m) => m !== material)
      : [...filters.material, material];
    setFilters((prev) => ({
      ...prev,
      material: newMaterial,
    }));
    updateSearchParams({ ...searchParams, material: newMaterial.join(',') });
  };

  // Handle brand change (checkboxes for multiple selection)
  const handleBrandChange = (brand) => {
    const newBrand = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];
    setFilters((prev) => ({
      ...prev,
      brand: newBrand,
    }));
    updateSearchParams({ ...searchParams, brand: newBrand.join(',') });
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    updateSearchParams({ ...searchParams, [name]: value });
  };

  

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={() => handleCategoryChange(category)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full cursor-pointer transition border-gray-300 hover:scale-105 ${filters.color === color ? 'border-4 border-black' : ''}`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size Filter (Checkboxes) */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={() => handleSizeChange(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span>{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter (Checkboxes) */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        <div className="flex flex-wrap gap-2">
          {materials.map((material) => (
            <div
              key={material}
              onClick={() => handleMaterialChange(material)}
              className={`cursor-pointer px-3 py-1 border rounded-full ${filters.material.includes(material) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {material}
            </div>
          ))}
        </div>
      </div>

      {/* Brand Filter (Checkboxes) */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <div
              key={brand}
              onClick={() => handleBrandChange(brand)}
              className={`cursor-pointer px-3 py-1 border rounded-full ${filters.brand.includes(brand) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Type</label>
        {types.map((type) => (
          <div key={type} className="flex items-center mb-1">
            <input
              type="radio"
              name="type"
              value={type}
              checked={filters.type === type}
              onChange={() => setFilters({ ...filters, type })}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span>{type}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <input
          type="range"
          min="0"
          max="100"
          

          value={filters.maxPrice}
          name="maxPrice"
          onChange={handlePriceChange}
          className="w-full"
        />
        <span>Price: ${filters.minPrice} - ${filters.maxPrice}</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
