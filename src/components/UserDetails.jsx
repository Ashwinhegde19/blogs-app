import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user:', error));

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(response => setUserBlogs(response.data))
      .catch(error => console.error('Error fetching user blogs:', error));

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/comments`)
      .then(response => setUserComments(response.data))
      .catch(error => console.error('Error fetching user comments:', error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <>
   
      
   
   <h1 className='user-title'> {user.name}</h1>
    <div className="user-container">
       
    
      <div className="user-posts">
        <h3>Posts</h3>
        {userBlogs.map(blog => (
          <div key={blog.id} className="blog-item">
            {blog.title}
          </div>
        ))}
      </div>
      <div className="user-comments">
        <h3>Comments</h3>
        {userComments.map(comment => (
          <div key={comment.id} className="blog-item">
            {comment.body}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default UserDetails;
