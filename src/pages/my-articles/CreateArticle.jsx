import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CreateArticle = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const response = await axios.post('/articles', data);

      console.log(response.data.data);

      navigate('/my-articles');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h1>Create Article</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control as={'textarea'} name="content" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category">
            <option value="Science">Science</option>
            <option value="General">General</option>
            <option value="Sport">Sport</option>
            <option value="Politic">Politic</option>
          </Form.Select>
        </Form.Group>

        <Button as={Link} to={'/my-articles'} variant="secondary">
          Back
        </Button>
        <Button type="submit" className="m-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateArticle;
