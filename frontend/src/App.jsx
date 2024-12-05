import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Cards from './Cards';
import Teacher from './Teacher';
import Admin from './Admin';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ProtectedRoute component to protect specific routes based on user role
const ProtectedRoute = ({ role, children }) => {
  const userRole = localStorage.getItem('role'); // Assuming the role is stored in localStorage
  if (userRole !== role) {
    return <Navigate to="/" />; // Redirect to home if they don’t have the correct role
  }
  return children; // Allow access to the protected content
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cards" element={<Cards />} />
        
        {/* Protected Routes */}
        <Route
          path="/Teacher"
          element={
            <ProtectedRoute role="teacher">
              <Teacher />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/Admin"
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
