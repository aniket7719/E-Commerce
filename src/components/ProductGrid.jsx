import React from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const products = {
  topSellers: [
    { title: "Urban Sneakers", price: "2,499", image: "/assets/shoes1.webp", isSale: true },
    { title: "Leather Bomber Jacket", price: "3,899", image: "/assets/jacket.webp", isSale: true },
    { title: "Tailored Shirt", price: "2,499", image: "/assets/shirt.png", isSale: true },
    { title: "Urban Sneakers", price: "2,499", image: "/assets/shoes1.webp", isSale: true },
  ],
  newArrivals: [
    { title: "Graphic Tee", price: "1,299", image: "/assets/tshirt1.png", isSale: true },
    { title: "Canvas Backpack", price: "2,499", image: "/assets/bag.png", isSale: true },
    { title: "Graphic Tee", price: "1,299", image: "/assets/tshirt1.png", isSale: true },
    { title: "Graphic Tee", price: "1,299", image: "/assets/tshirt1.png", isSale: true },
  ],
  hotSales: [
    { title: "Urban Sneakers", price: "2,299", image: "/assets/shoes2.png", isSale: true },
    { title: "Graphic Tee", price: "999", image: "/assets/tshirt2.png", isSale: true },
    { title: "Minimalist T-Shirt", price: "1,199", image: "/assets/tshirt3.png", isSale: true },
    { title: "Urban Sneakers", price: "2,299", image: "/assets/shoes2.png", isSale: true },
  ],
};

const ProductGrid = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--hero-white)" }}>
      <div className="container">
        <ProductSection title="Top Sellers" items={products.topSellers} />
        <ProductSection title="New Arrivals" items={products.newArrivals} />
        <ProductSection title="Hot Sales" items={products.hotSales} />
      </div>
    </section>
  );
};

const ProductSection = ({ title, items }) => (
  <div className="mb-5">
    <h2
      className="mb-4 text-center fw-bold border-bottom pb-2"
      style={{
        color: "var(--hero-gray)",
        borderColor: "var(--hero-lavender)",
      }}
    >
      {title}
    </h2>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {items.map((item, index) => (
        <div className="col d-flex" key={index}>
          {/* d-flex here to make ProductCard take full height */}
          <ProductCard {...item} />
        </div>
      ))}
    </div>
  </div>
);

export default ProductGrid;
