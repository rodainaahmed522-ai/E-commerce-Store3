const products=[
  {
    id: 1,
    name: "Nova Modern Bed",
    category: "Furniture",
    price: 12000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern and comfortable bed with an elegant design for a stylish bedroom.",
  },

  {
    id: 2,
    name: "Nova Modern Sofa",
    category: "Furniture",
    price: 14500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    description:
      "Elegant modern sofa with a comfortable design for your living room.",
  },

  {
    id: 3,
    name: "Nova Office Desk",
    category: "Furniture",
    price: 4500,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=85",
    description:
      "Minimal office desk perfect for studying, working, and gaming setups.",
  },

  {
    id: 4,
    name: "Nova Gaming Chair",
    category: "Furniture",
    price: 6500,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=85",
    description:
      "Comfortable gaming chair designed for long gaming and working sessions.",
  },

  {
    id: 5,
    name: "Nova Wardrobe",
    category: "Furniture",
    price: 8900,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
    description:
      "Spacious modern wardrobe with elegant design and practical storage.",
  },

  // =========================
  // Furniture
  // =========================
  {
    id: 6,
    name: "Nova Coffee Table",
    category: "Furniture",
    price: 2700,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=85",
    description:
      "Simple and modern coffee table that fits perfectly in any living room.",
  },

  {
    id: 7,
    name: "Nova Lounge Chair",
    category: "Furniture",
    price: 5200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85",
    description:
      "Stylish lounge chair designed for comfort and relaxation.",
  },

  {
    id: 8,
    name: "Nova Dining Table",
    category: "Furniture",
    price: 7800,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern dining table with a clean design for family and guests.",
  },

  {
    id: 9,
    name: "Nova Bedside Table",
    category: "Furniture",
    price: 2100,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    description:
      "Compact bedside table with a modern and elegant appearance.",
  },

  {
    id: 10,
    name: "Nova Bookshelf",
    category: "Furniture",
    price: 3900,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern bookshelf designed to organize books and decorative items.",
  },

  // =========================
  // Electronics
  // =========================
  {
    id: 11,
    name: "Nova Mechanical Keyboard",
    category: "Electronics",
    price: 1800,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern mechanical keyboard with responsive keys for work and gaming.",
  },

  {
    id: 12,
    name: "Nova Wireless Mouse",
    category: "Electronics",
    price: 950,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    description:
      "Lightweight wireless mouse with a comfortable grip and precise control.",
  },

  {
    id: 13,
    name: "Nova Headphones",
    category: "Electronics",
    price: 2800,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description:
      "Wireless headphones with clear sound and a comfortable modern design.",
  },

  {
    id: 14,
    name: "Nova Smart Watch",
    category: "Electronics",
    price: 3900,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern smart watch with a bright display and everyday smart features.",
  },

  {
    id: 15,
    name: "Nova Smart Lamp",
    category: "Electronics",
    price: 1400,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern desk lamp that adds a stylish touch to your workspace.",
  },

  // =========================
  // Mobiles & Accessories
  // =========================
  {
    id: 16,
    name: "Nova Smartphone X",
    category: "Mobiles",
    price: 25000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern smartphone with a premium design and high-quality display.",
  },

  {
    id: 17,
    name: "Nova Tablet Pro",
    category: "Mobiles",
    price: 15999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",
    description:
      "Slim tablet designed for entertainment, studying, and productivity.",
  },

  {
    id: 18,
    name: "Nova Wireless Charger",
    category: "Mobiles",
    price: 1200,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85",
    description:
      "Compact wireless charger with a clean and modern design.",
  },

{
  id: 19,
  name: "Nova Power Bank",
  category: "Mobiles",
  price: 1700,
  rating: 4.5,
  image: "https://i.pinimg.com/736x/54/bf/00/54bf000b057f0759476193ef72695284.jpg",
  description: "Portable power bank designed for everyday charging on the go.",
},


  {
    id: 20,
    name: "Nova Smart Speaker",
    category: "Mobiles",
    price: 3200,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=85",
    description:
      "Compact smart speaker with modern design and clear audio.",
  },

{
  id: 21,
  name: "Nova Electric Kettle",
  category: "Home",
  price: 1200,
  rating: 4.7,
  image: "https://i.pinimg.com/736x/8d/90/3e/8d903ef4ad2ba17d39d171bfe79ae581.jpg",
  description: "Modern electric kettle perfect for making tea and coffee."
},



{
  id: 22,
  name: "Nova Blender",
  category: "Home",
  price: 2500,
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=85",
  description: "Powerful blender for preparing smoothies and fresh drinks."
},

{
  id: 23,
  name: "Nova Toaster",
  category: "Home",
  price: 900,
  rating: 4.6,
  image: "https://i.pinimg.com/736x/4e/8b/0e/4e8b0e288c7f3db743ebc2c54de68053.jpg",
  description: "Compact toaster for quick and delicious breakfasts."
},


{
  id: 24,
  name: "Nova Coffee Maker",
  category: "Home",
  price: 3200,
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
  description: "Elegant coffee maker for enjoying fresh coffee at home."
},

{
  id: 25,
  name: "Nova Dinner Set",
  category: "Home",
  price: 1800,
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=85",
  description: "Beautiful dinner set designed for everyday meals and guests."
},

{
  id: 26,
  name: "Nova Kitchen Organizer",
  category: "Home",
  price: 900,
  rating: 4.5,
  image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  description: "Practical kitchen organizer that keeps your space neat and tidy."
},
];

export default products;