import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function LandingPage() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Project Minerva</h1>
          <p>Reimagine learning</p>
          <Link to="/try">Try Here</Link>
        </header>
      </div>
    );
}

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
