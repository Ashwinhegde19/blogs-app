import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Users from './components/Users';
import BlogDetails from './components/BlogDetails';
import UserDetails from './components/UserDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
