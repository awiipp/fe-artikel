import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/my-articles');

      setArticles(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`articles/${id}`);

      console.log(response.data);

      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h1>My Articles</h1>

      <Link to={'/article/create'}>
        <Button className="mt-3" variant="info">
          Create new
        </Button>
      </Link>

      <Container className="d-flex gap-5 flex-wrap mt-5">
        {articles.map((article) => (
          <Card style={{ width: '330px' }} key={article.id}>
            <Card.Header>
              <p className="fw-semibold m-0">
                {article.title} <br /> {article.category} | {article.created_at}
              </p>
            </Card.Header>
            <Card.Body>
              <p className="small">Article</p>
              <p className="small m-0">By: {article.user.name}</p>
            </Card.Body>
            <Card.Footer className="d-flex gap-1">
              <Link to={`/article/${article.id}`}>
                <Button>read</Button>
              </Link>
              <Button
                variant="danger"
                onClick={() => {
                  handleDelete(article.id);
                }}
              >
                delete
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default MyArticles;
