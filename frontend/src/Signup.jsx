import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send a POST request to the backend
      const response = await axios.post("http://localhost:8000/api/auth/signup", formData);

      // Handle success response
      setMessage("Signup successful!");
      console.log("Response from server:", response.data);
    } catch (error) {
      // Handle errors
      setMessage(error.response?.data?.message || "Signup failed!");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
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
              onChange={handleChange} // Update state on input change
              value={formData.name} // Controlled input
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
              onChange={handleChange} // Update state on input change
              value={formData.email} // Controlled input
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
              onChange={handleChange} // Update state on input change
              value={formData.password} // Controlled input
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            SignUp
          </button>
          <p className="text-success mt-2">{message}</p>
          <p>Already have an account?</p>
          <button type="button" className="btn bg-white text-black btn-success w-100 rounded-0">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
