import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="title"> Users</h2>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="blog-item">
            <Link to={`/user/${user.id}`} className="user-link">{user.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
