import React from "react";
import "../css/ContactPage.css";

const ContactPage = () => {

    window.onload = function () {
        // Reset the form fields when the page loads
        document.getElementById("contact_form").reset();
    };

    return (
        <section className="contact-main" id="contact">
            <h1 className="headings">Contact Us</h1>

            <div className="contact-info">
                    <div className="contact-info-item">
                        <h4>Email:</h4>
                        <p>
                            <a href="mailto:contact@electrowiz.info">
                                contact@electrowiz.info
                            </a>
                        </p>
                    </div>
                    <div className="contact-info-item">
                        <h4>Phone:</h4>
                        <p>
                            <a href="tel:+91">
                            </a>
                            Kindly, contact particular event coordinators for queries.
                        </p>
                    </div>
                    <div className="contact-info-item">
                        <h4>Address:</h4>
                        <p>
                            Velammal Engineering College, Chennai, Tamil Nadu, India
                        </p>
                    </div>
                </div>
            
            <h1 className="headings">Send Us a Message</h1>
            
            <div id="container">
                <form action="https://api.web3forms.com/submit" method="POST" id="contact_form">
                    <input type="hidden" name="access_key" value={process.env.REACT_APP_FORM} />
                    <input type="hidden" name="subject" value="New submission from Electrowiz'25 website" />
                    <input type="checkbox" name="botcheck" class="hidden"></input>
                    <div class="name">
                        <label for="name"></label>
                        <input type="text" placeholder="My name is" name="name" id="name_input" minLength="2" maxLength="50" required />
                    </div>
                    <div class="email">
                        <label for="email"></label>
                        <input type="email" placeholder="My e-mail is" name="email" id="email_input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                    </div>
                    <div class="telephone">
                        <label for="name"></label>
                        <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required pattern="[0-9]{10}"/>
                    </div>
                    <div class="subject">
                        <label for="subject"></label>
                        <input type="text" placeholder="Subject line" name="subject" id="subject_input" required maxLength="100"/>
                    </div>
                    <div class="message">
                        <label for="message"></label>
                        <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required maxLength="500"></textarea>
                    </div>
                    <div class="submit">
                        <input type="submit" value="Send Message" id="form_button" />
                    </div>
                </form>
            </div>
            
            <h1 className="headings">Our Location</h1>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.184335925827!2d80.18898687466847!3d13.150769687181315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1734848591365!5m2!1sen!2sin"
                    width="768"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    property="iframe"
                    title="map"
                ></iframe>
            </div>
            <h1 className="headings">Frequently Asked Questions</h1>
            <div className="faq">
                <div>
                    <details open>
                        <summary>
                            Is Electrowiz'25 is a free event?
                        </summary>
                        <div>
                            No, Electrowiz'25 is a paid event. The registration fee is ₹150 per participant for entry and participation in all events. Workshop registration fee is ₹100 per participant.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Can I participate in multiple events?
                        </summary>
                        <div>
                            Yes, you can participate in multiple events. However, make sure that the events are not clashing with each other.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Do you provide refunds?
                        </summary>
                        <div>
                            We do not provide refunds. Please make sure you are available for the event before registering.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Do you provide certificates?
                        </summary>
                        <div>
                            Yes, we provide participation certificates for all participants. Winners will receive printed certificates and other participants will receive digital certificates.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Can I register on the day of the event?
                        </summary>
                        <div>
                            No, registrations will be closed a day before the event. Make sure you register before the deadline. And on-spot registrations will be entertained.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Can I participate in the workshop without registering for the event?
                        </summary>
                        <div>
                            Yes, you can participate in the workshop without registering for the event. However, the registration fee for the workshop is ₹100 per participant and vice versa.
                        </div>
                    </details>
                </div>
            </div>
        </section >
    );
};

export default ContactPage;