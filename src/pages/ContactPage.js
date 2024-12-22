import React, { useState } from "react";
import "../css/ContactPage.css";

const ContactPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    window.onload = function () {
        // Reset the form fields when the page loads
        document.getElementById("contact_form").reset();
    };

    return (
        <section className="contact" id="contact">
            <h1 className="headings">Contact Us</h1>
            <div id="container">
                <form action="https://api.web3forms.com/submit" method="POST" id="contact_form">
                    <input type="hidden" name="access_key" value={process.env.REACT_APP_FORM} />
                    <input type="hidden" name="subject" value="New submission from Electrowiz'25 website" />
                    <input type="checkbox" name="botcheck" class="hidden"></input>
                    <div class="name">
                        <label for="name"></label>
                        <input type="text" placeholder="My name is" name="name" id="name_input" required />
                    </div>
                    <div class="email">
                        <label for="email"></label>
                        <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
                    </div>
                    <div class="telephone">
                        <label for="name"></label>
                        <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required />
                    </div>
                    <div class="subject">
                        <label for="subject"></label>
                        <input type="text" placeholder="Subject line" name="subject" id="subject_input" required />
                    </div>
                    <div class="message">
                        <label for="message"></label>
                        <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
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
                ></iframe>
            </div>
            <h1 className="headings">Frequently Asked Questions</h1>
            <div className="faq">
                <div>
                    <details open>
                        <summary>
                            How do you create an accordion?
                        </summary>
                        <div>
                            Easy! As long as you don't have to support IE11 or older browsers you could use <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> natively.
                        </div>
                    </details>
                    <details>
                        <summary>
                            What if I have to support IE11 or older browsers?
                        </summary>
                        <div>
                            No worries. The fallback for these elements is quite good. They will display as open. You won't get the open/close mechanism, but you won't lose any content either.
                        </div>
                    </details>
                    <details>
                        <summary>
                            What type of content can I have inside one of these?
                        </summary>
                        <div>
                            Almost anything you'd like. The <code>&lt;details&gt;</code> element allows all <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content" target="_blank">flow content</a>, which is basically everything.
                        </div>
                    </details>
                    <details>
                        <summary>
                            How does it work?
                        </summary>
                        <div>
                            The <code>&lt;details&gt;</code> element encapsulates the <code>&lt;summary&gt;</code> element. The <code>&lt;summary&gt;</code> becomes the 'label' for the <code>&lt;details&gt;</code> and acts like a button. When clicked, the attribute <code>open</code> is added to the <code>&lt;details&gt;</code> element, making it display. You can therefore style the open and closed states seperately if you'd like.
                        </div>
                    </details>
                </div>
            </div>
        </section >
    );
};

export default ContactPage;