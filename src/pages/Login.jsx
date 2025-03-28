import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  if (token) {
    return <Navigate to={'/'} />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const response = await axios.post('/auth/login', data);

      return console.log(response.data.user.accessToken);

      setToken(response.data.user.accessToken);

      return navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>

        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
