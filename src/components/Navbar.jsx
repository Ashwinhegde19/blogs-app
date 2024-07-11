import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <h1>Blogs App</h1>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blogs" className="nav-link">Blogs</Link>
        <Link to="/users" className="nav-link">Users</Link>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
