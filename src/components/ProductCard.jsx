import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ title, price, image, isSale }) => {
  return (
    <div
      className="card shadow-sm border-0 position-relative product-card-hover d-flex flex-column"
      style={{
        backgroundColor: "var(--hero-white)",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "220px", // smaller width
        height: "320px",    // smaller height
      }}
    >
      {isSale && (
        <span className="badge sale-badge position-absolute top-0 start-0 m-2">
          SALE
        </span>
      )}

      <div className="img-wrapper">
        <img src={image} className="card-img-top" alt={title} />
      </div>

      <div className="card-body d-flex flex-column flex-grow-1 px-2 pb-2 pt-1">
        <h6
          className="card-title text-truncate mb-1"
          title={title}
          style={{ color: "var(--hero-gray)", fontSize: "0.95rem" }}
        >
          {title}
        </h6>
        <p
          className="card-text fw-bold mb-2"
          style={{
            color: isSale ? "var(--hero-pink)" : "var(--hero-lavender)",
            fontSize: "0.9rem",
          }}
        >
          ₹{price}
        </p>
        <button
          className="btn btn-sm mt-auto"
          style={{
            backgroundColor: "var(--hero-teal)",
            color: "var(--hero-white)",
            borderRadius: "5px",
            fontSize: "0.85rem",
          }}
        >
          Buy Now
        </button>
      </div>

      <style>{`
        .product-card-hover {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 18px var(--hero-lavender);
        }
        .img-wrapper {
          height: 140px;
          overflow: hidden;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .product-card-hover:hover .img-wrapper img {
          transform: scale(1.05);
        }
        .sale-badge {
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 0.25rem;
          background-color: var(--hero-pink);
          color: var(--hero-white);
          font-weight: 600;
          z-index: 10;
        }
        .btn:hover {
          background-color: var(--hero-lavender);
          color: var(--hero-white);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
