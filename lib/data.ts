import { ProductData } from "@/types/type";


export const bestSeller : ProductData [] = [
  {
    id: 1,
    name: "Premium Leather Notebook",
    description: "Handcrafted leather notebook with premium paper",
    price: 29.99,
    originalPrice: 39.99,
    category: "Notebooks",
    brand: "Moleskine",
    color: "black",
    imageUrl: "/images/most-viewed/leather-notebook.webp",
    rating: 4.5,
    reviewCount: 128,
    stockCount: 25,
    shippingDays: 1,
    featured: true,
    isNew: true,
    onSale: true,
    dateAdded: "2023-12-01",
    reviews: [
      {
        id: 1,
        userName: "John Doe",
        rating: 5,
        comment: "Amazing quality! The leather feels premium.",
        date: "2023-12-05",
      },
      {
        id: 2,
        userName: "Jane Smith",
        rating: 4,
        comment: "Great notebook, but a bit pricey.",
        date: "2023-12-10",
      },
    ],
  },
    {
      id: 6,
      name: "Fountain Pen Set",
      description: "Elegant fountain pen with 3 ink cartridges",
      price: 5.2,
      category: "Pens & Pencils",
      brand: "Lamy",
      color: "black",
      imageUrl: "/images/products/fountain-pen.webp",
      rating: 4.7,
      reviewCount: 89,
      stockCount: 15,
      shippingDays: 2,
      featured: true,
      isNew: false,
      onSale: false,
      dateAdded: "2023-08-15",
      reviews: [
        {
          id: 1,
          userName: "Jack Adams",
          rating: 5,
          comment: "Smooth writing experience!",
          date: "2023-08-20",
        },
        {
          id: 2,
          userName: "Karen Lee",
          rating: 4,
          comment: "Great pen, but the ink cartridges run out quickly.",
          date: "2023-08-25",
        },
      ],
    },
    {
      id: 14,
      name: "Weekly Planner",
      description: "Compact weekly planner with hourly breakdown",
      price: 19.99,
      category: "Planners",
      brand: "Moleskine",
      color: "red",
      imageUrl: "/images/products/weekly-planner.jpg",
      rating: 4.3,
      reviewCount: 63,
      stockCount: 30,
      shippingDays: 1,
      featured: false,
      isNew: false,
      onSale: false,
      dateAdded: "2023-08-05",
      reviews: [
        {
          id: 1,
          userName: "Zack Brown",
          rating: 4,
          comment: "Perfect for busy schedules!",
          date: "2023-08-10",
        },
        {
          id: 2,
          userName: "Ava Green",
          rating: 3,
          comment: "The binding could be stronger.",
          date: "2023-08-15",
        },
      ],
    },

    {
      id: 18,
      name: "Desk Organizer Set",
      description: "3-piece set for pens, papers, and gadgets",
      price: 34.99,
      category: "Desk Accessories",
      brand: "Leuchtturm1917",
      color: "black",
      imageUrl: "/images/products/desk-organizer.jpg",
      rating: 4.5,
      reviewCount: 73,
      stockCount: 10,
      shippingDays: 3,
      featured: false,
      isNew: false,
      onSale: false,
      dateAdded: "2023-08-10",
      reviews: [
        {
          id: 1,
          userName: "Henry Adams",
          rating: 5,
          comment: "Keeps my desk tidy!",
          date: "2023-08-15",
        },
        {
          id: 2,
          userName: "Isla Brown",
          rating: 4,
          comment: "The compartments are a bit small.",
          date: "2023-08-20",
        },
      ],
    },


]

// Create 5 products for each of the 4 categories (20 total)
export const dummyProducts: ProductData[] = [
  // Notebooks Category (5 items)
  {
    id: 1,
    name: "Premium Leather Notebook",
    description: "Handcrafted leather notebook with premium paper",
    price: 29.99,
    originalPrice: 39.99,
    category: "Notebooks",
    brand: "Moleskine",
    color: "black",
    imageUrl: "/images/most-viewed/leather-notebook.webp",
    rating: 4.5,
    reviewCount: 128,
    stockCount: 25,
    shippingDays: 1,
    featured: true,
    isNew: true,
    onSale: true,
    dateAdded: "2023-12-01",
    reviews: [
      {
        id: 1,
        userName: "John Doe",
        rating: 5,
        comment: "Amazing quality! The leather feels premium.",
        date: "2023-12-05",
      },
      {
        id: 2,
        userName: "Jane Smith",
        rating: 4,
        comment: "Great notebook, but a bit pricey.",
        date: "2023-12-10",
      },
    ],
  },
  {
    id: 2,
    name: "Dotted Journal",
    description: "Perfect for bullet journaling and planning",
    price: 19.99,
    category: "Notebooks",
    brand: "Leuchtturm1917",
    color: "blue",
    imageUrl: "/images/products/dotted-journal.jpg",
    rating: 4.8,
    reviewCount: 95,
    stockCount: 42,
    shippingDays: 1,
    featured: true,
    isNew: false,
    onSale: false,
    dateAdded: "2023-10-15",
    reviews: [
      {
        id: 1,
        userName: "Alice Johnson",
        rating: 5,
        comment: "Perfect for my bullet journaling needs!",
        date: "2023-10-20",
      },
      {
        id: 2,
        userName: "Bob Brown",
        rating: 4,
        comment: "Good quality, but the dots are a bit faint.",
        date: "2023-10-25",
      },
    ],
  },
  {
    id: 3,
    name: "Pocket Notebook Set",
    description: "Set of 3 pocket-sized notebooks",
    price: 12.99,
    category: "Notebooks",
    brand: "Moleskine",
    color: "black",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Pocket Notebooks",
    rating: 4.2,
    reviewCount: 67,
    stockCount: 18,
    shippingDays: 2,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-09-20",
    reviews: [
      {
        id: 1,
        userName: "Charlie Davis",
        rating: 4,
        comment: "Great for on-the-go notes!",
        date: "2023-09-25",
      },
      {
        id: 2,
        userName: "Eve White",
        rating: 3,
        comment: "The notebooks are a bit small for my liking.",
        date: "2023-09-30",
      },
    ],
  },
  {
    id: 4,
    name: "Waterproof Notebook",
    description: "All-weather writing paper",
    price: 24.99,
    category: "Notebooks",
    brand: "Leuchtturm1917",
    color: "yellow",
    imageUrl: "/images/products/waterproof-notebook.jpg",
    rating: 4.0,
    reviewCount: 42,
    stockCount: 7,
    shippingDays: 3,
    featured: false,
    isNew: true,
    onSale: false,
    dateAdded: "2024-01-05",
    reviews: [
      {
        id: 1,
        userName: "Frank Green",
        rating: 5,
        comment: "Works great in the rain!",
        date: "2024-01-10",
      },
      {
        id: 2,
        userName: "Grace Hall",
        rating: 3,
        comment: "The paper is durable, but the cover feels cheap.",
        date: "2024-01-15",
      },
    ],
  },
  {
    id: 5,
    name: "Luxury Hardcover Journal",
    description: "Premium hardcover with gold embossing",
    price: 34.99,
    originalPrice: 44.99,
    category: "Notebooks",
    brand: "Moleskine",
    color: "red",
    imageUrl: "/images/products/luxury-hard-notebook.jpg",
    rating: 4.9,
    reviewCount: 156,
    stockCount: 12,
    shippingDays: 2,
    featured: true,
    isNew: false,
    onSale: true,
    dateAdded: "2023-11-10",
    reviews: [
      {
        id: 1,
        userName: "Hank Wilson",
        rating: 5,
        comment: "Absolutely stunning! Worth every penny.",
        date: "2023-11-15",
      },
      {
        id: 2,
        userName: "Ivy Taylor",
        rating: 4,
        comment: "Beautiful journal, but the pages are a bit thin.",
        date: "2023-11-20",
      },
    ],
  },

  // Pens & Pencils Category (5 items)
  {
    id: 6,
    name: "Fountain Pen Set",
    description: "Elegant fountain pen with 3 ink cartridges",
    price: 5.2,
    category: "Pens & Pencils",
    brand: "Lamy",
    color: "black",
    imageUrl: "/images/products/fountain-pen.webp",
    rating: 4.7,
    reviewCount: 89,
    stockCount: 15,
    shippingDays: 2,
    featured: true,
    isNew: false,
    onSale: false,
    dateAdded: "2023-08-15",
    reviews: [
      {
        id: 1,
        userName: "Jack Adams",
        rating: 5,
        comment: "Smooth writing experience!",
        date: "2023-08-20",
      },
      {
        id: 2,
        userName: "Karen Lee",
        rating: 4,
        comment: "Great pen, but the ink cartridges run out quickly.",
        date: "2023-08-25",
      },
    ],
  },
  {
    id: 7,
    name: "Precision Mechanical Pencil",
    description: "0.5mm lead with cushioned tip",
    price: 14.99,
    category: "Pens & Pencils",
    brand: "Pilot",
    color: "silver",
    imageUrl: "/images/products/precise-pencil.webp",
    rating: 4.5,
    reviewCount: 112,
    stockCount: 30,
    shippingDays: 1,
    featured: false,
    isNew: true,
    onSale: false,
    dateAdded: "2024-02-01",
    reviews: [
      {
        id: 1,
        userName: "Leo Martinez",
        rating: 5,
        comment: "Perfect for technical drawings!",
        date: "2024-02-05",
      },
      {
        id: 2,
        userName: "Mia Clark",
        rating: 4,
        comment: "Good pencil, but the eraser is small.",
        date: "2024-02-10",
      },
    ],
  },
  {
    id: 8,
    name: "Fountain Pen",
    description: "Set of 12 colorful gel pens",
    price: 7.1,
    originalPrice: 19.99,
    category: "Pens & Pencils",
    brand: "Pilot",
    color: "blue",
    imageUrl: "/images/pen-n-pencils.jpg",
    rating: 4.3,
    reviewCount: 78,
    stockCount: 22,
    shippingDays: 1,
    featured: false,
    isNew: false,
    onSale: true,
    dateAdded: "2023-10-05",
    reviews: [
      {
        id: 1,
        userName: "Noah Lewis",
        rating: 4,
        comment: "Great value for the price!",
        date: "2023-10-10",
      },
      {
        id: 2,
        userName: "Olivia Walker",
        rating: 3,
        comment: "Some pens dry out quickly.",
        date: "2023-10-15",
      },
    ],
  },
  {
    id: 9,
    name: "Calligraphy Pen Set",
    description: "Professional calligraphy set with nibs",
    price: 49.99,
    category: "Pens & Pencils",
    brand: "Lamy",
    color: "gold",
    imageUrl: "/images/products/call-pen.jpg",
    rating: 4.6,
    reviewCount: 64,
    stockCount: 8,
    shippingDays: 3,
    featured: true,
    isNew: false,
    onSale: false,
    dateAdded: "2023-09-12",
    reviews: [
      {
        id: 1,
        userName: "Paul Harris",
        rating: 5,
        comment: "Excellent for calligraphy beginners!",
        date: "2023-09-17",
      },
      {
        id: 2,
        userName: "Quinn Young",
        rating: 4,
        comment: "The nibs are a bit scratchy.",
        date: "2023-09-22",
      },
    ],
  },
  {
    id: 10,
    name: "Sticky Notes",
    description: "Set of sticky notes in different colors",
    price: 12.99,
    category: "notes",
    brand: "Pilot",
    color: "black",
    imageUrl: "/images/sticky-notes.jpg",
    rating: 4.1,
    reviewCount: 53,
    stockCount: 35,
    shippingDays: 1,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-11-20",
    reviews: [
      {
        id: 1,
        userName: "Rachel King",
        rating: 4,
        comment: "Bright colors and good adhesive!",
        date: "2023-11-25",
      },
      {
        id: 2,
        userName: "Sam Evans",
        rating: 3,
        comment: "The notes are smaller than expected.",
        date: "2023-11-30",
      },
    ],
  },

  // Planners Category (5 items)
  {
    id: 11,
    name: "Annual Planner 2024",
    description: "Comprehensive yearly planner with monthly tabs",
    price: 29.99,
    category: "Planners",
    brand: "Leuchtturm1917",
    color: "green",
    imageUrl: "/images/products/annual-plan.jpg",
    rating: 4.8,
    reviewCount: 142,
    stockCount: 50,
    shippingDays: 1,
    featured: true,
    isNew: true,
    onSale: false,
    dateAdded: "2023-12-15",
    reviews: [
      {
        id: 1,
        userName: "Tom Brown",
        rating: 5,
        comment: "Perfect for staying organized!",
        date: "2023-12-20",
      },
      {
        id: 2,
        userName: "Uma Patel",
        rating: 4,
        comment: "Great planner, but the tabs could be sturdier.",
        date: "2023-12-25",
      },
    ],
  },
  {
    id: 12,
    name: "Goemtry Box",
    description: "All the material found here",
    price: 14.99,
    category: "Planners",
    brand: "Moleskine",
    color: "black",
    imageUrl: "/images/products/goemtery.jpg",
    rating: 4.2,
    reviewCount: 87,
    stockCount: 25,
    shippingDays: 2,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-10-10",
    reviews: [
      {
        id: 1,
        userName: "Victor Lee",
        rating: 4,
        comment: "Handy for quick notes!",
        date: "2023-10-15",
      },
      {
        id: 2,
        userName: "Wendy Hall",
        rating: 3,
        comment: "The box feels a bit flimsy.",
        date: "2023-10-20",
      },
    ],
  },
  {
    id: 13,
    name: "Academic Planner",
    description: "August-July academic year planner",
    price: 24.99,
    originalPrice: 29.99,
    category: "Planners",
    brand: "Leuchtturm1917",
    color: "blue",
    imageUrl: "/images/products/academic.jpeg",
    rating: 4.5,
    reviewCount: 76,
    stockCount: 18,
    shippingDays: 2,
    featured: false,
    isNew: false,
    onSale: true,
    dateAdded: "2023-07-20",
    reviews: [
      {
        id: 1,
        userName: "Xander Moore",
        rating: 5,
        comment: "Great for students!",
        date: "2023-07-25",
      },
      {
        id: 2,
        userName: "Yara Scott",
        rating: 4,
        comment: "The layout is a bit cramped.",
        date: "2023-07-30",
      },
    ],
  },
  {
    id: 14,
    name: "Weekly Planner",
    description: "Compact weekly planner with hourly breakdown",
    price: 19.99,
    category: "Planners",
    brand: "Moleskine",
    color: "red",
    imageUrl: "/images/products/weekly-planner.jpg",
    rating: 4.3,
    reviewCount: 63,
    stockCount: 30,
    shippingDays: 1,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-08-05",
    reviews: [
      {
        id: 1,
        userName: "Zack Brown",
        rating: 4,
        comment: "Perfect for busy schedules!",
        date: "2023-08-10",
      },
      {
        id: 2,
        userName: "Ava Green",
        rating: 3,
        comment: "The binding could be stronger.",
        date: "2023-08-15",
      },
    ],
  },
  {
    id: 15,
    name: "5-Year Journal",
    description: "Document 5 years of memories in one book",
    price: 39.99,
    category: "Planners",
    brand: "Leuchtturm1917",
    color: "brown",
    imageUrl: "/images/products/5-year-journey.jpeg",
    rating: 4.9,
    reviewCount: 67,
    stockCount: 5,
    shippingDays: 3,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-11-05",
    reviews: [
      {
        id: 1,
        userName: "Ben Carter",
        rating: 5,
        comment: "Love the concept!",
        date: "2023-11-10",
      },
      {
        id: 2,
        userName: "Cara White",
        rating: 4,
        comment: "The pages are a bit thin.",
        date: "2023-11-15",
      },
    ],
  },

  // Desk Accessories Category (5 items)
  {
    id: 16,
    name: "Wooden Pen Holder",
    description: "Elegant wooden desk organizer",
    price: 24.99,
    category: "Desk Accessories",
    brand: "Lamy",
    color: "brown",
    imageUrl: "/images/products/wooden-holder.jpeg",
    rating: 4.4,
    reviewCount: 58,
    stockCount: 20,
    shippingDays: 2,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-09-25",
    reviews: [
      {
        id: 1,
        userName: "Dylan Harris",
        rating: 5,
        comment: "Beautiful and functional!",
        date: "2023-09-30",
      },
      {
        id: 2,
        userName: "Eva Martinez",
        rating: 4,
        comment: "The wood finish could be smoother.",
        date: "2023-10-05",
      },
    ],
  },
  {
    id: 17,
    name: "Leather Desk Pad",
    description: "Premium leather desk protector and mouse pad",
    price: 49.99,
    originalPrice: 59.99,
    category: "Desk Accessories",
    brand: "Moleskine",
    color: "black",
    imageUrl: "/images/products/leather-desk-pad.jpeg",
    rating: 4.6,
    reviewCount: 92,
    stockCount: 15,
    shippingDays: 2,
    featured: true,
    isNew: false,
    onSale: true,
    dateAdded: "2023-10-20",
    reviews: [
      {
        id: 1,
        userName: "Finn Walker",
        rating: 5,
        comment: "Luxurious and practical!",
        date: "2023-10-25",
      },
      {
        id: 2,
        userName: "Grace Lee",
        rating: 4,
        comment: "The edges are a bit rough.",
        date: "2023-10-30",
      },
    ],
  },
  {
    id: 18,
    name: "Desk Organizer Set",
    description: "3-piece set for pens, papers, and gadgets",
    price: 34.99,
    category: "Desk Accessories",
    brand: "Leuchtturm1917",
    color: "black",
    imageUrl: "/images/products/desk-organizer.jpg",
    rating: 4.5,
    reviewCount: 73,
    stockCount: 10,
    shippingDays: 3,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-08-10",
    reviews: [
      {
        id: 1,
        userName: "Henry Adams",
        rating: 5,
        comment: "Keeps my desk tidy!",
        date: "2023-08-15",
      },
      {
        id: 2,
        userName: "Isla Brown",
        rating: 4,
        comment: "The compartments are a bit small.",
        date: "2023-08-20",
      },
    ],
  },
  {
    id: 19,
    name: "Adjustable Bookstand",
    description: "Wooden bookstand with adjustable angles",
    price: 34.99,
    category: "Desk Accessories",
    brand: "Leuchtturm1917",
    color: "brown",
    imageUrl: "/images/products/adjustable-clock.jpeg",
    rating: 4.5,
    reviewCount: 73,
    stockCount: 10,
    shippingDays: 3,
    featured: false,
    isNew: false,
    onSale: false,
    dateAdded: "2023-08-10",
    reviews: [
      {
        id: 1,
        userName: "Jack Wilson",
        rating: 5,
        comment: "Perfect for reading!",
        date: "2023-08-15",
      },
      {
        id: 2,
        userName: "Kara Green",
        rating: 4,
        comment: "The stand is a bit wobbly.",
        date: "2023-08-20",
      },
    ],
  },
  {
    id: 20,
    name: "Luxury Desk Clock",
    description: "Analog desk clock with silent movement",
    price: 79.99,
    originalPrice: 99.99,
    category: "Desk Accessories",
    brand: "Lamy",
    color: "silver",
    imageUrl: "/images/products/luxury-clock.jpeg",
    rating: 4.8,
    reviewCount: 38,
    stockCount: 5,
    shippingDays: 2,
    featured: true,
    isNew: false,
    onSale: true,
    dateAdded: "2023-11-15",
    reviews: [
      {
        id: 1,
        userName: "Liam Harris",
        rating: 5,
        comment: "A beautiful addition to my desk!",
        date: "2023-11-20",
      },
      {
        id: 2,
        userName: "Maya Clark",
        rating: 4,
        comment: "The clock is silent, but the hands are a bit stiff.",
        date: "2023-11-25",
      },
    ],
  },
];