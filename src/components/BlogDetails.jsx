import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error('Error fetching blog:', error));

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
    
    <h1 className='blog-detail-title'>{blog.title}</h1>
    <div className="blog-detail-container">
      
      <div className="left">
        
        <p>{blog.body}</p>
      </div>
      <div className="right">
        <h3>Comments</h3>
        {comments.map(comment => (
          <div key={comment.id} className="comment-item">
            {comment.body}
            <p>by:<em>{comment.email}</em></p>
          </div>
        ))}
      </div>
    </div>
</>
  );
}
export default BlogDetails;
