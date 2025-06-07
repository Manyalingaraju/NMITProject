import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/150?random=1" },
      { url: "https://picsum.photos/150?random=2" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSizesChange = (e) => {
    const arr = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
    setProductData((prev) => ({ ...prev, sizes: arr }));
  };

  const handleColorsChange = (e) => {
    const arr = e.target.value.split(",").map((c) => c.trim()).filter(Boolean);
    setProductData((prev) => ({ ...prev, colors: arr }));
  };

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    console.log("Selected image files:", files);

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
    }));

    setProductData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product Data:", productData);
    alert("Product updated!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes <span className="text-sm text-gray-500">(comma-separated)</span>
          </label>
          <input
            type="text"
            value={productData.sizes.join(", ")}
            onChange={handleSizesChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="e.g. S, M, L"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors <span className="text-sm text-gray-500">(comma-separated)</span>
          </label>
          <input
            type="text"
            value={productData.colors.join(", ")}
            onChange={handleColorsChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="e.g. Red, Blue, Black"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image(s)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImage}
            className="file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-gray-100 file:text-gray-700"
          />
        </div>

        {productData.images.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {productData.images.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={`Preview ${idx + 1}`}
                className="w-24 h-24 object-cover border rounded-md"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
