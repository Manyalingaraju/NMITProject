// product.js:

const products = [
  {
    "name": "Marker - Unruled 1",
    "description": "A high-quality markers with unruled pages. Great for everyday use in school or office.",
    "price": 12.52,
    "originalPrice": 16.65,
    "quantityInStock": 62,
    "sku": "MA-UN-001",
    "category": "Markers",
    "brand": "PaperMate",
    "pages": 82,
    "patterns": [
      "Unruled"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=201",
        "altText": "Markers Image 1"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Unruled by PaperMate",
    "metaDescription": "Shop high-quality markers with unruled patterns by PaperMate. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "unruled",
      "papermate",
      "stationery"
    ],
    "weight": 0.4,
    "dimensions": {
      "length": 20.5,
      "width": 19.4,
      "height": 1.6
    },
    "rating": 4.7,
    "numReviews": 31
  },
  {
    "name": "Marker - Ruled 2",
    "description": "A high-quality markers with ruled pages. Great for everyday use in school or office.",
    "price": 20.95,
    "originalPrice": 23.9,
    "quantityInStock": 76,
    "sku": "MA-RU-002",
    "category": "Markers",
    "brand": "NoteCraft",
    "pages": 186,
    "patterns": [
      "Ruled"
    ],
    "material": "Paper",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=202",
        "altText": "Markers Image 2"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Ruled by NoteCraft",
    "metaDescription": "Shop high-quality markers with ruled patterns by NoteCraft. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "ruled",
      "notecraft",
      "stationery"
    ],
    "weight": 0.79,
    "dimensions": {
      "length": 21.0,
      "width": 15.6,
      "height": 1.8
    },
    "rating": 4.2,
    "numReviews": 10
  },
  {
    "name": "Notebook - Unruled 3",
    "description": "A high-quality notebooks with unruled pages. Great for everyday use in school or office.",
    "price": 20.54,
    "originalPrice": 23.99,
    "quantityInStock": 23,
    "sku": "NO-UN-003",
    "category": "Notebooks",
    "brand": "WriteWell",
    "pages": 52,
    "patterns": [
      "Unruled"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=203",
        "altText": "Notebooks Image 3"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "notebooks"
    ],
    "metaTitle": "Notebooks - Unruled by WriteWell",
    "metaDescription": "Shop high-quality notebooks with unruled patterns by WriteWell. Ideal for school and office.",
    "metaKeywords": [
      "notebooks",
      "unruled",
      "writewell",
      "stationery"
    ],
    "weight": 0.47,
    "dimensions": {
      "length": 21.6,
      "width": 19.2,
      "height": 4.0
    },
    "rating": 4.3,
    "numReviews": 43
  },
  {
    "name": "Folder - Unruled 4",
    "description": "A high-quality folders with unruled pages. Great for everyday use in school or office.",
    "price": 14.78,
    "originalPrice": 17.25,
    "quantityInStock": 10,
    "sku": "FO-UN-004",
    "category": "Folders",
    "brand": "NoteCraft",
    "pages": 143,
    "patterns": [
      "Unruled"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=204",
        "altText": "Folders Image 4"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "folders"
    ],
    "metaTitle": "Folders - Unruled by NoteCraft",
    "metaDescription": "Shop high-quality folders with unruled patterns by NoteCraft. Ideal for school and office.",
    "metaKeywords": [
      "folders",
      "unruled",
      "notecraft",
      "stationery"
    ],
    "weight": 0.27,
    "dimensions": {
      "length": 24.9,
      "width": 11.8,
      "height": 3.3
    },
    "rating": 3.6,
    "numReviews": 18
  },
  {
    "name": "Marker - Dotted 5",
    "description": "A high-quality markers with dotted pages. Great for everyday use in school or office.",
    "price": 5.92,
    "originalPrice": 7.4,
    "quantityInStock": 61,
    "sku": "MA-DO-005",
    "category": "Markers",
    "brand": "SmoothWrite",
    "pages": 56,
    "patterns": [
      "Dotted"
    ],
    "material": "Paper",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=205",
        "altText": "Markers Image 5"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Dotted by SmoothWrite",
    "metaDescription": "Shop high-quality markers with dotted patterns by SmoothWrite. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "dotted",
      "smoothwrite",
      "stationery"
    ],
    "weight": 0.72,
    "dimensions": {
      "length": 22.7,
      "width": 13.2,
      "height": 3.2
    },
    "rating": 4.7,
    "numReviews": 19
  },
  {
    "name": "Pen - Unruled 6",
    "description": "A high-quality pens with unruled pages. Great for everyday use in school or office.",
    "price": 13.28,
    "originalPrice": 14.87,
    "quantityInStock": 69,
    "sku": "PE-UN-006",
    "category": "Pens",
    "brand": "SmoothWrite",
    "pages": 154,
    "patterns": [
      "Unruled"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=206",
        "altText": "Pens Image 6"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "pens"
    ],
    "metaTitle": "Pens - Unruled by SmoothWrite",
    "metaDescription": "Shop high-quality pens with unruled patterns by SmoothWrite. Ideal for school and office.",
    "metaKeywords": [
      "pens",
      "unruled",
      "smoothwrite",
      "stationery"
    ],
    "weight": 0.56,
    "dimensions": {
      "length": 15.8,
      "width": 13.9,
      "height": 4.7
    },
    "rating": 4.2,
    "numReviews": 18
  },
  {
    "name": "Notebook - Ruled 7",
    "description": "A high-quality notebooks with ruled pages. Great for everyday use in school or office.",
    "price": 18.1,
    "originalPrice": 19.69,
    "quantityInStock": 18,
    "sku": "NO-RU-007",
    "category": "Notebooks",
    "brand": "OfficeEssentials",
    "pages": 115,
    "patterns": [
      "Ruled"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=207",
        "altText": "Notebooks Image 7"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "notebooks"
    ],
    "metaTitle": "Notebooks - Ruled by OfficeEssentials",
    "metaDescription": "Shop high-quality notebooks with ruled patterns by OfficeEssentials. Ideal for school and office.",
    "metaKeywords": [
      "notebooks",
      "ruled",
      "officeessentials",
      "stationery"
    ],
    "weight": 0.98,
    "dimensions": {
      "length": 21.4,
      "width": 19.2,
      "height": 3.5
    },
    "rating": 4.1,
    "numReviews": 33
  },
  {
    "name": "Pen - Dotted 8",
    "description": "A high-quality pens with dotted pages. Great for everyday use in school or office.",
    "price": 7.31,
    "originalPrice": 9.32,
    "quantityInStock": 22,
    "sku": "PE-DO-008",
    "category": "Pens",
    "brand": "PaperMate",
    "pages": 54,
    "patterns": [
      "Dotted"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=208",
        "altText": "Pens Image 8"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "pens"
    ],
    "metaTitle": "Pens - Dotted by PaperMate",
    "metaDescription": "Shop high-quality pens with dotted patterns by PaperMate. Ideal for school and office.",
    "metaKeywords": [
      "pens",
      "dotted",
      "papermate",
      "stationery"
    ],
    "weight": 0.22,
    "dimensions": {
      "length": 20.6,
      "width": 13.5,
      "height": 1.3
    },
    "rating": 4.5,
    "numReviews": 6
  },
  {
    "name": "Notebook - Ruled 9",
    "description": "A high-quality notebooks with ruled pages. Great for everyday use in school or office.",
    "price": 11.46,
    "originalPrice": 15.57,
    "quantityInStock": 54,
    "sku": "NO-RU-009",
    "category": "Notebooks",
    "brand": "OfficeEssentials",
    "pages": 210,
    "patterns": [
      "Ruled"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=209",
        "altText": "Notebooks Image 9"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "notebooks"
    ],
    "metaTitle": "Notebooks - Ruled by OfficeEssentials",
    "metaDescription": "Shop high-quality notebooks with ruled patterns by OfficeEssentials. Ideal for school and office.",
    "metaKeywords": [
      "notebooks",
      "ruled",
      "officeessentials",
      "stationery"
    ],
    "weight": 0.35,
    "dimensions": {
      "length": 20.3,
      "width": 19.8,
      "height": 4.8
    },
    "rating": 4.6,
    "numReviews": 33
  },
  {
    "name": "Sticky Note - Dotted 10",
    "description": "A high-quality sticky notes with dotted pages. Great for everyday use in school or office.",
    "price": 12.59,
    "originalPrice": 16.25,
    "quantityInStock": 68,
    "sku": "ST-DO-010",
    "category": "Sticky Notes",
    "brand": "NoteCraft",
    "pages": 209,
    "patterns": [
      "Dotted"
    ],
    "material": "Paper",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=210",
        "altText": "Sticky Notes Image 10"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "sticky notes"
    ],
    "metaTitle": "Sticky Notes - Dotted by NoteCraft",
    "metaDescription": "Shop high-quality sticky notes with dotted patterns by NoteCraft. Ideal for school and office.",
    "metaKeywords": [
      "sticky notes",
      "dotted",
      "notecraft",
      "stationery"
    ],
    "weight": 0.65,
    "dimensions": {
      "length": 21.3,
      "width": 11.3,
      "height": 1.8
    },
    "rating": 4.4,
    "numReviews": 33
  },
  {
    "name": "Folder - Grid 11",
    "description": "A high-quality folders with grid pages. Great for everyday use in school or office.",
    "price": 16.41,
    "originalPrice": 19.38,
    "quantityInStock": 81,
    "sku": "FO-GR-011",
    "category": "Folders",
    "brand": "NoteCraft",
    "pages": 214,
    "patterns": [
      "Grid"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=211",
        "altText": "Folders Image 11"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "folders"
    ],
    "metaTitle": "Folders - Grid by NoteCraft",
    "metaDescription": "Shop high-quality folders with grid patterns by NoteCraft. Ideal for school and office.",
    "metaKeywords": [
      "folders",
      "grid",
      "notecraft",
      "stationery"
    ],
    "weight": 0.28,
    "dimensions": {
      "length": 17.4,
      "width": 17.1,
      "height": 2.5
    },
    "rating": 3.8,
    "numReviews": 8
  },
  {
    "name": "Folder - Ruled 12",
    "description": "A high-quality folders with ruled pages. Great for everyday use in school or office.",
    "price": 5.69,
    "originalPrice": 7.99,
    "quantityInStock": 76,
    "sku": "FO-RU-012",
    "category": "Folders",
    "brand": "WriteWell",
    "pages": 215,
    "patterns": [
      "Ruled"
    ],
    "material": "Plastic",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=212",
        "altText": "Folders Image 12"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "folders"
    ],
    "metaTitle": "Folders - Ruled by WriteWell",
    "metaDescription": "Shop high-quality folders with ruled patterns by WriteWell. Ideal for school and office.",
    "metaKeywords": [
      "folders",
      "ruled",
      "writewell",
      "stationery"
    ],
    "weight": 0.94,
    "dimensions": {
      "length": 18.0,
      "width": 11.2,
      "height": 3.7
    },
    "rating": 4.6,
    "numReviews": 9
  },
  {
    "name": "Folder - Unruled 13",
    "description": "A high-quality folders with unruled pages. Great for everyday use in school or office.",
    "price": 8.96,
    "originalPrice": 12.22,
    "quantityInStock": 88,
    "sku": "FO-UN-013",
    "category": "Folders",
    "brand": "SmoothWrite",
    "pages": 133,
    "patterns": [
      "Unruled"
    ],
    "material": "Plastic",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=213",
        "altText": "Folders Image 13"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "folders"
    ],
    "metaTitle": "Folders - Unruled by SmoothWrite",
    "metaDescription": "Shop high-quality folders with unruled patterns by SmoothWrite. Ideal for school and office.",
    "metaKeywords": [
      "folders",
      "unruled",
      "smoothwrite",
      "stationery"
    ],
    "weight": 0.73,
    "dimensions": {
      "length": 18.5,
      "width": 13.5,
      "height": 1.2
    },
    "rating": 4.1,
    "numReviews": 5
  },
  {
    "name": "Pen - Unruled 14",
    "description": "A high-quality pens with unruled pages. Great for everyday use in school or office.",
    "price": 17.13,
    "originalPrice": 22.0,
    "quantityInStock": 18,
    "sku": "PE-UN-014",
    "category": "Pens",
    "brand": "WriteWell",
    "pages": 54,
    "patterns": [
      "Unruled"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=214",
        "altText": "Pens Image 14"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "pens"
    ],
    "metaTitle": "Pens - Unruled by WriteWell",
    "metaDescription": "Shop high-quality pens with unruled patterns by WriteWell. Ideal for school and office.",
    "metaKeywords": [
      "pens",
      "unruled",
      "writewell",
      "stationery"
    ],
    "weight": 0.7,
    "dimensions": {
      "length": 23.7,
      "width": 11.5,
      "height": 3.3
    },
    "rating": 4.9,
    "numReviews": 39
  },
  {
    "name": "Sticky Note - Grid 15",
    "description": "A high-quality sticky notes with grid pages. Great for everyday use in school or office.",
    "price": 23.18,
    "originalPrice": 27.9,
    "quantityInStock": 86,
    "sku": "ST-GR-015",
    "category": "Sticky Notes",
    "brand": "PaperMate",
    "pages": 150,
    "patterns": [
      "Grid"
    ],
    "material": "Paper",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=215",
        "altText": "Sticky Notes Image 15"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "sticky notes"
    ],
    "metaTitle": "Sticky Notes - Grid by PaperMate",
    "metaDescription": "Shop high-quality sticky notes with grid patterns by PaperMate. Ideal for school and office.",
    "metaKeywords": [
      "sticky notes",
      "grid",
      "papermate",
      "stationery"
    ],
    "weight": 0.71,
    "dimensions": {
      "length": 22.8,
      "width": 11.4,
      "height": 4.6
    },
    "rating": 4.2,
    "numReviews": 20
  },
  {
    "name": "Pen - Ruled 16",
    "description": "A high-quality pens with ruled pages. Great for everyday use in school or office.",
    "price": 20.53,
    "originalPrice": 21.63,
    "quantityInStock": 77,
    "sku": "PE-RU-016",
    "category": "Pens",
    "brand": "WriteWell",
    "pages": 223,
    "patterns": [
      "Ruled"
    ],
    "material": "Plastic",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=216",
        "altText": "Pens Image 16"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "pens"
    ],
    "metaTitle": "Pens - Ruled by WriteWell",
    "metaDescription": "Shop high-quality pens with ruled patterns by WriteWell. Ideal for school and office.",
    "metaKeywords": [
      "pens",
      "ruled",
      "writewell",
      "stationery"
    ],
    "weight": 0.82,
    "dimensions": {
      "length": 20.8,
      "width": 16.2,
      "height": 3.6
    },
    "rating": 4.6,
    "numReviews": 26
  },
  {
    "name": "Pen - Dotted 17",
    "description": "A high-quality pens with dotted pages. Great for everyday use in school or office.",
    "price": 14.41,
    "originalPrice": 16.47,
    "quantityInStock": 40,
    "sku": "PE-DO-017",
    "category": "Pens",
    "brand": "NoteCraft",
    "pages": 201,
    "patterns": [
      "Dotted"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=217",
        "altText": "Pens Image 17"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "pens"
    ],
    "metaTitle": "Pens - Dotted by NoteCraft",
    "metaDescription": "Shop high-quality pens with dotted patterns by NoteCraft. Ideal for school and office.",
    "metaKeywords": [
      "pens",
      "dotted",
      "notecraft",
      "stationery"
    ],
    "weight": 0.55,
    "dimensions": {
      "length": 21.6,
      "width": 13.1,
      "height": 2.6
    },
    "rating": 5.0,
    "numReviews": 40
  },
  {
    "name": "Marker - Ruled 18",
    "description": "A high-quality markers with ruled pages. Great for everyday use in school or office.",
    "price": 16.25,
    "originalPrice": 17.41,
    "quantityInStock": 32,
    "sku": "MA-RU-018",
    "category": "Markers",
    "brand": "OfficeEssentials",
    "pages": 117,
    "patterns": [
      "Ruled"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=218",
        "altText": "Markers Image 18"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Ruled by OfficeEssentials",
    "metaDescription": "Shop high-quality markers with ruled patterns by OfficeEssentials. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "ruled",
      "officeessentials",
      "stationery"
    ],
    "weight": 0.78,
    "dimensions": {
      "length": 15.3,
      "width": 10.4,
      "height": 1.8
    },
    "rating": 4.1,
    "numReviews": 12
  },
  {
    "name": "Notebook - Unruled 19",
    "description": "A high-quality notebooks with unruled pages. Great for everyday use in school or office.",
    "price": 8.94,
    "originalPrice": 12.95,
    "quantityInStock": 77,
    "sku": "NO-UN-019",
    "category": "Notebooks",
    "brand": "OfficeEssentials",
    "pages": 56,
    "patterns": [
      "Unruled"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=219",
        "altText": "Notebooks Image 19"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "notebooks"
    ],
    "metaTitle": "Notebooks - Unruled by OfficeEssentials",
    "metaDescription": "Shop high-quality notebooks with unruled patterns by OfficeEssentials. Ideal for school and office.",
    "metaKeywords": [
      "notebooks",
      "unruled",
      "officeessentials",
      "stationery"
    ],
    "weight": 0.57,
    "dimensions": {
      "length": 24.4,
      "width": 15.8,
      "height": 4.5
    },
    "rating": 4.2,
    "numReviews": 31
  },
  {
    "name": "Marker - Grid 20",
    "description": "A high-quality markers with grid pages. Great for everyday use in school or office.",
    "price": 7.44,
    "originalPrice": 11.9,
    "quantityInStock": 31,
    "sku": "MA-GR-020",
    "category": "Markers",
    "brand": "SmoothWrite",
    "pages": 222,
    "patterns": [
      "Grid"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=220",
        "altText": "Markers Image 20"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Grid by SmoothWrite",
    "metaDescription": "Shop high-quality markers with grid patterns by SmoothWrite. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "grid",
      "smoothwrite",
      "stationery"
    ],
    "weight": 0.36,
    "dimensions": {
      "length": 17.8,
      "width": 14.4,
      "height": 4.3
    },
    "rating": 4.2,
    "numReviews": 42
  },
  {
    "name": "Folder - Ruled 21",
    "description": "A high-quality folders with ruled pages. Great for everyday use in school or office.",
    "price": 10.41,
    "originalPrice": 11.99,
    "quantityInStock": 89,
    "sku": "FO-RU-021",
    "category": "Folders",
    "brand": "WriteWell",
    "pages": 109,
    "patterns": [
      "Ruled"
    ],
    "material": "Plastic",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=221",
        "altText": "Folders Image 21"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "folders"
    ],
    "metaTitle": "Folders - Ruled by WriteWell",
    "metaDescription": "Shop high-quality folders with ruled patterns by WriteWell. Ideal for school and office.",
    "metaKeywords": [
      "folders",
      "ruled",
      "writewell",
      "stationery"
    ],
    "weight": 0.66,
    "dimensions": {
      "length": 24.0,
      "width": 11.1,
      "height": 3.4
    },
    "rating": 4.1,
    "numReviews": 9
  },
  {
    "name": "Pen - Dotted 22",
    "description": "A high-quality pens with dotted pages. Great for everyday use in school or office.",
    "price": 12.49,
    "originalPrice": 14.17,
    "quantityInStock": 26,
    "sku": "PE-DO-022",
    "category": "Pens",
    "brand": "PaperMate",
    "pages": 95,
    "patterns": [
      "Dotted"
    ],
    "material": "Cardboard",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=222",
        "altText": "Pens Image 22"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "pens"
    ],
    "metaTitle": "Pens - Dotted by PaperMate",
    "metaDescription": "Shop high-quality pens with dotted patterns by PaperMate. Ideal for school and office.",
    "metaKeywords": [
      "pens",
      "dotted",
      "papermate",
      "stationery"
    ],
    "weight": 0.92,
    "dimensions": {
      "length": 19.6,
      "width": 18.5,
      "height": 1.5
    },
    "rating": 4.5,
    "numReviews": 30
  },
  {
    "name": "Marker - Unruled 23",
    "description": "A high-quality markers with unruled pages. Great for everyday use in school or office.",
    "price": 6.4,
    "originalPrice": 9.87,
    "quantityInStock": 70,
    "sku": "MA-UN-023",
    "category": "Markers",
    "brand": "PaperMate",
    "pages": 143,
    "patterns": [
      "Unruled"
    ],
    "material": "Leatherette",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=223",
        "altText": "Markers Image 23"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Unruled by PaperMate",
    "metaDescription": "Shop high-quality markers with unruled patterns by PaperMate. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "unruled",
      "papermate",
      "stationery"
    ],
    "weight": 0.51,
    "dimensions": {
      "length": 22.7,
      "width": 18.5,
      "height": 4.4
    },
    "rating": 4.9,
    "numReviews": 6
  },
  {
    "name": "Marker - Dotted 24",
    "description": "A high-quality markers with dotted pages. Great for everyday use in school or office.",
    "price": 8.5,
    "originalPrice": 12.5,
    "quantityInStock": 23,
    "sku": "MA-DO-024",
    "category": "Markers",
    "brand": "WriteWell",
    "pages": 129,
    "patterns": [
      "Dotted"
    ],
    "material": "Plastic",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=224",
        "altText": "Markers Image 24"
      }
    ],
    "isFeatured": true,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "markers"
    ],
    "metaTitle": "Markers - Dotted by WriteWell",
    "metaDescription": "Shop high-quality markers with dotted patterns by WriteWell. Ideal for school and office.",
    "metaKeywords": [
      "markers",
      "dotted",
      "writewell",
      "stationery"
    ],
    "weight": 0.48,
    "dimensions": {
      "length": 15.7,
      "width": 11.6,
      "height": 3.9
    },
    "rating": 4.3,
    "numReviews": 11
  },
  {
    "name": "Notebook - Grid 25",
    "description": "A high-quality notebooks with grid pages. Great for everyday use in school or office.",
    "price": 12.98,
    "originalPrice": 14.9,
    "quantityInStock": 88,
    "sku": "NO-GR-025",
    "category": "Notebooks",
    "brand": "SmoothWrite",
    "pages": 124,
    "patterns": [
      "Grid"
    ],
    "material": "Plastic",
    "images": [
      {
        "url": "https://picsum.photos/500/500?random=225",
        "altText": "Notebooks Image 25"
      }
    ],
    "isFeatured": false,
    "isPublished": true,
    "tags": [
      "stationery",
      "school",
      "office",
      "notebooks"
    ],
    "metaTitle": "Notebooks - Grid by SmoothWrite",
    "metaDescription": "Shop high-quality notebooks with grid patterns by SmoothWrite. Ideal for school and office.",
    "metaKeywords": [
      "notebooks",
      "grid",
      "smoothwrite",
      "stationery"
    ],
    "weight": 0.8,
    "dimensions": {
      "length": 19.9,
      "width": 15.5,
      "height": 3.4
    },
    "rating": 4.4,
    "numReviews": 43
  }
];

module.exports = products;
