import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
}
