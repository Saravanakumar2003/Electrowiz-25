import React, { useState } from "react";
import "../css/Events.css";

const eventsData = {
  event1: {
    rules: [
      "Rule 1: Participants should have a valid student ID card for verification.",
      "Rule 2: The organising committee has every right to amend the existing rules or introduce new rules at any time before/during/after the contest. Any such rules would be communicated to the participants beforehand, and all the participants must follow them.",
      "Rule 3: The decision made by the judging committee will be final and binding.",
    ],
    coordinators: [
      "Staff Coordinator: Name and contact details.",
      "1.	Dr.K.Thilagam - 9944610037",
      "2.	Mrs.Shankari  - 8220641162",
      "Student Coordinator: Name and contact details.",
      "1. B.Tharani    - 8939451469",
      "2. M. Jayashrie - 8015752278",

    ],
    judgingCriteria: [
      "Judging Criteria: ",
      "Presentation: 10",
      "Technical Content: 10",
      "Novelty: 15",
      "Working Condition: 10",
      "Total: 50",
    ]
  },
  event2: {
    rules: [
      "Rule 1: In this round, a conversation scene from the Avengers will be shown without sound. Teams must work together to figure out the dialogue of the scene and recreate it as accurately as possible.",
      "Rule 2: The organising committee has every right to amend the existing rules or introduce new rules at any time before/during/after the contest. Any such rules would be communicated to the participants beforehand, and all the participants must follow them.",
      "Rule 3: Sharing hints/solutions with anyone else while the event is live is strictly prohibited, and it would immediately lead to your team's disqualification",
      "Rule 4: The decision made by the judging committee will be final and binding."
    ],
    coordinators: [
      "Faculty Coordinator: Name and contact details.",
      "1. Mrs. S. Sarupriya - 9944610037",
      "2. Mr. Seshaiah - 8220641162",
      "Student Coordinator: Name and contact details.",
      "1. Sharan V - 8939451469",
      "2. Syed Kaamiluddin Ahmed H - 8015752278"
    ],
    judgingCriteria: [
      "Judging Criteria: ",
      "The team that scores the highest points in both rounds will be declared the winner.",
    ]
  }
};

const EventsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeModal, setActiveModal] = useState("");

  const openModal = (eventKey, modalType) => {
    setActiveEvent(eventKey);
    setActiveModal(modalType);
    setModalContent(eventsData[eventKey][modalType]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveEvent(null);
    setActiveModal("");
    setModalContent(null);
  };

  return (
    <div className="events-page">
      <img src="/img/eventbanner.png" alt="Banner" className="banner"/>
      <article className="cta">
        <img src='/img/eventimage.jpg' alt='Bluetit' />
        <div className="cta__text-column">
          <h2>Imaginarium (Project Display)</h2>
          <p><strong>Team Description:</strong> A team can have a maximum of 4 Members.</p>
          <ul>
            <strong>Conduction Procedure:</strong>
            <br />
            <li>➼ Participants should bring all their requirements to execute their project.</li>
            <li>➼ The project can be hardware/software related to science and technology.</li>
            <li>➼ Each team can present their work in the chart containing objectives, descriptions, and outcomes.</li>
            <li>➼ Teams will be given a space of 30x30 inch space to set up their model at the venue for the exhibition.</li>
            <li>➼ Registered participants are requested to send the abstract, objectives, novelty, outcomes, and prototype photos of the project to the mail id given below before the event.</li>
          </ul>
          <button className="btn" onClick={() => openModal("event1", "rules")}>Event Rules</button>
          <button className="btn" onClick={() => openModal("event1", "coordinators")}>Coordinators</button>
          <button className="btn" onClick={() => openModal("event1", "judgingCriteria")}>Judging Criteria</button>
        </div>
      </article>
      <article className="cta">
        <img src='/img/eventimage.jpg' alt='Bluetit' />
        <div className="cta__text-column">
          <h2>INFINITY SQUAD (DUMBCHARADES)</h2>
          <p><strong>Team Description:</strong> Each team will consist of 2 to 3 members.</p>
          <ul>
            <strong>Round 1: Infinity Quotes Challenge: Pick and Act </strong>
            <br />
            <li>➼ In this round, one player is the performer. They are given a dialogue and must figure out which Marvel character it belongs to. The performer then acts out the character, and the other players try to guess who it is.</li>
          </ul>
          <ul>
            <strong>Round 2: Avengers in Silence </strong>
            <br />
            <li>➼ In this round, a conversation scene from the Avengers will be shown without sound. Teams must work together to figure out the dialogue of the scene and recreate it as accurately as possible.</li>
          </ul>
          <button className="btn" onClick={() => openModal("event2", "rules")}>Event Rules</button>
          <button className="btn" onClick={() => openModal("event2", "coordinators")}>Coordinators</button>
          <button className="btn" onClick={() => openModal("event2", "judgingCriteria")}>Judging Criteria</button>
        </div>
      </article>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeModal.charAt(0).toUpperCase() + activeModal.slice(1)}</h2>
            <ul>
              {modalContent && modalContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
