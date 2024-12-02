import React from 'react';
import './home.css'; // Import the CSS file

const Cards = () => {
    return (
        <div className="cardshome">
            <div className="card">
                <u><h1>Seamless Ingress Experience</h1></u>
                <ul>
                    <li>Effortless navigation for students to peruse and join their class particulars.</li>
                    <li>Tutors wield facile access to class intricacies, seamlessly initiating scholarly sessions.</li>
                </ul>
            </div>
            <div className="card">
                <u><h1>Cognitive Class Scheduler</h1></u>
                <ul>
                    <li>Intuitive interface empowering students and tutors to delineate preferred temporal epochs.</li>
                    <li>Autonomous generation and dissemination of class calendars, a sublime amalgamation of convenience and precision.</li>
                </ul>
            </div>
            <div className="card">
                <u><h1>Attendance Assignment</h1></u>
                <ul>
                    <li>Impeccable feature for the scrupulous recording of attendance during each scholarly convocation.</li>
                    <li>Effortless access to attendance records for students and tutors alike.</li>
                </ul>
            </div>
            <div className="card">
                <u><h1>NLP Pinnacle Chatbot</h1></u>
                <ul>
                    <li>NLP eminence enabling students to elegantly requisition class timetables, annul engagements, and seek elucidation on class schedules.</li>
                    <li>NLP eminence empowering tutors to effortlessly peruse their class schedules.</li>
                </ul>
            </div>
        </div>
    );
};

export default Cards;