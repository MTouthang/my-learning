import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', completed: false });

  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}?_page=1&_limit=5`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Add new post
  const addPost = async () => {
    try {
      const response = await axios.post(API_BASE_URL, newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', body: '' });
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  // Update post
  const updatePost = async (id, updatedPost) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, updatedPost);
      const updatedPosts = posts.map((post) =>
        post.id === id ? response.data : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  // Delete post
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: Completed:{' '}
            {post.completed ? 'Yes' : 'No'}
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <button
              onClick={() => {
                const updatedTitle = prompt('Enter updated title:', post.title);
                const updatedCompleted = confirm('Is it completed?');
                updatePost(post.id, {
                  title: updatedTitle || post.title,
                  completed: updatedCompleted,
                });
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <div>
        <label>
          Completed:
          <input
            type="checkbox"
            checked={newPost.completed}
            onChange={(e) =>
              setNewPost({ ...newPost, completed: e.target.checked })
            }
          />
        </label>
      </div>
      <button onClick={addPost}>Add Todo</button>
    </div>
  );
};

export default App;
