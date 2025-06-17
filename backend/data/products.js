const products = [
  {
    "name": "Notebook - Softcover - 200 Pages",
    "sku": "NO-CA-001",
    "description": "High-quality notebook made with Softcover.",
    "price": 35,
    "originalPrice": 35,
    "quantityInStock": 190,
    "category": "Notebooks",
    "brand": "Chandra's",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/chandrasBook.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.8,
    "numReviews": 123
  },
  {
    "name": "Blue books ",
    "sku": "NO-LU-002",
    "description": "High-quality notebook made with Plastic.",
    "price": 10,
    "originalPrice": 12,
    "quantityInStock": 76,
    "category": "Notebooks",
    "brand": "Chandar's",
    "material": "Paper",
    "images": [
      {
        "url": "http://localhost:9000/assets/BlueBook.png",
        "altText": "Bluebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.3,
    "numReviews": 116
  },
  {
    "name": "Notebook - Paper - 100 Pages",
    "sku": "NO-LU-003",
    "description": "High-quality notebook made with Plastic.",
    "price": 25,
    "originalPrice": 25,
    "quantityInStock": 191,
    "category": "Notebooks",
    "brand": "Chandra's",
    "material": "softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/chandrasBook.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 3.8,
    "numReviews": 174
  },
  {
    "name": "Notebook - Softcover - 100 Pages",
    "sku": "NO-LU-004",
    "description": "High-quality notebook made with Softcover.",
    "price": 40,
    "originalPrice": 45,
    "quantityInStock": 51,
    "category": "Notebooks",
    "brand": "Classmate",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/classmate100.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 3.8,
    "numReviews": 5
  },
  {
    "name": "Notebook - Cardboard - 50 Pages",
    "sku": "NO-FA-005",
    "description": "High-quality notebook made with Cardboard.",
    "price": 65,
    "originalPrice": 68,
    "quantityInStock": 159,
    "category": "Notebooks",
    "brand": "Faber-Castell",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/cardboard.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.6,
    "numReviews": 15
  },
  {
    "name": "Permanent Marker - Plastic ",
    "sku": "MA-FA-006",
    "description": "High-quality permanent marker made with Plastic.",
    "price": 20,
    "originalPrice": 25,
    "quantityInStock": 61,
    "category": "Markers",
    "brand": "Faber-Castell",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/permanentmarker.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 3.7,
    "numReviews": 52
  },
  {
    "name": "Sticky Notes - softcover - 50 Pages",
    "sku": "ST-CL-007",
    "description": "High-quality sticky notes made with Plastic.",
    "price": 25.27,
    "originalPrice": 29.17,
    "quantityInStock": 87,
    "category": "Sticky Notes",
    "brand": "Classmate",
    "material": "softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/stickynote.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.0,
    "numReviews": 194
  },
  {
    "name": "Permanent Marker - Hardcover - 100 Pages",
    "sku": "MA-FA-008",
    "description": "High-quality permanent marker made with Hardcover.",
    "price": 5.23,
    "originalPrice": 8.45,
    "quantityInStock": 58,
    "category": "Markers",
    "brand": "Faber-Castell",
    "material": "Hardcover",
    "images": [
      {
        "url": "",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 5.0,
    "numReviews": 147
  },
  {
    "name": "Permanent Marker - Cardboard - 200 Pages",
    "sku": "MA-CL-009",
    "description": "High-quality permanent marker made with Cardboard.",
    "price": 21.59,
    "originalPrice": 31.37,
    "quantityInStock": 51,
    "category": "Markers",
    "brand": "Classmate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 197
  },
  {
    "name": "Permanent Marker - Plastic - 150 Pages",
    "sku": "MA-CA-010",
    "description": "High-quality permanent marker made with Plastic.",
    "price": 12.23,
    "originalPrice": 19.69,
    "quantityInStock": 185,
    "category": "Markers",
    "brand": "Camlin",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 3.9,
    "numReviews": 18
  },
  {
    "name": "Notebook - Softcover - 200 Pages",
    "sku": "NO-LU-011",
    "description": "High-quality notebook made with Softcover.",
    "price": 12.23,
    "originalPrice": 20.42,
    "quantityInStock": 190,
    "category": "Notebooks",
    "brand": "Luxor",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.4,
    "numReviews": 30
  },
  {
    "name": "Document Folder - Cardboard - 50 Pages",
    "sku": "FO-CL-012",
    "description": "High-quality document folder made with Cardboard.",
    "price": 23.41,
    "originalPrice": 27.07,
    "quantityInStock": 129,
    "category": "Folders",
    "brand": "Classmate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Document Folder Image"
      }
    ],
    "isPublished": true,
    "rating": 4.0,
    "numReviews": 82
  },
  {
    "name": "Permanent Marker - Plastic - 100 Pages",
    "sku": "MA-LU-013",
    "description": "High-quality permanent marker made with Plastic.",
    "price": 19.89,
    "originalPrice": 23.3,
    "quantityInStock": 82,
    "category": "Markers",
    "brand": "Luxor",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 5.0,
    "numReviews": 107
  },
  {
    "name": "Sticky Notes - Softcover - 50 Pages",
    "sku": "ST-CA-014",
    "description": "High-quality sticky notes made with Softcover.",
    "price": 11.7,
    "originalPrice": 19.56,
    "quantityInStock": 131,
    "category": "Sticky Notes",
    "brand": "Camlin",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.0,
    "numReviews": 53
  },
  {
    "name": "Ball Pen - Hardcover - 200 Pages",
    "sku": "PE-PA-015",
    "description": "High-quality ball pen made with Hardcover.",
    "price": 26.32,
    "originalPrice": 32.65,
    "quantityInStock": 137,
    "category": "Pens",
    "brand": "PaperMate",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.9,
    "numReviews": 68
  },
  {
    "name": "Ball Pen - Cardboard - 200 Pages",
    "sku": "PE-CL-016",
    "description": "High-quality ball pen made with Cardboard.",
    "price": 14.99,
    "originalPrice": 24.85,
    "quantityInStock": 106,
    "category": "Pens",
    "brand": "Classmate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.9,
    "numReviews": 21
  },
  {
    "name": "Ball Pen - Softcover - 50 Pages",
    "sku": "PE-PA-017",
    "description": "High-quality ball pen made with Softcover.",
    "price": 27.79,
    "originalPrice": 35.04,
    "quantityInStock": 195,
    "category": "Pens",
    "brand": "PaperMate",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.8,
    "numReviews": 183
  },
  {
    "name": "Notebook - Hardcover - 50 Pages",
    "sku": "NO-CL-018",
    "description": "High-quality notebook made with Hardcover.",
    "price": 17.73,
    "originalPrice": 22.76,
    "quantityInStock": 150,
    "category": "Notebooks",
    "brand": "Classmate",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 3.5,
    "numReviews": 42
  },
  {
    "name": "Notebook - Plastic - 200 Pages",
    "sku": "NO-LU-019",
    "description": "High-quality notebook made with Plastic.",
    "price": 8.91,
    "originalPrice": 12.55,
    "quantityInStock": 93,
    "category": "Notebooks",
    "brand": "Luxor",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.3,
    "numReviews": 64
  },
  {
    "name": "Sticky Notes - Softcover - 100 Pages",
    "sku": "ST-FA-020",
    "description": "High-quality sticky notes made with Softcover.",
    "price": 12.65,
    "originalPrice": 16.83,
    "quantityInStock": 59,
    "category": "Sticky Notes",
    "brand": "Faber-Castell",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 168
  },
  {
    "name": "Sticky Notes - Plastic - 150 Pages",
    "sku": "ST-PA-021",
    "description": "High-quality sticky notes made with Plastic.",
    "price": 29.24,
    "originalPrice": 35.04,
    "quantityInStock": 96,
    "category": "Sticky Notes",
    "brand": "PaperMate",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.5,
    "numReviews": 29
  },
  {
    "name": "Sticky Notes - Hardcover - 200 Pages",
    "sku": "ST-LU-022",
    "description": "High-quality sticky notes made with Hardcover.",
    "price": 20.35,
    "originalPrice": 23.59,
    "quantityInStock": 114,
    "category": "Sticky Notes",
    "brand": "Luxor",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.1,
    "numReviews": 64
  },
  {
    "name": "Permanent Marker - Hardcover - 50 Pages",
    "sku": "MA-PA-023",
    "description": "High-quality permanent marker made with Hardcover.",
    "price": 9.32,
    "originalPrice": 17.84,
    "quantityInStock": 149,
    "category": "Markers",
    "brand": "PaperMate",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 159
  },
  {
    "name": "Ball Pen - Plastic - 150 Pages",
    "sku": "PE-CA-024",
    "description": "High-quality ball pen made with Plastic.",
    "price": 16.23,
    "originalPrice": 21.02,
    "quantityInStock": 65,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.7,
    "numReviews": 151
  },
  {
    "name": "Ball Pen - Plastic - 50 Pages",
    "sku": "PE-LU-025",
    "description": "High-quality ball pen made with Plastic.",
    "price": 11.39,
    "originalPrice": 19.97,
    "quantityInStock": 98,
    "category": "Pens",
    "brand": "Luxor",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 137
  },
  {
    "name": "Ball Pen - Plastic - 100 Pages",
    "sku": "PE-CA-026",
    "description": "High-quality ball pen made with Plastic.",
    "price": 8.94,
    "originalPrice": 14.05,
    "quantityInStock": 96,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.9,
    "numReviews": 104
  },
  {
    "name": "Ball Pen - Plastic - 150 Pages",
    "sku": "PE-CA-027",
    "description": "High-quality ball pen made with Plastic.",
    "price": 20.84,
    "originalPrice": 27.65,
    "quantityInStock": 170,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.3,
    "numReviews": 30
  },
  {
    "name": "Ball Pen - Hardcover - 100 Pages",
    "sku": "PE-CA-028",
    "description": "High-quality ball pen made with Hardcover.",
    "price": 17.72,
    "originalPrice": 25.6,
    "quantityInStock": 71,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.5,
    "numReviews": 74
  },
  {
    "name": "Document Folder - Hardcover - 100 Pages",
    "sku": "FO-LU-029",
    "description": "High-quality document folder made with Hardcover.",
    "price": 18.68,
    "originalPrice": 26.09,
    "quantityInStock": 160,
    "category": "Folders",
    "brand": "Luxor",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Document Folder Image"
      }
    ],
    "isPublished": true,
    "rating": 4.9,
    "numReviews": 168
  },
  {
    "name": "Ball Pen - Softcover - 100 Pages",
    "sku": "PE-CA-030",
    "description": "High-quality ball pen made with Softcover.",
    "price": 20.92,
    "originalPrice": 30.51,
    "quantityInStock": 114,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.4,
    "numReviews": 167
  },
  {
    "name": "Permanent Marker - Softcover - 150 Pages",
    "sku": "MA-FA-031",
    "description": "High-quality permanent marker made with Softcover.",
    "price": 17.54,
    "originalPrice": 21.87,
    "quantityInStock": 102,
    "category": "Markers",
    "brand": "Faber-Castell",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 4.9,
    "numReviews": 51
  },
  {
    "name": "Notebook - Cardboard - 50 Pages",
    "sku": "NO-FA-032",
    "description": "High-quality notebook made with Cardboard.",
    "price": 25.78,
    "originalPrice": 28.16,
    "quantityInStock": 146,
    "category": "Notebooks",
    "brand": "Faber-Castell",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 29
  },
  {
    "name": "Sticky Notes - Cardboard - 200 Pages",
    "sku": "ST-PA-033",
    "description": "High-quality sticky notes made with Cardboard.",
    "price": 28.98,
    "originalPrice": 37.98,
    "quantityInStock": 187,
    "category": "Sticky Notes",
    "brand": "PaperMate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 92
  },
  {
    "name": "Sticky Notes - Hardcover - 200 Pages",
    "sku": "ST-CA-034",
    "description": "High-quality sticky notes made with Hardcover.",
    "price": 17.41,
    "originalPrice": 26.55,
    "quantityInStock": 90,
    "category": "Sticky Notes",
    "brand": "Camlin",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 121
  },
  {
    "name": "Ball Pen - Cardboard - 200 Pages",
    "sku": "PE-LU-035",
    "description": "High-quality ball pen made with Cardboard.",
    "price": 20.31,
    "originalPrice": 29.93,
    "quantityInStock": 69,
    "category": "Pens",
    "brand": "Luxor",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 105
  },
  {
    "name": "Sticky Notes - Softcover - 150 Pages",
    "sku": "ST-CL-036",
    "description": "High-quality sticky notes made with Softcover.",
    "price": 5.28,
    "originalPrice": 14.0,
    "quantityInStock": 184,
    "category": "Sticky Notes",
    "brand": "Classmate",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.3,
    "numReviews": 48
  },
  {
    "name": "Ball Pen - Plastic - 100 Pages",
    "sku": "PE-PA-037",
    "description": "High-quality ball pen made with Plastic.",
    "price": 20.5,
    "originalPrice": 30.18,
    "quantityInStock": 108,
    "category": "Pens",
    "brand": "PaperMate",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.6,
    "numReviews": 122
  },
  {
    "name": "Ball Pen - Cardboard - 100 Pages",
    "sku": "PE-PA-038",
    "description": "High-quality ball pen made with Cardboard.",
    "price": 23.73,
    "originalPrice": 32.04,
    "quantityInStock": 199,
    "category": "Pens",
    "brand": "PaperMate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.0,
    "numReviews": 19
  },
  {
    "name": "Ball Pen - Plastic - 50 Pages",
    "sku": "PE-CA-039",
    "description": "High-quality ball pen made with Plastic.",
    "price": 23.95,
    "originalPrice": 26.96,
    "quantityInStock": 129,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial1.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.9,
    "numReviews": 49
  },
  {
    "name": "Sticky Notes - Plastic - 150 Pages",
    "sku": "ST-LU-040",
    "description": "High-quality sticky notes made with Plastic.",
    "price": 15.63,
    "originalPrice": 21.11,
    "quantityInStock": 67,
    "category": "Sticky Notes",
    "brand": "Luxor",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 24
  },
  {
    "name": "Document Folder - Hardcover - 100 Pages",
    "sku": "FO-LU-041",
    "description": "High-quality document folder made with Hardcover.",
    "price": 8.56,
    "originalPrice": 11.51,
    "quantityInStock": 53,
    "category": "Folders",
    "brand": "Luxor",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Document Folder Image"
      }
    ],
    "isPublished": true,
    "rating": 4.3,
    "numReviews": 196
  },
  {
    "name": "Permanent Marker - Softcover - 100 Pages",
    "sku": "MA-LU-042",
    "description": "High-quality permanent marker made with Softcover.",
    "price": 24.97,
    "originalPrice": 30.82,
    "quantityInStock": 164,
    "category": "Markers",
    "brand": "Luxor",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Permanent Marker Image"
      }
    ],
    "isPublished": true,
    "rating": 4.6,
    "numReviews": 75
  },
  {
    "name": "Ball Pen - Softcover - 50 Pages",
    "sku": "PE-PA-043",
    "description": "High-quality ball pen made with Softcover.",
    "price": 23.47,
    "originalPrice": 27.53,
    "quantityInStock": 107,
    "category": "Pens",
    "brand": "PaperMate",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.8,
    "numReviews": 128
  },
  {
    "name": "Sticky Notes - Cardboard - 150 Pages",
    "sku": "ST-CL-044",
    "description": "High-quality sticky notes made with Cardboard.",
    "price": 11.24,
    "originalPrice": 13.28,
    "quantityInStock": 92,
    "category": "Sticky Notes",
    "brand": "Classmate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 3.7,
    "numReviews": 21
  },
  {
    "name": "Notebook - Softcover - 200 Pages",
    "sku": "NO-CL-045",
    "description": "High-quality notebook made with Softcover.",
    "price": 28.29,
    "originalPrice": 36.7,
    "quantityInStock": 146,
    "category": "Notebooks",
    "brand": "Classmate",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.1,
    "numReviews": 89
  },
  {
    "name": "Notebook - Cardboard - 100 Pages",
    "sku": "NO-PA-046",
    "description": "High-quality notebook made with Cardboard.",
    "price": 7.11,
    "originalPrice": 10.94,
    "quantityInStock": 51,
    "category": "Notebooks",
    "brand": "PaperMate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.5,
    "numReviews": 19
  },
  {
    "name": "Notebook - Cardboard - 100 Pages",
    "sku": "NO-CL-047",
    "description": "High-quality notebook made with Cardboard.",
    "price": 18.91,
    "originalPrice": 25.76,
    "quantityInStock": 138,
    "category": "Notebooks",
    "brand": "Classmate",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.0,
    "numReviews": 142
  },
  {
    "name": "Sticky Notes - Cardboard - 100 Pages",
    "sku": "ST-LU-048",
    "description": "High-quality sticky notes made with Cardboard.",
    "price": 14.72,
    "originalPrice": 19.53,
    "quantityInStock": 71,
    "category": "Sticky Notes",
    "brand": "Luxor",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.6,
    "numReviews": 172
  },
  {
    "name": "Document Folder - Softcover - 50 Pages",
    "sku": "FO-FA-049",
    "description": "High-quality document folder made with Softcover.",
    "price": 15.72,
    "originalPrice": 25.36,
    "quantityInStock": 166,
    "category": "Folders",
    "brand": "Faber-Castell",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Document Folder Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 169
  },
  {
    "name": "Document Folder - Plastic - 100 Pages",
    "sku": "FO-CL-050",
    "description": "High-quality document folder made with Plastic.",
    "price": 17.78,
    "originalPrice": 20.19,
    "quantityInStock": 98,
    "category": "Folders",
    "brand": "Classmate",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Document Folder Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 31
  },
  {
    "name": "Ball Pen - Cardboard - 200 Pages",
    "sku": "PE-CA-051",
    "description": "High-quality ball pen made with Cardboard.",
    "price": 19.57,
    "originalPrice": 23.08,
    "quantityInStock": 117,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.4,
    "numReviews": 78
  },
  {
    "name": "Notebook - Hardcover - 100 Pages",
    "sku": "NO-CA-052",
    "description": "High-quality notebook made with Hardcover.",
    "price": 28.76,
    "originalPrice": 32.8,
    "quantityInStock": 143,
    "category": "Notebooks",
    "brand": "Camlin",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 115
  },
  {
    "name": "Notebook - Hardcover - 50 Pages",
    "sku": "NO-FA-053",
    "description": "High-quality notebook made with Hardcover.",
    "price": 11.01,
    "originalPrice": 18.73,
    "quantityInStock": 101,
    "category": "Notebooks",
    "brand": "Faber-Castell",
    "material": "Hardcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.3,
    "numReviews": 44
  },
  {
    "name": "Ball Pen - Plastic - 100 Pages",
    "sku": "PE-CL-054",
    "description": "High-quality ball pen made with Plastic.",
    "price": 16.61,
    "originalPrice": 26.31,
    "quantityInStock": 161,
    "category": "Pens",
    "brand": "Classmate",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.7,
    "numReviews": 19
  },
  {
    "name": "Notebook - Plastic - 100 Pages",
    "sku": "NO-CL-055",
    "description": "High-quality notebook made with Plastic.",
    "price": 29.36,
    "originalPrice": 33.42,
    "quantityInStock": 90,
    "category": "Notebooks",
    "brand": "Classmate",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 3.9,
    "numReviews": 143
  },
  {
    "name": "Notebook - Plastic - 200 Pages",
    "sku": "NO-CL-056",
    "description": "High-quality notebook made with Plastic.",
    "price": 7.03,
    "originalPrice": 16.83,
    "quantityInStock": 89,
    "category": "Notebooks",
    "brand": "Classmate",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Notebook Image"
      }
    ],
    "isPublished": true,
    "rating": 4.4,
    "numReviews": 76
  },
  {
    "name": "Ball Pen - Cardboard - 100 Pages",
    "sku": "PE-CA-057",
    "description": "High-quality ball pen made with Cardboard.",
    "price": 6.97,
    "originalPrice": 12.9,
    "quantityInStock": 59,
    "category": "Pens",
    "brand": "Camlin",
    "material": "Cardboard",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 4.8,
    "numReviews": 74
  },
  {
    "name": "Sticky Notes - Plastic - 200 Pages",
    "sku": "ST-LU-058",
    "description": "High-quality sticky notes made with Plastic.",
    "price": 21.37,
    "originalPrice": 25.63,
    "quantityInStock": 70,
    "category": "Sticky Notes",
    "brand": "Luxor",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.2,
    "numReviews": 88
  },
  {
    "name": "Ball Pen - Plastic - 50 Pages",
    "sku": "PE-LU-059",
    "description": "High-quality ball pen made with Plastic.",
    "price": 28.42,
    "originalPrice": 33.08,
    "quantityInStock": 178,
    "category": "Pens",
    "brand": "Luxor",
    "material": "Plastic",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Ball Pen Image"
      }
    ],
    "isPublished": true,
    "rating": 3.7,
    "numReviews": 40
  },
  {
    "name": "Sticky Notes - Softcover - 100 Pages",
    "sku": "ST-CL-060",
    "description": "High-quality sticky notes made with Softcover.",
    "price": 12.96,
    "originalPrice": 17.38,
    "quantityInStock": 197,
    "category": "Sticky Notes",
    "brand": "Classmate",
    "material": "Softcover",
    "images": [
      {
        "url": "http://localhost:9000/assets/trial.png",
        "altText": "Sticky Notes Image"
      }
    ],
    "isPublished": true,
    "rating": 4.9,
    "numReviews": 186
  }
];

module.exports = products;