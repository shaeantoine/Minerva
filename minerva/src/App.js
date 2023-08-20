import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Button from "./Button";


/*
  This page is responsible for 'landing' the 
  users and guiding them to start the demo 
*/
function LandingPage() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Project Minerva</h1>
          <p>Reimagine learning</p>
          <Link to="/try">
            <Button name={"Try Here"} className={"nice-blue"} />  
          </Link>
        </header>
      </div>
    );
}

/*
  This is the page that handles the functionality 
  of the app, i.e. the demo 
*/
function TryPage() {
  const [formData, setFormData] = useState({
    subject: '',
    deliveryMethod: '',
    level: '',
    additionalDetails: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can process or display the form data here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ask Away!</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <label className="form-label">
            Subject:
            <select name="subject" value={formData.subject} onChange={handleInputChange} className="form-select">
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </select>
          </label>
          <label className="form-label">
            Delivery Method:
            <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleInputChange} className="form-select">
              <option value="online">Online</option>
              <option value="in-person">In-Person</option>
            </select>
          </label>
          <label className="form-label">
            Level:
            <select name="level" value={formData.level} onChange={handleInputChange} className="form-select">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
          <label className="form-label">
            Additional Details:
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleInputChange}
              className="form-textarea"
            />
          </label>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </header>
    </div>
  );
}

/*
  Main functionality of the page, think of it 
  like the router of a python server
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/try" element={<TryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
