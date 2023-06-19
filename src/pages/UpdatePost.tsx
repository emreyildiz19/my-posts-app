import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../App.css'; 

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const { title, body } = response.data;
        setTitle(title);
        setBody(body);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedPost = { title, body };

    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Update Post</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
