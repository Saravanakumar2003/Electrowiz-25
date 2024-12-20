import React from 'react';
import "../css/eventcard.css";

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <div className="flip-card-container" style={{ '--hue': 220 }}>
                <div className="flip-card">
                    <div className="card-front">
                        <div className="img-bg"></div>
                        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                        <figcaption>Brohm Lake</figcaption>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                            <li>Detail 4</li>
                            <li>Detail 5</li>
                        </ul>
                    </div>
                    <div className="card-back">
                        <div className="img-bg"></div>
                        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                        <button>Book</button>
                        <div className="design-container">
                            <span className="design design--1"></span>
                            <span className="design design--2"></span>
                            <span className="design design--3"></span>
                            <span className="design design--4"></span>
                            <span className="design design--5"></span>
                            <span className="design design--6"></span>
                            <span className="design design--7"></span>
                            <span className="design design--8"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flip-card-container" style={{ '--hue': 170 }}>
                <div className="flip-card">
                    <div className="card-front">
                        <figure>
                            <div className="img-bg"></div>
                            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image 2" />
                            <figcaption></figcaption>
                        </figure>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                            <li>Detail 4</li>
                            <li>Detail 5</li>
                        </ul>
                    </div>
                    <div className="card-back">
                        <figure>
                            <div className="img-bg"></div>
                            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image-2" />
                            <button>Book</button>
                            <div className="design-container">
                                <span className="design design--1"></span>
                                <span className="design design--2"></span>
                                <span className="design design--3"></span>
                                <span className="design design--4"></span>
                                <span className="design design--5"></span>
                                <span className="design design--6"></span>
                                <span className="design design--7"></span>
                                <span className="design design--8"></span>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="flip-card-container" style={{ '--hue': 350 }}>
                <div className="flip-card">
                    <div className="card-front">
                        <figure>
                            <div className="img-bg"></div>
                            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                            <figcaption>Brohm Lake</figcaption>
                        </figure>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                            <li>Detail 4</li>
                            <li>Detail 5</li>
                        </ul>
                    </div>
                    <div className="card-back">
                        <figure>
                            <div className="img-bg"></div>
                            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                            <button>Book</button>
                            <div className="design-container">
                                <span className="design design--1"></span>
                                <span className="design design--2"></span>
                                <span className="design design--3"></span>
                                <span className="design design--4"></span>
                                <span className="design design--5"></span>
                                <span className="design design--6"></span>
                                <span className="design design--7"></span>
                                <span className="design design--8"></span>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

            <a href="https://abubakersaeed.netlify.app/designs/d4-flip-card" className="abs-site-link" rel="nofollow noreferrer" target="_blank">abs/designs/d4-flip-card</a>
        </div>
    );
};

export default EventCard;