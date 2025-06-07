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

  const categories = ['Stationery', 'Textbook'];
  const colors = ['Red', 'Blue', 'Black', 'Green', 'Gray', 'White', 'Pink', 'Beige', 'Navy'];
  const sizes = ['Small', 'Medium', 'Large'];
  const materials = [
    'Notebook Paper', 'Parchment', 'Recycled Paper', 'Cardboard', 'Glossy Paper',
    'Matte Paper', 'Leather', 'Plastic', 'Metal', 'Wood',
  ];
  const brands = ['Classmate', 'Archies', 'Camlin', 'Vidya', 'Cello'];
  const types = ['SingleSided', 'DoubleSided'];

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

  useEffect(() => {
    console.log('Active Filters:', filters);
  }, [filters]);

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

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({ ...prev, category }));
    updateSearchParams({ ...filters, category });
  };

  const handleColorChange = (color) => {
    setFilters((prev) => ({ ...prev, color }));
    updateSearchParams({ ...filters, color });
  };

  const handleSizeChange = (size) => {
    const newSize = filters.size.includes(size)
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];
    setFilters((prev) => ({ ...prev, size: newSize }));
    updateSearchParams({ ...filters, size: newSize.join(',') });
  };

  const handleMaterialChange = (material) => {
    const newMaterial = filters.material.includes(material)
      ? filters.material.filter((m) => m !== material)
      : [...filters.material, material];
    setFilters((prev) => ({ ...prev, material: newMaterial }));
    updateSearchParams({ ...filters, material: newMaterial.join(',') });
  };

  const handleBrandChange = (brand) => {
    const newBrand = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];
    setFilters((prev) => ({ ...prev, brand: newBrand }));
    updateSearchParams({ ...filters, brand: newBrand.join(',') });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    updateSearchParams({ ...filters, [name]: value });
  };

  return (
    <div className="p-4 h-screen overflow-y-auto">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}
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

      {/* Color */}
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

      {/* Size */}
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

      {/* Material */}
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

      {/* Brand */}
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

      {/* Type */}
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

      {/* Price */}
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
        <span>Price: ₹{filters.minPrice} - ₹{filters.maxPrice}</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
