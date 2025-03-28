import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import { Container } from 'react-bootstrap';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import Articles from './pages/articles/Articles';
import MyArticles from './pages/my-articles/MyArticles';
import CreateArticle from './pages/my-articles/CreateArticle';
import ShowArticle from './pages/articles/ShowArticle';
import ReadArticle from './pages/articles/ReadArticle';

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
              <Route path="/article/:id" element={<ShowArticle />} />
              <Route path="/article/read/:id" element={<ReadArticle />} />

              <Route path="/my-articles" element={<MyArticles />} />
              <Route path="/article/create" element={<CreateArticle />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
