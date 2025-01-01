import React, { useState } from "react";
import Navsec from "./Navsec";
import Navbar from "./Navbar";
import "./teacher_notes.css";
import Subjectnav from "./Subjectnav";

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
        <h3>Assignment</h3>
        <div className="assignContainer">
          <form onSubmit={handleSubmit} className="form-group2">
            <div className="assignform">
              <div className="left-side">
                <div className="form-column2">
                  <label>Student Name </label>
                </div>
                <div className="inputForm2">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    
                    <path
                      stroke="currentColor"
                      strokeWidth="1.25"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <input
                    placeholder="Enter the Student Name"
                    className="input2"
                    type="text"
                  />
                </div>

                <div className="form-column2">
                  <label htmlFor="dropdown">Subject</label>
                </div>
                <select
                  className="subjectSel"
                  id="dropdown"
                  value={subject}
                  onChange={handleSubjectChange}
                >
                  <option value="" className="subText" disabled selected>
                    Select Subject
                  </option>
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

                <div className="form-column2">
                  <label htmlFor="dueDate">Due Date</label>
                </div>
                <input type="date" id="dueDate" className="date-picker" />
              </div>

              {/* File Upload */}
              <div className="right-side">
                <form className="formUpload">
                  <span className="form-title">Upload your file</span>
                  <p className="form-paragraph">File should be an document</p>
                  <label htmlFor="file-input" className="drop-container">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input
                      type="file"
                      accept="image/*"
                      required
                      id="file-input"
                    />
                  </label>
                </form>
              </div>
            </div>

            <div className="centerbtn"><button type="submit" className="button2submit">
              Submit
            </button></div>
            
          </form>
        </div>
        <div className="previousAssign">
          <h2>Previous Assignment</h2>
          <Subjectnav />

          <div className="contentbox">
            <p>No assignments available at the moment.</p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Teacher_assign;
