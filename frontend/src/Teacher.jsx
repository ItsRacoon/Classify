import React, { useState } from "react";
import "./teachertable.css";

const Teacher = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  return (
    <div className="teacher-container">
      {/* Rectangle box */}
      <div className="rectangle-box">
        <h2>POST ASSIGNMENT</h2>

        <div className="form-group">
          <label htmlFor="textInput">ASSIGN STUDENT</label>
          <input type="text" id="textInput" placeholder="Enter the students name" />
        </div>

        <div className="form-group">
          <label htmlFor="dropdown">Select Subject:</label>
          <select id="dropdown">
            <option value="">Select</option>
            <option value="math">DSA</option>
            <option value="science">ACD</option>
            <option value="english">CN</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fileInput">Upload File:</label>
          <input type="file" id="fileInput" onChange={handleFileChange} />
          {fileName && <p>Selected File: {fileName}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {["8:00 AM", "9:00 AM", "10:00 AM","11:00AM","12:00AM","1:00PM","2:00PM","3:00PM","4:00PM"].map((time, rowIndex) => (
              <tr key={rowIndex}>
                <td>{time}</td>
                {Array.from({ length: 7 }).map((_, colIndex) => (
                  <td key={colIndex} className="table-cell">
                    <div className="cell-content">
                      <p>Teachers:</p>
                      <p>Students:</p>
                      <button className="add-class-btn">ADD CLASS</button>
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
