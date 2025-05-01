// components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return <button onClick={logout} className="logout-btn">Logout</button>;
};

export default LogoutButton;
