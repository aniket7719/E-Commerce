import React, { useEffect, useRef, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const markdownItems = [
  {
    id: 1,
    title: 'OFFICIAL MERCH',
    label: 'CLEARANCE',
    images: ['public/assets/shose1.jpeg', 'public/assets/shose.jpeg'],
  },
  {
    id: 2,
    title: 'SHIRTS',
    label: 'CLEARANCE',
    images: ['public/assets/shose1.jpeg', 'public/assets/shose.jpeg'],
  },
  {
    id: 3,
    title: 'ALL T-SHIRTS',
    label: 'CLEARANCE',
    images: ['public/assets/shose1.jpeg', 'public/assets/shose.jpeg'],
  },
  {
    id: 4,
    title: 'OFFICIAL MERCH',
    label: 'CLEARANCE',
    images: ['public/assets/shose1.jpeg', 'public/assets/shose.jpeg'],
  },
  {
    id: 5,
    title: 'SHIRTS',
    label: 'CLEARANCE',
    images: ['public/assets/shose1.jpeg', 'public/assets/shose.jpeg'],
  },
  {
    id: 6,
    title: 'ALL T-SHIRTS',
    label: 'CLEARANCE',
    images: ['public/assets/shose1.jpeg', 'public/assets/shose.jpeg'],
  },
];


const styles = {
  section: {
    background: '#fff',
    padding: '3rem 0',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  carouselWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  track: {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    gap: '1.5rem',
    padding: '0.5rem 0',
    scrollbarWidth: 'none',
  },
  item: {
    position: 'relative',
    width: '250px',
    height: '320px',
    flex: '0 0 auto',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  imgMain: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.4s ease-in-out',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  imgOverlay: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.4s ease-in-out',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: 2,
  },
  labelOverlay: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    zIndex: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '10px 14px',
    borderRadius: '4px',
  },
  labelText: {
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: '2px',
  },
  titleText: {
    color: '#f8e71c',
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: 0,
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 4,
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '4px 12px',
    borderRadius: '50%',
  },
  leftArrow: {
    left: '-10px',
  },
  rightArrow: {
    right: '-10px',
  },
};

const MarkdownCarousel = () => {
  const[product,updateProduct] = useState([]);

  useEffect(function(){
    
  },[]);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -270 : 270,
      behavior: 'smooth',
    });
  };

  return (
    <section style={styles.section}>
      <Container>
        <h2 style={styles.title}>MARKDOWNS</h2>

        <div style={styles.carouselWrapper}>
          <Button
            variant="light"
            style={{ ...styles.arrow, ...styles.leftArrow }}
            onClick={() => scroll('left')}
          >
            &#10094;
          </Button>

          <div style={styles.track} ref={scrollRef}>
            {markdownItems.map((item) => (
              <div
                style={styles.item}
                key={item.id}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.imgOverlay').style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.imgOverlay').style.opacity = 0;
                }}
              >
                <div style={styles.imageWrapper}>
                  <img src={item.images[0]} alt="Main" style={styles.imgMain} />
                  <img src={item.images[1]} alt="Overlay" style={{ ...styles.imgOverlay }} className="imgOverlay" />
                </div>
                <div style={styles.labelOverlay}>
                  <span style={styles.labelText}>{item.label}</span>
                  <h4 style={styles.titleText}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="light"
            style={{ ...styles.arrow, ...styles.rightArrow }}
            onClick={() => scroll('right')}
          >
            &#10095;
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MarkdownCarousel;
