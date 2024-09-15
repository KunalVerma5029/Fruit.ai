import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const AboutContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const HeaderSection = styled.header`
  text-align: center;
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const FooterSection = styled.footer`
  text-align: center;
  background-color: #007bff;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
`;

const BodyContent = styled.section`
  text-align: center;
  margin-top: 20px;
`;

function AboutPage() {
  return (
    <AboutContainer>
      <Container>
        <HeaderSection>
          <h1>About Fruit.ai</h1>
          <p>Your personal health assistant for managing fruit information.</p>
        </HeaderSection>

        <BodyContent>
          <h2>Welcome to Fruit.ai</h2>
          <p>
            At Fruit.ai, we are committed to helping you make healthier choices by providing comprehensive information about various fruits. Our chatbot is designed to offer insights into the nutritional benefits of fruits, making it easy for you to understand their health benefits.
          </p>
          <p>
            With our translator feature, you can view fruit names and information in your preferred regional language, ensuring that you get the information you need in a way that is most accessible to you.
          </p>
          <p>
            Our FAQ section addresses common questions related to fruits and provides a way for you to manage and update your own list of FAQs. Whether you're looking for detailed fruit information or need help with specific queries, Fruit.ai is here to support you.
          </p>
        </BodyContent>

        <FooterSection>
          <p>© 2024 Fruit.ai. All rights reserved.</p>
          <p>
            For more information, contact us at <a href="mailto:support@fruit.ai" style={{ color: 'white', textDecoration: 'underline' }}>support@fruit.ai</a>.
          </p>
        </FooterSection>
      </Container>
    </AboutContainer>
  );
}

export default AboutPage;
