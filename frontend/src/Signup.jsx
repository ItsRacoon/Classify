import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // Include role directly in formData
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // Hook to navigate after successful signup

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Ensure the role is selected
    if (!formData.role) {
      setMessage("Please select a role.");
      setIsError(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );
      const successMessage = response.data?.message || "User created successfully!";
      alert(successMessage); // Show an alert for success
      setMessage(successMessage);
      setIsError(false); // Mark as success
      console.log("Response from server:", response.data);

      // Redirect the user to the login page after successful signup
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";

      // Show specific alert if the user already exists
      if (error.response?.data?.message === "User already exists") {
        alert("User already exists. Please login or use a different email.");
      }

      setMessage(errorMessage);
      setIsError(true); // Mark as error
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="form-control rounded-0"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
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
              onChange={handleChange}
              value={formData.email}
              required
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
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role">
              <strong>Role</strong>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control rounded-0"
              required
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>

          {message && (
            <p className={isError ? "text-danger mt-2" : "text-success mt-2"}>
              {message}
            </p>
          )}
        </form>

        <p>Already have an account? :D</p>
        <Link to="/login" className="btn btn-outline-success w-100 rounded-0">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
