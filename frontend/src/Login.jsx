import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form:", { email, password });
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", { email, password });
      console.log("Login successful:", response.data);
      setMessage("Login successful!");
      setIsError(false);
    } catch (error) {
      console.error("Login failed:", error);
      setMessage(error.response?.data?.message || "Login failed. Please try again.");
      setIsError(true);
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
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>

        {/* Display feedback message */}
        {message && (
          <div
            className={`alert ${isError ? "alert-danger" : "alert-success"} mt-3`}
            style={{ textAlign: "center" }}
          >
            {message}
          </div>
        )}

        <p>Don't have an account :(</p>
        <Link
          to="/register"
          className="btn bg-white text-black btn-success w-100 rounded-0"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
