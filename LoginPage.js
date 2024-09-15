import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

const StyledForm = styled(Form)`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const FormLabel = styled(Form.Label)`
  font-size: 1rem;
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

const FormControl = styled(Form.Control)`
  font-size: 1rem;
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

const Heading = styled.h1`
  color: #007bff;
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userId = e.target.elements.userId.value;
    const password = e.target.elements.password.value;

    if (userId === 'user' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
      navigate('/signup')
    }
  };

  return (
    <LoginContainer>
      <Heading>Login to Fruit.ai</Heading>
      <StyledForm onSubmit={handleLogin}>
        <Form.Group controlId="userId">
          <FormLabel>User ID</FormLabel>
          <FormControl type="text" placeholder="Enter user ID" />
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Enter password" />
        </Form.Group>

        <StyledButton variant="primary" type="submit" className="mt-4">
          Login
        </StyledButton>
      </StyledForm>
    </LoginContainer>
  );
}

export default LoginPage;
