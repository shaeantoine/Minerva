import React from 'react';
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Try Page</h1>
        <p>This is the page opened when you press "Try Here".</p>
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
