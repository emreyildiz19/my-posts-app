import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';
import UpdatePost from './pages/UpdatePost';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Posts App</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/update/:id" element={<UpdatePost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
