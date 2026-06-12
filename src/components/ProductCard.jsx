import { useState } from "react";
import BubbleEffect from "./BubbleEffect";

export default function ProductCard({ name, desc, price, image, emoji }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-img-wrap">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling?.style && (e.target.nextSibling.style.display = "flex");
            }}
          />
        ) : null}
        <div className="card-img-overlay" />
        <span className="fresh-badge">Fresh Daily</span>
        <BubbleEffect active={hovered} />
      </div>

      <div className="card-body">
        <div className="card-name">{name}</div>
        <div className="card-desc">{desc}</div>
        <div className="card-actions">
          <a href={`https://wa.me/919985476544?text=Hi PJ Seafoods, I would like to order: ${encodeURIComponent(name)}`} target="_blank" rel="noreferrer" className="btn-order">
            <span>Order Now</span>
          </a>
          <a href="tel:9985476544" className="btn-call">
            <span>&#128222; Call: 9985476544</span>
          </a>
        </div>
      </div>
    </div>
  );
}
