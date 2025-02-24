import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({element}) => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <>{element}</>; // Render children if logged in
};

export default ProtectedRoute;
