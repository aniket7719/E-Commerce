import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ title, price, image, isSale }) => {
  return (
    <div
      className="card shadow-sm border-0 position-relative product-card-hover d-flex flex-column"
      style={{
        backgroundColor: "var(--hero-white)",
        borderRadius: "12px",
        width: "100%",
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

      <div className="card-body d-flex flex-column flex-grow-1">
        <h5
          className="card-title text-truncate"
          title={title}
          style={{ color: "var(--hero-gray)" }}
        >
          {title}
        </h5>
        <p
          className="card-text fw-bold"
          style={{ color: isSale ? "var(--hero-pink)" : "var(--hero-lavender)" }}
        >
          ₹{price}
        </p>
        <button
          className="btn mt-auto"
          style={{
            backgroundColor: "var(--hero-teal)",
            color: "var(--hero-white)",
            borderRadius: "6px",
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
          height: 100%;
        }
        .product-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px var(--hero-lavender);
        }
        .img-wrapper {
          height: 220px;
          overflow: hidden;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
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
          font-size: 0.75rem;
          padding: 0.3rem 0.6rem;
          border-radius: 0.25rem;
          background-color: var(--hero-pink);
          color: var(--hero-white);
          font-weight: 600;
          z-index: 10;
        }
        button.btn:hover {
          background-color: var(--hero-lavender);
          color: var(--hero-white);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
