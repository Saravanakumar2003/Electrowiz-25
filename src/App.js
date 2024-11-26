import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import IDCardPage from "./pages/IDCardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventDetailsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/id-card/:id" element={<IDCardPage />} />
      </Routes>
    </Router>
  );
}

export default App;