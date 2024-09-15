import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

const TranslatorContainer = styled.div`
  padding: 20px;
  background-color: #eef2f3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  color: #007bff;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
`;

const StyledForm = styled(Form)`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const FormLabel = styled(Form.Label)`
  font-size: 1rem;
`;

const FormControl = styled(Form.Control)`
  font-size: 1rem;
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
  width: 100%;
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const translations = {
  apple: 'सेब',
  banana: 'केला',
  orange: 'संतरा',
  strawberry: 'स्ट्रॉबेरी',
};

function TranslatorPage() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    const lowerText = inputText.toLowerCase();
    const translated = translations[lowerText] || 'Translation not available';
    setTranslatedText(translated);
  };

  return (
    <TranslatorContainer>
      <Header>Fruit Translator</Header>
      <StyledForm>
        <Form.Group controlId="translationInput">
          <FormLabel>Enter a fruit name (in English)</FormLabel>
          <FormControl
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="e.g., Apple, Banana"
          />
        </Form.Group>
        <StyledButton variant="primary" className="mt-3" onClick={handleTranslate}>
          Translate
        </StyledButton>
      </StyledForm>
      {translatedText && (
        <ResultContainer>
          <h4>Translation:</h4>
          <p>{translatedText}</p>
        </ResultContainer>
      )}
    </TranslatorContainer>
  );
}

export default TranslatorPage;
