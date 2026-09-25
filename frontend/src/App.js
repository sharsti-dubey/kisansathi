import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './i18n';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CommunityPage from './components/CommunityPage.js';
import ProfilePage from './components/ProfilePage';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Notification />
      </div>
    </Router>
  );
}

export default App;