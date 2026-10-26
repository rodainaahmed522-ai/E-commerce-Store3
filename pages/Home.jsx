import products from "../Data/products";
import ProductCard from "../component/ProductCard";
import "./Home.css";

const Home = () => {
  const sections = [
    {
      id: "new-arrivals",
      title: "New Arrivals 🌟",
      data: products.slice(0, 4),
    },
    {
      id: "bestselling",
      title: "Bestselling",
      data: products.slice(4, 8),
    },
    {
      id: "featured-offers",
      title: "Featured Offers",
      data: products.slice(8, 12),
    },
  ];

  return (
    <div className="home">

      {/* Hero Video */}
      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Elegance That Feels Like Home</h1>

          <p>
            Discover beautiful furniture that brings comfort
            and style to your home.
          </p>

          <a href="#new-arrivals" className="hero-button">
            Shop Now
          </a>
        </div>

      </section>

      {/* Store Title */}
      <h1 className="home-title">
        Nova Store
      </h1>

      {/* Product Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="product-section"
        >
          <h2 className="section-title">
            {section.title}
          </h2>

          <div className="products-grid">
            {section.data.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
};

export default Home;