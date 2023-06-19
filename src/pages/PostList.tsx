import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../App.css'; 

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'New Post',
        body: 'This is a new post',
        userId: 1
      });
      console.log('Created post:', response.data);
      fetchPosts(); 
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const updatePost = async (id, title, body) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body });
      console.log('Updated post:', response.data);
      fetchPosts(); 
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log('Deleted post with ID:', id);
      fetchPosts(); 
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container">
      <h2>Posts</h2>
      <Link to="/create" className="create-link">Create New Post</Link>

      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
          <Link to={`/update/${post.id}`} className="post-update-link">Update</Link>
          <button className="post-delete-button" onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
