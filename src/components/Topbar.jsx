import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Topbar = () => {
  const { token, setToken } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.get('/auth/logout');

      setToken(null);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Navbar className="p-3">
        <Container>
          <Navbar.Brand>Articles</Navbar.Brand>

          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to={'/articles'}>
                Article
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to={'/my-articles'}>
                My Article
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {token ? (
                <Button variant="danger" onClick={handleLogout}>
                  Login
                </Button>
              ) : (
                <Button as={Link} to={'/login'} variant="success">
                  Login
                </Button>
              )}
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
