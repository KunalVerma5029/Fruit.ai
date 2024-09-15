import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 30px;
  background-color: #f8f9fa;
  padding: 40px 20px;
  border-radius: 8px;
`;

const ServiceLink = styled(Button)`
  margin: 10px;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  background-color: #007bff;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const BodyContent = styled.section`
  text-align: center;
  margin-top: 20px;
`;

function HomePage() {
  return (
    <Container className="my-5">
      <HeaderSection>
        <h1>Welcome to Fruit.ai</h1>
        <p>Explore our services to manage your health with ease.</p>
        <Row className="justify-content-center">
          <Col md={4}>
            <Link to="/chatbot" style={{ textDecoration: 'none' }}>
              <ServiceLink variant="primary">Chatbot</ServiceLink>
            </Link>
          </Col>
          <Col md={4}>
            <Link to="/translator" style={{ textDecoration: 'none' }}>
              <ServiceLink variant="primary">Translator</ServiceLink>
            </Link>
          </Col>
          <Col md={4}>
            <Link to="/faq" style={{ textDecoration: 'none' }}>
              <ServiceLink variant="primary">FAQ</ServiceLink>
            </Link>
          </Col>
          <Col md={4}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <ServiceLink variant="primary">About</ServiceLink>
            </Link>
          </Col>
        </Row>
      </HeaderSection>

      <BodyContent>
        <h2>Manage Your Health Effectively</h2>
        <p>
          Fruit.ai is designed to help you take control of your health. Our chatbot provides instant answers and guidance on various fruits and their benefits. Use our translator to get information in your preferred regional language. Explore our FAQ section for common questions, and learn more about us on the About page.
        </p>
      </BodyContent>
    </Container>
  );
}

export default HomePage;
