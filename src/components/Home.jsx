import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Blogs Application</h1>
      <nav>
        <ul>
          <li><Link to="/blogs">View List of Blogs</Link></li>
          <li><Link to="/users">View List of Users</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
