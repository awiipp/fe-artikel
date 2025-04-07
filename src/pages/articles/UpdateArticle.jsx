import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateArticle = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`/articles/${id}`);

      setData(response.data.data);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    data.append('_method', 'PUT');
    try {
      const response = await axios.post(`/articles/${id}`, data);

      console.log(response.data);

      navigate('/my-articles');
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div>
      <h1>Edit Artikel</h1>

      {errorMessage && <p className="text-danger h5">*{errorMessage}</p>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as={'textarea'}
            name="content"
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <option value="Science">Science</option>
            <option value="General">General</option>
            <option value="Sport">Sport</option>
            <option value="Politic">Politic</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Submit</Button>
        <Button
          as={Link}
          to={'/my-articles'}
          variant="secondary"
          className="m-3"
        >
          Back
        </Button>
      </Form>
    </div>
  );
};

export default UpdateArticle;
