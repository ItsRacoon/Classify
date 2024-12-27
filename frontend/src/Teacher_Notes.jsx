import React, { useState } from 'react';
import Navsec from './Navsec';
import './teacher_notes.css';
import Navbar from './Navbar';

const Teacher_notes = () => {
  const [fileName, setFileName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState(''); // Added state for message

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || '');
  };

  const handleStudentNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!studentName || !subject || !fileName) {
      alert('All fields are required.');
      return;
    }

    // Create an object to store the data
    const noteData = {
      studentName,
      subject,
      fileName,
      message,
    };

    // Log the data to the console (replace with actual data submission logic)
    console.log('Submitted Assignment Details:', noteData);

    // Clear form fields after successful submission
    setStudentName('');
    setSubject('');
    setFileName('');
    setMessage('');
  };

  return (
    <div>
      <Navbar />
      <div className="teacher-container">
        <Navsec />
        <h3 className="NoteText">Notes</h3>
        <div className="notebox">
          <form onSubmit={handleSubmit} className="form-group2">
          <div className="assignform">
          <div className="left-side">
            <div className="form-column2">
              <label htmlFor="studentName">Student Name</label></div>
              <div className="inputForm2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 24">
             
            <path stroke="currentColor" strokeWidth="1.25" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
              <input
              placeholder="Enter the Student Name" 
              className="input2"
                type="text"
                id="studentName"
                value={studentName}
                onChange={handleStudentNameChange}
                required
              />
              </div>
            

            <div className="form-column2">
              <label htmlFor="subject">Subject</label>
              <select
              className="subjectSel"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              >
                <option value="" className="subText" disabled selected>Select Subject</option>
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

            <div className="messageBox-container">
  <label htmlFor="message">Message</label>
  <textarea
    className="messageBox"
    id="message"
    value={message}
    onChange={handleInputChange}
    placeholder="Enter your message"
  />
</div>

            </div>

            <div className="right-side">
            <form className="formUpload">
        <span className="form-title">Upload your file</span>
        <p className="form-paragraph">
          File should be an document
        </p>
        <label htmlFor="file-input" className="drop-container">
          <span className="drop-title">Drop files here</span>
          or
          <input type="file" accept="image/*" required id="file-input" />
        </label>
      </form>
            </div>
            </div>

        
            <div className="centerbtn"><button type="submit" className="button2submit">
              Submit
            </button></div>
          </form>

          {fileName && <p>Uploaded File: {fileName}</p>}

          
        </div>
        <div className="prevNotes">
            <h2>Previous Notes</h2>
            <div className="sharedNotes">
              {/* Display previous notes here */}
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default Teacher_notes;