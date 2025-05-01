// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import InvoiceForm from './components/InvoiceForm';
import { getUser } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    const handleStorageChange = () => setUser(getUser());

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/invoice" /> : <Login setUser={setUser} />} />
        <Route
          path="/invoice"
          element={user ? <InvoiceForm setUser={setUser} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
