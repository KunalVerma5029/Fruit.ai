import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Button, Table, Container } from 'react-bootstrap';

const FaqContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
`;

function FaqPage() {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'What is the best fruit for vitamin C?', answer: 'Oranges and Strawberries.' },
    { id: 2, question: 'How many calories in an apple?', answer: 'About 95 calories.' },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/faqs')
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the FAQs!", error);
      });
  }, []);

  const handleAddFaq = () => {
    if (newQuestion && newAnswer) {
      const newFaq = {
        id: faqs.length + 1,
        question: newQuestion,
        answer: newAnswer,
      };
      setFaqs([...faqs, newFaq]);
      setNewQuestion('');
      setNewAnswer('');
      axios.post('http://127.0.0.1:5000/faqs', {
        question: newQuestion,
        answer: newAnswer
      })
      .then((response) => {
        setFaqs([...faqs, response.data]);
        setNewQuestion('');
        setNewAnswer('');
      })
      .catch((error) => {
        console.error("There was an error creating the FAQ!", error);
      });
    }
  };

  return (
    <FaqContainer>
      <Container>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <Form>
          <Form.Group controlId="faqQuestion">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter the question"
            />
          </Form.Group>

          <Form.Group controlId="faqAnswer" className="mt-3">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              type="text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Enter the answer"
            />
          </Form.Group>

          <Button className="mt-3" onClick={handleAddFaq}>
            Add FAQ
          </Button>
        </Form>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq) => (
              <tr key={faq.id}>
                <td>{faq.id}</td>
                <td>{faq.question}</td>
                <td>{faq.answer}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </FaqContainer>
  );
}

export default FaqPage;
