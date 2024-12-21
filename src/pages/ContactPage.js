import React, { useState } from "react";
import "../css/ContactPage.css";

const ContactPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading text-center">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-info">
          <p><strong>Email address:</strong> contact@yourmail.com</p>
          <p><strong>Phone Number:</strong> +831 546 547</p>
          <p><strong>Location:</strong> Cesare Rosaroll, 118 80139 Eventine</p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Subject" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="faq">
          <h3>Frequently Asked Questions</h3>
          <div className="accordion">
            {faqData.map((item, index) => (
              <div key={index} className="accordion-item">
                <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                  <h4>{item.question}</h4>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && <div className="accordion-content">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
        <div className="map">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.184335925827!2d80.18898687466847!3d13.150769687181315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1734756507226!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is Electrowiz?",
    answer: "Electrowiz is an annual event that showcases the latest in technology and innovation."
  },
  {
    question: "How can I register for the event?",
    answer: "You can register for the event through our website's registration page."
  },
  {
    question: "Where is the event located?",
    answer: "The event is located at Cesare Rosaroll, 118 80139 Eventine."
  }
];

export default ContactPage;