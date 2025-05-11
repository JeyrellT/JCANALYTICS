import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ROISection = () => {
  return (
    <section className="roi-section">
      <Container>
        <Row>
          <Col>
            <h2>Return on Investment (ROI)</h2>
            <p>Our digital transformation services have helped numerous organizations achieve significant ROI. Here are some examples:</p>
            <ul>
              <li>Company A: 150% increase in revenue within the first year</li>
              <li>Company B: 200% increase in operational efficiency</li>
              <li>Company C: 300% increase in customer satisfaction</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ROISection;