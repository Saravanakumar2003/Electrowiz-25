import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import Events from "./pages/Events";
import IDCardPage from "./pages/IDCardPage";
import ContactPage from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/id-card/:id" element={<IDCardPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;