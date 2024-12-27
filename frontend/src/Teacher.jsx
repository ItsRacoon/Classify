import React, { useState } from "react";
import Navsec from "./Navsec";
import "./teacher.css";
import Navbar from "./Navbar";

const Teacher = () => {
  const [fileName, setFileName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [schedule, setSchedule] = useState({}); // Manage classes for the schedule
  const [modalVisible, setModalVisible] = useState(false); // Toggle modal visibility
  const [selectedCell, setSelectedCell] = useState({ day: "", time: "" }); // Track the cell selected
  const [classDetails, setClassDetails] = useState({
    teacher: "",
    student: "",
    subject: "",
  });
  const [isClassCancelled, setIsClassCancelled] = useState(false); // Track cancellation status

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
  };

  const handleAddClassClick = (day, time) => {
    setSelectedCell({ day, time });
    setModalVisible(true);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const { day, time } = selectedCell;

    // Update the schedule state with the new class details
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [time]: { ...classDetails },
      },
    }));

    // Reset modal details
    setModalVisible(false);
    setClassDetails({ teacher: "", student: "", subject: "" });
  };

  const handleClassDetailsChange = (event) => {
    const { name, value } = event.target;
    setClassDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEditClassClick = (day, time) => {
    setSelectedCell({ day, time });
    setClassDetails({
      teacher: schedule[day]?.[time]?.teacher || "",
      student: schedule[day]?.[time]?.student || "",
      subject: schedule[day]?.[time]?.subject || "",
    });
    setModalVisible(true);
  };

  const handleCancelClassClick = (day, time) => {
    // Set the class as cancelled
    setIsClassCancelled(true);

    // Remove class details from the schedule
    setSchedule((prevSchedule) => {
      const updatedSchedule = { ...prevSchedule };
      if (updatedSchedule[day]) {
        delete updatedSchedule[day][time];
      }
      return updatedSchedule;
    });
  };

  return (
    <div>
      <Navbar />
      
    <div className="teacher-container">
    <Navsec />
      
      
    <div className="table-container">
  <h3 className="weekly-schedule">Weekly Schedule</h3>
  <table className="styled-table">
    <thead>
      <tr>
        <th>Day</th>
        {[
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
        ].map((time, index) => (
          <th key={index}>{time}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, dayIndex) => (
        <tr key={day}>
          <td>{day}</td>
          {[
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
          ].map((time) => (
            <td key={time}>
              <div className="cell-content">
                {time === "1:00 PM" ? (
                  // Display LUNCH letters for 1:00 PM
                  dayIndex === 0
                    ? "L"
                    : dayIndex === 1
                    ? "U"
                    : dayIndex === 2
                    ? "N"
                    : dayIndex === 3
                    ? "C"
                    : dayIndex === 4
                    ? "H"
                    : ""
                ) : (
                  <button
                    className="add-class-btn"
                    onClick={() => handleAddClassClick(day, time)}
                  >
                    View Class
                  </button>
                )}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

      


      {/* Modal for adding or editing a class */}
      {modalVisible && (
        <div className="modal">
          <form onSubmit={handleModalSubmit} className="modal-form">
            <h3> View Class Details</h3>
            <div className="classDetail">
            <p>Subject : <span className="classStatus">Physics</span></p>
              <p>Mode : <span className="classStatus">Offline</span></p>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-btn">
                Change Mode
              </button>
              <button type="submit" className="submit-btn">
                Cancel Class
              </button>
            </div>

            <button type="submit" className="submit-btn">
              Generate Class
            </button>
            <button
              type="button"
              className="close-btn"
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default Teacher;
