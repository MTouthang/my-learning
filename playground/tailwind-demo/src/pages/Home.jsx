import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // Axios automatically checks if the response is successful (status code 2xx)
      const data = response.data; // Axios automatically parses JSON responses
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Render loading, error, or success states
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <p> There is an error while fetching the posts data - {error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
