import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Rich from "../assets/Richman-Size-Guide.jpg"

const FeaturesSection = () => {
return (
<section className="py-5 bg-light">
<div className="container">
<Row className="g-5 align-items-center text-center text-md-start">
{/* Size Guide */}
<Col md={4}>
<h5 className="mb-3 fw-semibold">Size Guide</h5>
<div className="d-flex justify-content-center justify-content-md-start">
<img
src={Rich}
alt="Size Guide"
className="img-fluid rounded shadow-sm"
style={{ maxWidth: '200px', height: 'auto' }}
/>
</div>
<p className="mt-3 text-muted">
Ensure the perfect fit for your style with our easy size guide.
</p>
</Col>

      {/* Exclusive Deals */}
      <Col md={4}>
        <h5 className="mb-3 fw-semibold">Exclusive Deals</h5>
        <p className="text-muted">
          Enjoy up to <strong className="text-danger">50% OFF</strong> select items for a limited time only.
        </p>
        <Button variant="dark" className="w-100 rounded-pill shadow-sm">
          Browse Offers
        </Button>
      </Col>

      {/* Back in Stock Alerts */}
      <Col md={4}>
        <h5 className="mb-3 fw-semibold">Back in Stock Alerts</h5>
        <p className="text-muted">Be the first to know when your favorites are back.</p>
        <Form>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="mb-2 rounded-pill shadow-sm"
          />
          <Button variant="outline-dark" className="w-100 rounded-pill shadow-sm">
            Notify Me
          </Button>
        </Form>
      </Col>
    </Row>
  </div>
</section>
);
};
export default FeaturesSection;