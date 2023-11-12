import React from 'react';
import { useAuth } from './AuthContext';

const SomeComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <p>Please log in.</p>
      )}

      <button onClick={() => login(/* user data */)}>Log In</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default SomeComponent;
