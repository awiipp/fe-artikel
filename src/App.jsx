import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import { Container } from 'react-bootstrap';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import Articles from './pages/articles/Articles';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
