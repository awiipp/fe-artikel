import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/articles');

      setArticles(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Articles</h1>

      <Container className="d-flex gap-5 flex-wrap mt-5">
        {articles.map((article) => (
          <Card style={{ width: '330px' }} key={article.id}>
            <Card.Header>
              <p className="fw-semibold m-0">
                {article.title} <br />
                {article.category} | {article.created_at}
              </p>
            </Card.Header>
            <Card.Body>
              <p className="small">Article</p>
              <p className="small m-0">By: {article.user.name}</p>
            </Card.Body>
            <Card.Footer>
              <Link to={`/article/${article.id}`}>
                <Button>read</Button>
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Articles;
