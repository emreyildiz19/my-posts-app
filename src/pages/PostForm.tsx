import React, { useState } from 'react';
import axios from 'axios';

import '../App.css'; 

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [postId, setPostId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        id: postId, 
        userId: 1,
      });
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }

    setTitle('');
    setBody('');
    setPostId('');
  };

  return (
    <div className="container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <div>
          <label htmlFor="postId">ID:</label>
          <input type="number" id="postId" value={postId} onChange={(e) => setPostId(e.target.value)} />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default PostForm;
