import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
