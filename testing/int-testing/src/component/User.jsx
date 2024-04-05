import React, { useState, useEffect } from 'react';
import fetchUserData from '../api';

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Component</h2>
      {userData ? (
        <div>
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default User;
