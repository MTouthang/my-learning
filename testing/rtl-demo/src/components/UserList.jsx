// UserList.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

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
}

export default UserList;
