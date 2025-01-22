import React, { useEffect } from "react";
import '../css/Animation.css';
import '../js/index.js';
import '../js/mathUtils.js';
import '../js/textOnPath.js';
import '../js/winsize.js';

const SVGAnimation = () => {

    return (
        <div class="animation">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="0" result="blur" data-min-deviation="0" data-max-deviation="10" />
                        <feMerge>
                            <feMergeNode in="blur" />
                        </feMerge>
                    </filter>
                    <filter id="blur2" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0" result="glow" data-min-deviation="0" data-max-deviation="30" />
                        <feColorMatrix result="bluralpha" type="matrix" values="0 -1 0 0 0 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1.8 0 " />
                        <feOffset in="bluralpha" dx="0.000000" dy="0.000000" result="offsetBlur" />
                        <feMerge>
                            <feMergeNode in="offsetBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="distortionFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" data-min-scale="0" data-max-scale="100" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse" />
                    </filter>
                    <filter id="distortionFilter2">
                        <feGaussianBlur stdDeviation="10" result="glow" />
                        <feTurbulence type="fractalNoise" baseFrequency="0 0.1" numOctaves="2" seed="2" stitchTiles="noStitch" x="-30%" y="-30%" width="160%" height="160%" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" data-min-scale="0" data-max-scale="50" xChannelSelector="R" yChannelSelector="B" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse" result="displacement" />
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="displacement" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
            <main>
                <div class="frame frame--screen">
                    <div class="frame__title-wrap">
                        <h1 class="frame__title"></h1>
                        <div class="frame__links">
                        </div>
                    </div>
                    <h2 class="frame__heading"></h2>
                    <div class="frame__counter">
                        <span class="frame__counter-number"></span>
                        <span class="frame__counter-text"></span>
                        <span class="frame__counter-number"></span>
                        <span class="frame__counter-text"></span>
                    </div>
                    <nav class="frame__links frame__links--header">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </nav>
                </div>
                <div class="grid">
                    <div class="grid__item">
                        <span class="grid__item-number">About VEC</span>
                        <img class="grid__item-img" src="https://i.postimg.cc/CLydbhzv/college.png" alt="Some image" />
                        <h3 class="grid__item-title">Velammal Engineering College</h3>
                        <p class="grid__item-description">Velammal Engineering College was established in the year 1995-96 to impart quality education. It is a self financing non-minority institution, affiliated to Anna University and approved by All India Council for Technical Education (AICTE) and also an ISO certified institution.</p>
                    </div>
                    <div class="grid__item">
                        <span class="grid__item-number">About Electrowiz</span>
                        <img class="grid__item-img" src="logo192.png" alt="Some image" />
                        <h3 class="grid__item-title">Electrowiz 2025</h3>
                        <p class="grid__item-description">We really excited to announce that, The Department of Electronics and Communication Engineering are coming together all set to bring out the hidden talents of the budding engineers. Get ready people as the symposium ELECTROWIZ'25 is down the lane falling on 01-02-2025 (Saturday).</p>
                    </div>
                </div>
                <svg class="svgtext svgtext--1" data-filter-type="blur" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="text-curve1" d="M 0 100 Q 250 200 500 100 Q 750 0 1000 100" fill="none" />
                    <text filter="url(#blur)">
                        <textPath href="#text-curve1">
                            We are proud to announce that Electrowiz 2025 is here!
                        </textPath>
                    </text>
                </svg>
                <svg class="svgtext" data-filter-type="blur" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="text-curve11" d="M 0 100 Q 250 0 500 100 Q 750 200 1000 100" fill="none" />
                    <text filter="url(#blur2)">
                        <textPath href="#text-curve11">
                            Take a look at the events and register now!
                        </textPath>
                    </text>
                </svg>
                <div className="bimg"><img class="bigimg" src="https://i.postimg.cc/gcx6vt40/Event-Poster.png" alt="Some image" /></div>
                <svg class="svgtext svgtext--2" data-filter-type="distortion" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="text-curve2" d="M 0 50 Q 100 0 200 100 Q 300 200 650 50 C 750 0 750 150 1000 50" fill="none" />
                    <text filter="url(#distortionFilter)">
                        <textPath href="#text-curve2">
                            The Event is going to be held on 01-02-2025 (Saturday)
                        </textPath>
                    </text>
                </svg>
                <svg class="svgtext" data-filter-type="distortion" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 300">
                    <path id="text-curve22" d="M 0 200 Q 150 300 300 200 Q 700 0 1000 150" fill="none" />
                    <text filter="url(#distortionFilter2)">
                        <textPath href="#text-curve22">
                            We are excited to make the memorable day for you!
                        </textPath>
                    </text>
                </svg>
                <div class="grid">
                    <svg class="svgtext svgtext--4" data-filter-type="blur" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                        <path id="textcircle" d="M 0 0 Q 200 150 500 150 Q 850 150 1000 0 " fill="none" />
                        <text filter="url(#blur)">
                            <textPath href="#textcircle">
                            </textPath>
                        </text>
                    </svg>
                    <div class="grid__item">
                        <span class="grid__item-number">Events</span>
                        <img class="grid__item-img" src="img/Events.png" alt="Some image" />
                        <h3 class="grid__item-title">9 Events + 1 Workshop</h3>
                        <p class="grid__item-description">Electrowiz 2025 is a one-day event that includes 9 events and 1 workshop. The events are designed to test your technical and non-technical skills, while the workshop will give you hands-on experience with a no-code platform for machine learning.</p>
                    </div>
                    <div class="grid__item">
                        <span class="grid__item-number">Workshop</span>
                        <img class="grid__item-img" src="img/Workshop.png" alt="Some image" />
                        <h3 class="grid__item-title">Hands on KNIME  tool : No code platform for Machine Learning</h3>
                        <p class="grid__item-description">Gain hands-on experience in data preprocessing, workflow creation, and model evaluation, all through drag-and-drop functionalities. Explore real-world applications of machine learning in various industries and see how KNIME simplifies complex data challenges.</p>
                    </div>
                </div>
                <svg class="svgtext svgtext--3" data-filter-type="blur" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="text-curve3" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none" />
                    <text filter="url(#blur)">
                        <textPath href="#text-curve3">
                            Join us for a day of learning and innovation!
                        </textPath>
                    </text>
                </svg>
                <svg class="svgtext svgtext--3" data-filter-type="blur" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="text-curve4" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none" />
                    <text filter="url(#blur)">
                        <textPath href="#text-curve4">
                            Register now and be a part of Electrowiz 2025!
                        </textPath>
                    </text>
                </svg>
                <svg class="svgtext svgtext--3" data-filter-type="blur" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="text-curve5" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none" />
                    <text filter="url(#blur)">
                        <textPath href="#text-curve5">
                            Take a look at the event schedule and plan your day!
                        </textPath>
                    </text>
                </svg>
                <span class="grid__item-number">Event Schedule</span>
                <div className="bimg"><img class="bigimg" src="img/eventagenda.png" alt="Some image" /></div>
                <p class="text_2">Event Schedule is subject to change. <br />These timing are provided from Electrowiz'23 Event</p>
            </main>
        </div>
    );
};

export default SVGAnimation;
