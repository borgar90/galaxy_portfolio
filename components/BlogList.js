// components/BlogList.js
// Norsk dokumentasjon: Komponent for å liste ut bloggposter fra Ghost API.
import React, { useEffect, useState } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Eksempel: Hente bloggposter fra Ghost API
    /** fetch('https://your-ghost-blog.com/ghost/api/v3/content/posts/?key=YOUR_CONTENT_API_KEY')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
      })
      .catch(err => console.error('Error fetching posts:', err));
  
      */

      }, []);

  return (
    <section className="blog-list">
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .blog-list {
          padding: 1rem;
          background-color: #fafafa;
          border-radius: 8px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 1rem;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default BlogList;
