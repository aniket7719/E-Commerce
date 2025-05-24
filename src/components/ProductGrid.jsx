import React, { useRef, useState, useEffect } from 'react';
import { Container, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    title: 'Denim Flex (Straight Fit)',
    category: 'Men Cargo Jeans',
    price: '₹2299',
    image: '/assets/jacket.webp',
    tag: 'Straight Fit',
  },
  {
    id: 2,
    title: 'Ride Vibe Graphic Tee',
    category: 'Oversized T-Shirts',
    price: '₹999',
    image: '/assets/news1.jpg',
    tag: 'Oversized Fit',
    fabric: 'Premium Heavy Gauge Fabric',
  },
  {
    id: 3,
    title: 'Change Print Boxers',
    category: 'Boxer Shorts',
    price: '₹499',
    image: '/assets/tshirt1.png',
  },
  {
    id: 4,
    title: 'Oversized T-Shirt: Urban Call',
    category: 'Oversized T-Shirts',
    price: '₹999',
    image: '/assets/shirt.png',
    tag: 'Oversized Fit',
    fabric: 'Premium Heavy Gauge Fabric',
  },
  {
    id: 5,
    title: 'Casual Cotton Joggers',
    category: 'Bottomwear',
    price: '₹1499',
    image: '/assets/tshirt2.png',
    tag: 'Relaxed Fit',
  },
  {
    id: 6,
    title: 'Urban Hoodie',
    category: 'Sweatshirts & Hoodies',
    price: '₹1999',
    image: '/assets/tshirt3.png',
    tag: 'Winterwear',
  },
];

const ProductGrid = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 260; // Must match min-width in CSS
  const visibleCards = 4;
  const totalSlides = Math.ceil(products.length / visibleCards);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -cardWidth * visibleCards : cardWidth * visibleCards;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const updateSlideIndex = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / (cardWidth * visibleCards));
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    if (scroller) {
      scroller.addEventListener('scroll', updateSlideIndex);
      return () => scroller.removeEventListener('scroll', updateSlideIndex);
    }
  }, []);

  return (
    <section className="product-grid-section py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">NEW ARRIVALS</h2>

        {/* Arrows */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button variant="outline-dark" onClick={() => scroll('left')}>&#8592;</Button>
          <Button variant="outline-dark" onClick={() => scroll('right')}>&#8594;</Button>
        </div>

        {/* Scrollable card row */}
        <div className="product-carousel d-flex overflow-auto" ref={scrollRef}>
          {products.map((product) => (
            <Link
              to={`/productdetail/${product.id}`}
              key={product.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="product-carousel-item me-3">
                <Card className="h-100 product-card border-0 shadow-sm">
                  <div className="position-relative">
                    <Card.Img variant="top" src={product.image} className="product-image" />
                    {product.tag && (
                      <Badge bg="dark" className="position-absolute top-0 start-0 m-2 text-uppercase">
                        {product.tag}
                      </Badge>
                    )}
                    {product.fabric && (
                      <Badge bg="secondary" className="position-absolute bottom-0 start-0 m-2 small">
                        {product.fabric}
                      </Badge>
                    )}
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6 fw-semibold">{product.title}</Card.Title>
                    <Card.Text className="text-muted small mb-1">{product.category}</Card.Text>
                    <Card.Text className="fw-bold text-dark">{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="d-flex justify-content-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`carousel-indicator-dot mx-1 ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;
