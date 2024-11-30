import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // New state for the dropdown
  const [selectedOption, setSelectedOption] = useState("");

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "role") {
      // For dropdown, we update the selectedOption
      setSelectedOption(value);
    } else {
      // For other inputs, we update the formData
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // You might want to include the selected role in your form data when submitting
    const dataToSend = { ...formData, role: selectedOption };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        dataToSend
      );
      setMessage("Signup successful!");
      setIsError(false); // Mark as success
      console.log("Response from server:", response.data);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
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
            <label htmlFor="dropdown">
              <strong>You want to login as :p</strong>
            </label>
            <select
              id="dropdown"
              name="role"  // Make sure this matches the property you're updating
              value={selectedOption}
              onChange={handleChange}
              className="form-control rounded-0"
              required
            >
              <option value="">Select any one of the above</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}
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
        <Link to="/Login" className="btn btn-outline-success w-100 rounded-0">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
