import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import Events from "./pages/Events";
import IDCardPage from "./pages/IDCardPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundPolicy from "./pages/RefundPolicy";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import CookiesNotification from "./components/CookiesNotification";
import "./index.css";

function App() {
  return (
    <Router>
      <CookiesNotification />
      <Slider />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/id-card/:id" element={<IDCardPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;