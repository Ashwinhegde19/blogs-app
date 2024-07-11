import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../index.css'; 

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const getUser = (userId) => users.find(user => user.id === userId);

  return (
    <div className="container">
      <h2 className="title">List of Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id} className="blog-item">
          <div className="blog-preview">
            <h3 className="blog-title">
              <span>{blog.title}</span>
              <Link to={`/blog/${blog.id}`} className="view-link">View</Link>
            </h3>
            <p>{blog.body}</p>
         
          <div className="user-info">
            {getUser(blog.userId) ? (
              
                <Link to={`/user/${blog.userId}`} className="author-link"> By:{getUser(blog.userId).name}</Link>
             
            ) : null
            }
             </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
