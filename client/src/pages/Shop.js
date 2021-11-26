import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftBar from '../components/LeftBar';

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <LeftBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

export default Shop;
