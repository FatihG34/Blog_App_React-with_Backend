import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import BlogContext from './context/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <BlogContext>
      <App />
      <ToastContainer />
    </BlogContext>
  </AuthContext>
);