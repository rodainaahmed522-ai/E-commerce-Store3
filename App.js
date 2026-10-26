
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./component/Footer";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Help" element={<Help />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

