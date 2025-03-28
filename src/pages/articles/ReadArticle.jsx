import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ReadArticle = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(`articles/${id}`);

      setData(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      {/* <p className="fs-5 fw-semibold">By {data.user.name}</p> */}

      <Container>
        <p>
          {data.category} | {data.created_at}
        </p>
        <p>{data.content}</p>
      </Container>
    </div>
  );
};

export default ReadArticle;
