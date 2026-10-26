import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ShoppingCart,
  Search,
  Menu,
  User,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import "./Navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );
const handleSearch = (e) => {
  e.preventDefault();

  if (search.trim() !== "") {
    navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    setShowSearch(false);
  }
};

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <span className="logo-main">NOVA</span>
            <span className="logo-store">STORE</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/help">Help</Link>
        </div>

        {/* Actions */}
        <div className="nav-actions">

          {/* Search */}
          {showSearch && (
            <form className="search-box" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="submit">
                <Search size={18} />
              </button>
            </form>
          )}

          <button
            className="nav-icon"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Cart with Real Counter */}
          <Link
            to="/cart"
            className="nav-icon cart-icon"
            aria-label={`Cart, ${cartCount} items`}
          >
            <ShoppingCart size={21} />

            <span className="cart-count">
              {cartCount}
            </span>
          </Link>

          {/* User */}
          <button
            className="nav-icon"
            aria-label="User"
          >
            <User size={20} />
          </button>

          {/* Sidebar Button */}
          <button
            className="menu-icon"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu size={24} />
          </button>

        </div>
      </nav>

      {/* Sidebar */}
      {showSidebar && (
        <aside className="sidebar">

          <div className="sidebar-header">
            <h3>Shop</h3>

            <button
              onClick={() => setShowSidebar(false)}
              className="sidebar-close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="sidebar-section">
            <h4>Categories</h4>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              All Products
            </Link>

            <Link
              to="/products?category=Furniture"
              onClick={() => setShowSidebar(false)}
            >
              Furniture
            </Link>

            <Link
              to="/products?category=Mobiles"
              onClick={() => setShowSidebar(false)}
            >
              Mobiles
            </Link>

            <Link
              to="/products?category=Electronics"
              onClick={() => setShowSidebar(false)}
            >
              Electronics
            </Link>

            <Link
              to="/products?category=Home"
              onClick={() => setShowSidebar(false)}
            >
              Home & Living
            </Link>
          </div>

          <div className="sidebar-section">
            <h4>Price</h4>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              Under 5,000 EGP
            </Link>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              5,000 - 10,000 EGP
            </Link>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              10,000 - 20,000 EGP
            </Link>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              Above 20,000 EGP
            </Link>
          </div>

          <div className="sidebar-section">
            <h4>Quick Links</h4>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              Best Sellers
            </Link>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              New Arrivals
            </Link>

            <Link
              to="/products"
              onClick={() => setShowSidebar(false)}
            >
              Offers
            </Link>
          </div>

        </aside>
      )}
    </>
  );
};

export default Navbar;