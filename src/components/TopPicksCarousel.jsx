import React, { useRef, useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const topPicks = [
  {
    id: 1,
    title: 'Superman: The Kryptonian',
    category: 'Polo',
    price: 749,
    oldPrice: 1049,
    image: '/assets/jacket.webp',
  },
  {
    id: 2,
    title: 'Denim: Granite Grey (Straight Fit)',
    category: 'Jeans',
    price: 2199,
    oldPrice: 2499,
    image: '/assets/bag.png',
  },
  {
    id: 3,
    title: 'Batman: Gotham Gear',
    category: 'Backpacks',
    price: 3499,
    image: '/assets/jacket.webp',
  },
  {
    id: 4,
    title: 'Varsity T-shirt: Emerald Green',
    category: 'T-shirts',
    price: 949,
    image: '/assets/jacket.webp',
  },
  {
    id: 5,
    title: 'Superman V2: Black Edition',
    category: 'Polo',
    price: 799,
    oldPrice: 1099,
    image: '/assets/jacket.webp',
  },
  {
    id: 6,
    title: 'Denim V2: Shadow Fit',
    category: 'Jeans',
    price: 2299,
    oldPrice: 2599,
    image: '/assets/jacket.webp',
  },
  {
    id: 7,
    title: 'Batman V2: Utility Pack',
    category: 'Backpacks',
    price: 3699,
    image: '/assets/jacket.webp',
  },
  {
    id: 8,
    title: 'Varsity Tee: Midnight Green',
    category: 'T-shirts',
    price: 999,
    image: '/assets/jacket.webp',
  },
];

const styles = {
  section: {
    padding: '1rem 0',
  },
  scrollContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: '1rem',
  },
  item: {
  minWidth: '200px',
  maxWidth: '220px',
  flex: '0 0 auto',
  height: '370px',  // Set a fixed height for uniformity
  marginRight: '1rem',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
},

  productImage: {
    height: '180px',
    objectFit: 'cover',
  },
  rankNumber: {
    position: 'absolute',
    top: '20%',
    left: '0',
    transform: 'translateY(-50%)',
    fontSize: '5rem',
    fontWeight: 900,
    color: 'transparent',
    WebkitTextStroke: '1.5px rgba(0,0,0,0.4)',
    zIndex: 0,
    pointerEvents: 'none',
    userSelect: 'none',
    paddingLeft: '1px',
  },
  indicatorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  indicatorDot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#bbb',
    borderRadius: '30%',
    display: 'inline-block',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
  indicatorDotActive: {
    backgroundColor: '#000',
  },
  offText: {
    color: 'red',
    fontWeight: 600,
    fontSize: '0.875rem',
  },
};

const TopPicksCarousel = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const cardWidth = 280;

  const totalSlides = Math.ceil(topPicks.length / visibleCards);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setVisibleCards(1);
      else if (window.innerWidth < 768) setVisibleCards(2);
      else if (window.innerWidth < 992) setVisibleCards(3);
      else setVisibleCards(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -cardWidth * visibleCards : cardWidth * visibleCards,
      behavior: 'smooth',
    });
  };

  const updateSlideIndex = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / (cardWidth * visibleCards));
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    scroller?.addEventListener('scroll', updateSlideIndex);
    return () => scroller?.removeEventListener('scroll', updateSlideIndex);
  }, [visibleCards]);

  return (
    <section id="shop" style={styles.section } >
      <Container>
        <h2 className="text-center fw-bold mb-4">TOP 10 PICKS OF THE WEEK</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button variant="outline-dark" onClick={() => scroll('left')}>&#8592;</Button>
          <Button variant="outline-dark" onClick={() => scroll('right')}>&#8594;</Button>
        </div>

        <div style={styles.scrollContainer} ref={scrollRef}>
          {topPicks.map((product, index) => (
            <Link to={`/productdetail/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={styles.item}>
                <Card className="h-100 border-0 shadow-sm">
                  <div style={{ position: 'relative' }}>
                    <div style={styles.rankNumber}>{index + 1}</div>
                    <Card.Img variant="top" src={product.image} alt={product.title} style={styles.productImage} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6 fw-bold">{product.title}</Card.Title>
                    <Card.Text className="text-muted small">{product.category}</Card.Text>
                    <Card.Text className="fw-bold text-dark mb-0">
                      ₹{product.price}{' '}
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through ms-2 small">
                          ₹{product.oldPrice}
                        </span>
                      )}
                    </Card.Text>
                    {product.oldPrice && (
                      <div style={styles.offText}>₹{product.oldPrice - product.price} OFF</div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ))}
        </div>

        <div style={styles.indicatorsContainer}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.indicatorDot,
                ...(index === currentSlide ? styles.indicatorDotActive : {}),
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopPicksCarousel;
