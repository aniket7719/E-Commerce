import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const HighlightsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <Row className="g-4">
          {/* Left Column: Quiz Card */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column justify-content-center text-center text-md-start">
                <Card.Title className="fw-bold">Find Your Fit</Card.Title>
                <Card.Text className="text-muted">
                  Take our quick style quiz and find your perfect look.
                </Card.Text>
                <Button variant="dark" className="mt-3">
                  Start Quiz
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column: Image Highlights */}
          <Col md={8}>
            <Row className="g-3">
              <Col md={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img
                    src="/assets/Knitwear.jpg"
                    alt="Lookbook"
                    className="img-fluid rounded-top"
                  />
                  <Card.Body className="text-center">
                    <Card.Text className="fw-semibold">Lookbook</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img
                    src="/assets/Knitwear.jpg"
                    alt="Knitwear"
                    className="img-fluid rounded-top"
                  />
                  <Card.Body className="text-center">
                    <Card.Text className="fw-semibold">Knitwear</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img
                    src="/assets/Knitwear.jpg"
                    alt="Shoes"
                    className="img-fluid rounded-top"
                  />
                  <Card.Body className="text-center">
                    <Card.Text className="fw-semibold">Shoes</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HighlightsSection;
