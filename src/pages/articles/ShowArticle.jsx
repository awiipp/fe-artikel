import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ShowArticle = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const fetcData = async () => {
    try {
      const response = await axios.get(`/articles/${id}`);

      setData(response.data.data);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getComments = async () => {
    try {
      const response = await axios.get(`/articles/${id}/comment`);

      setComments(response.data.data);

      console.log(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetcData();
    getComments();
  }, []);

  const handleComments = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const response = await axios.post(`/articles/${id}/comment`, data);

      console.log(response.data);

      // reset teks komentar
      e.target.reset();

      // refresh
      fetcData();
      getComments();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h1>Article</h1>

      <Container className="mb-5 pb-5">
        <Card>
          <Card.Header>
            <p className="fw-semibold">
              {data.title} <br /> {data.category} | {data.created_at}
            </p>
          </Card.Header>
          <Card.Body>
            <p className="small">Article</p>
            {/* <p className="small m-0">By: {data.user.name}</p> */}
          </Card.Body>
          <Card.Footer>
            <Button as={Link} to={`/article/read/${id}`}>
              read
            </Button>
          </Card.Footer>
        </Card>

        <Card className="mt-5">
          <Card.Header>
            <p className="fw-semibold">Comments</p>
            <Form className="d-flex w-50 gap-3" onSubmit={handleComments}>
              <FormControl type="text" name="content" />
              <Button type="submit">comment</Button>
            </Form>
          </Card.Header>
          <Card.Body>
            {comments.map((comment) => (
              <Card key={comment.id} className="mb-3">
                <Card.Header className="fw-semibold">
                  {comment.user.name}
                </Card.Header>
                <Card.Body>{comment.content}</Card.Body>
              </Card>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ShowArticle;
