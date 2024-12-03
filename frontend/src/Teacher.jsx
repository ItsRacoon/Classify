import React, { useState } from "react";
import "./teachertable.css";

const Teacher = () => {
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
    <div className="teacher-container">
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

      {/* Table */}
      <div className="table-container">
        <h3>Weekly Schedule</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {[
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "12:00 PM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
              "4:00 PM",
            ].map((time, rowIndex) => (
              <tr key={rowIndex}>
                <td>{time}</td>
                {Array.from({ length: 5 }).map((_, colIndex) => (
                  <td key={colIndex} className="table-cell">
                    <div className="cell-content">
                      <p>Teachers:</p>
                      <p>Students:</p>
                      <button className="add-class-btn">Add Class</button>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teacher;
