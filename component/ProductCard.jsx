
import { useNavigate } from "react-router";
import "./ProuductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div
        className="product-image"
        onClick={() => navigate(`/products/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <div className="product-bottom">
          <span className="price">
            {Number(product.price).toLocaleString()} EGP
          </span>

          <button
            className="buy-btn"
            onClick={() =>
              navigate(`/products/${product.id}`)
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

