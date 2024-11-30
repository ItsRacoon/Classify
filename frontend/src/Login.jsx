import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      const response = await axios.post("/api/login", { email, password }); // Replace '/api/login' with your login endpoint
      console.log("Login successful:", response.data);
      // Add logic for successful login, such as redirecting the user
    } catch (error) {
      console.error("Login failed:", error);
      // Add error handling logic
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="form-control rounded-0"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>Don't have an account :( </p>
            <Link
          to="/register"  // Navigate to the login page
          className="btn bg-white text-black btn-success w-100 rounded-0"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;