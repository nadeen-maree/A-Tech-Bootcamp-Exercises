import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10)))
      .catch(error => console.error('Error fetching posts:', error));

    function handleResize() {
      setIsSingleColumn(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={isSingleColumn ? 'posts-container single-column' : 'posts-container'}>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
