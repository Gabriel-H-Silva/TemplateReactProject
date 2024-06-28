import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useScreenAndAuth } from './Context/screenContext'; // Ajuste o caminho conforme necessário

const AuthGuard = () => {
  const { authenticated } = useScreenAndAuth();
  const location = useLocation();

  if (!authenticated && location.pathname !== '/Login') {
    return <Navigate to="/Login" state={{ from: location }} />;
  }

  return null;
};

export default AuthGuard;
