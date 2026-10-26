
import { useParams, Link } from "react-router";
import { useCart } from "../context/CartContext";
import products from "../Data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found!</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="details-info">
        <span>{product.category}</span>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>{Number(product.price).toLocaleString()} EGP</h2>

        <p>⭐ {product.rating}</p>

        <button onClick={() => addToCart(product)}>
          Add to Cart 🛒
        </button>

        <Link to="/products" className="back-products">
          Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;

