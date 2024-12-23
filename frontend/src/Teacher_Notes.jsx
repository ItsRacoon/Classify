import React, { useState } from "react";
import Navsec from "./Navsec";
import "./teacher.css";
import Navbar from "./Navbar";

const Teacher_notes = () => {
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
    if (!studentName || !subject || !fileName) {
      alert("All fields are required.");
      return;
    }
    console.log("Submitted Assignment Details:");
    console.log("Student Name:", studentName);
    console.log("Subject:", subject);
    console.log("File Name:", fileName);
  };

  return (
    <div>
      <Navbar />
      <div className="teacher-container">
        <Navsec />
        <h1 className="NoteText">Notes</h1>
        <form onSubmit={handleSubmit}>


          <div>
            <label>Upload File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        {fileName && <p>Uploaded File: {fileName}</p>}
        <div className="prevNotes">
          <h2 className="NoteText">Previous Notes</h2> 
          <div className="sharedNotes"> </div>
          </div>

      </div>
    </div>
  );
};

export default Teacher_notes;
