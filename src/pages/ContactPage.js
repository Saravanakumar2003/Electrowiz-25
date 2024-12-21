import React, { useState } from "react";
import "../css/ContactPage.css";

const ContactPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    window.onload = function () {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="heading text-center">
                    <h2>Get In Touch</h2>
                </div>
                <div className="contact-info">
                    <p><strong>Email address:</strong> contact@electrowiz.info</p>
                    <p><strong>Phone Number:</strong> +831 546 547</p>
                    <p><strong>Location:</strong> Velammal Engineering College, Surapet</p>
                </div>
                <div className="contact-form">
                    <form action="https://api.web3forms.com/submit" method="POST" id="form">
                        <input type="hidden" name="apikey" value="17e54402-1af9-4b7e-9ee5-3f12b0fb8b07" />
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="subject" placeholder="Your Subject" required />
                        <input type="tel" name="number" placeholder="Phone Number" required />
                        <textarea name="messgae" placeholder="Your Message" required></textarea>
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
                        src=""
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