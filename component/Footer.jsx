import "./Footer.css";
import { useCart } from "../context/CartContext";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">NOVA STORE</h2>
          <p>
            NOVA STORE offers quality products at great prices.
            Enjoy a simple and convenient shopping experience.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
            <li><a href="/returns">Return Policy</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@novastore.com</p>
          <p>Phone: +20 100 000 0000</p>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 NOVA STORE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

