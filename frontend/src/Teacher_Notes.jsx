import React, { useState } from "react";
import Navsec from "./Navsec";
import "./teacher.css";
import Navbar from "./Navbar";


const Teacher_Notes = () => {
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
      
      <h1>Notes</h1>

      
      
    </div>
    </div>
  );
};

export default Teacher_Notes;
