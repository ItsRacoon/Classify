import React, { useState } from "react";
import Navsec from "./Navsec";
import Navbar from "./Navbar";
import "./teacher.css";

const Teacher_assign = () => {
  const [fileName, setFileName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  const handleStudentNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Assignment Details:");
    console.log("Student Name:", studentName);
    console.log("Subject:", subject);
    console.log("File Name:", fileName);

    // Add your form submission logic here
  };

  return (
    <div>
      <Navbar />
    <div className="teacher-container">
      
      <Navsec />

      {/* Rectangle box */}
      <div className="rectangle-box">
        <h2>POST ASSIGNMENT</h2>

        <form onSubmit={handleSubmit}>
          {/* Student Input */}
          <div className="form-group">
            <label htmlFor="textInput">Assign Student:</label>
            <input
              type="text"
              id="textInput"
              value={studentName}
              onChange={handleStudentNameChange}
              placeholder="Enter the student's name"
            />
          </div>

          {/* Subject Dropdown */}
          <div className="form-group">
            <label htmlFor="dropdown">Select Subject:</label>
            <select
              id="dropdown"
              value={subject}
              onChange={handleSubjectChange}
            >
              <option value="">Select</option>
              <option value="DSA">DSA</option>
              <option value="ACD">ACD</option>
              <option value="CN">CN</option>
              <option value="OS">Operating Systems</option>
              <option value="DBMS">Database Management Systems</option>
              <option value="ML">Machine Learning</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="WEB">Web Development</option>
              <option value="NETWORKS">Computer Networks</option>
              <option value="CLOUD">Cloud Computing</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="form-group">
            <label htmlFor="fileInput">Upload File:</label>
            <input type="file" id="fileInput" onChange={handleFileChange} />
            {fileName && <p>Selected File: {fileName}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Teacher_assign;
