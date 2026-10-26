
import { useState } from "react";
import products from "../Data/products";
import ProductCard from "../component/ProductCard";
import "./Products.css";
import { useSearchParams } from "react-router";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  const categories = [
    "All",
    "Furniture",
    "Electronics",
    "Mobiles",
  ];

  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default Products;

