import { products } from "../data" 
import '../styles/ProductCards.css';
import placeholder from '../assets/landscape-placeholder.svg';





function ProductCard({ product }) {
  return (
    <div className="product-card" key={product.sku}>
      {/* Left side: Image */}
      <div className="product-img">
        <img src={placeholder}  alt={product.name} />
        <p className="img-caption">Picture of item</p>
      </div>
      

      {/* Right side: Info */}
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">£{product.price.toFixed(2)}</p>
        <p
          className={`status ${product.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {product.status}
        </p>
        <button className="view-btn">Add to Basket </button>
      </div>
    </div>
  );
}

export default ProductCard