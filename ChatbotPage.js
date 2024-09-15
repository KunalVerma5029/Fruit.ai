import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const fruits = [
  { id: 1, name: 'Apple', details: 'Apples are high in fiber and vitamin C.' },
  { id: 2, name: 'Banana', details: 'Bananas are rich in potassium and vitamin B6.' },
  { id: 3, name: 'Orange', details: 'Oranges are a great source of vitamin C.' },
  { id: 4, name: 'Strawberry', details: 'Strawberries are rich in antioxidants.' },
];

const ChatbotContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 30px;
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 8px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BodyContent = styled.section`
  text-align: center;
  margin-top: 20px;
`;

function ChatbotPage() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleShowDetails = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <ChatbotContainer>
      <Container>
        <HeaderSection>
          <h1>Fruit Chatbot</h1>
          <p>Click on a fruit to learn more about its benefits.</p>
        </HeaderSection>

        <BodyContent>
          <Row className="justify-content-center">
            {selectedFruit ? (
              <Col md={6}>
                <StyledCard>
                  <Card.Body>
                    <Card.Title>{selectedFruit.name}</Card.Title>
                    <Card.Text>{selectedFruit.details}</Card.Text>
                    <Button variant="secondary" onClick={() => setSelectedFruit(null)}>
                      Back to List
                    </Button>
                  </Card.Body>
                </StyledCard>
              </Col>
            ) : (
              fruits.map((fruit) => (
                <Col md={6} key={fruit.id}>
                  <StyledCard onClick={() => handleShowDetails(fruit)}>
                    <Card.Body>
                      <Card.Title>{fruit.name}</Card.Title>
                    </Card.Body>
                  </StyledCard>
                </Col>
              ))
            )}
          </Row>
        </BodyContent>
      </Container>
    </ChatbotContainer>
  );
}

export default ChatbotPage;
