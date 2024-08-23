import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message); // Set error message if API call fails
      } finally {
        setLoading(false); // Set loading to false after API call is complete
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Render loading message while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Render error message if API call fails
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} data-testid="userList">
            {user.id}. {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
