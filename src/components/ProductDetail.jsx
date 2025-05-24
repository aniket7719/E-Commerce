import React from 'react';
import { useParams } from 'react-router-dom';

// const { id } = useParams();
// Fetch or match product using the id

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const ProductDetails = () => {
  return (
    <section style={{ padding: '2rem 0' }}>
      <Container>
        <Row>
          {/* Left: Image Gallery */}
          <Col md={6}>
            <Row className="g-3">
              <Col xs={6}>
                <img
                  src="/assets/shose1.jpeg"
                  alt="Back View"
                  className="img-fluid rounded"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </Col>
              <Col xs={6}>
                <img
                  src="/assets/shose.jpeg"
                  alt="Front View"
                  className="img-fluid rounded"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </Col>
            </Row>
          </Col>

          {/* Right: Product Info */}
          <Col md={6}>
            <h4 className="fw-bold">TSS Originals: Break Free Turtle</h4>
            <p className="text-muted">Oversized T-Shirts</p>

            <div className="d-flex align-items-center gap-3">
              <h5 className="text-danger mb-0">₹799</h5>
              <del className="text-muted">₹1099</del>
              <span className="text-success">₹300 OFF</span>
            </div>

            <hr />

            <p className="fw-bold mb-2">Please select a size.</p>
            <div className="mb-3 d-flex flex-wrap gap-2">
              {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                <Button key={size} variant="outline-secondary" size="sm">
                  {size}
                </Button>
              ))}
            </div>

            <Form.Group className="mb-3" style={{ maxWidth: '150px' }}>
              <Form.Label>Quantity</Form.Label>
              <Form.Select>
                {[...Array(10)].map((_, idx) => (
                  <option key={idx}>{String(idx + 1).padStart(2, '0')}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <Button variant="danger" className="fw-bold">
                ADD TO CART
              </Button>
              <Button variant="outline-primary">❤ ADD TO WISHLIST</Button>
            </div>

            <Form.Group controlId="pincode" className="mb-2">
              <Form.Label className="fw-semibold">Delivery Details</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control type="text" placeholder="Enter Pincode" style={{ maxWidth: '200px' }} />
                <Button variant="outline-success">CHECK</Button>
              </div>
              <Form.Text className="text-muted d-block mt-2">
                This product is eligible for return or exchange under our 30-day return policy.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
