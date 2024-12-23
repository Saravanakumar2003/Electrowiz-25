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
      "Student Coordinator: Name and contact details.",
      "1. Sharan V - 8939451469",
      "2. Syed Kaamiluddin Ahmed H - 8015752278"
    ],
    judgingCriteria: [
      "Judging Criteria: ",
      "The team that scores the highest points in both rounds will be declared the winner.",
    ]
  },
  event3: {
    rules: [
      "Rule 1: The event is open to all the students pursuing B.E/B.Tech.",
      "Rule 2: A team can have 3-4 participants.",
      "Rule 3: Participants should come in Formal dress code along with student ID.",
      "Rule 4: The list of shortlisted candidates will be informed by e-mail or phone.",
      "Rule 5: The Shortlisted teams should bring a softcopy of the PPT and hardcopy of the paper on the day of event(01.02.2025)",
      "Rule 6: Teams will be given 8 minutes to present their paper followed by 2 minute QnA session. The paper must be the original work of the author(s).",
      "Rule 7: Participants are requested to send their papers with the following details: Team members name, College Name, Contact Number, Mail ID to mailto:ideaignition.vec@gmail.com before 30.01.2025",
      "Rule 8: Participants must report before 8:30Am on the day of event(01.02.2025)",
      "Rule 9: The decisions of the judges & the moderators is final."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.",
      "Nandhini - 7868933944",
      "Lakshana - 9600318401"
    ],
    judgingCriteria: []
  },
  event4: {
    rules: [
      "Rule 1: Individual participation only.",
      "Rule 2: There will be 2 rounds. 1st round consists of MCQ`s(pen paper mode) and 2nd round, the participant has to type the code in a platform.",
      "Rule 3: A participant can be disqualified by the organizers in case they are found to be breaking the event rules, the code of conduct or other unsporting behaviour.",
      "Rule 4: The organizing committee has every right to amend the existing rules or introduce new rules at any time before/during/after the contest. Any such rules would be communicated to the participants beforehand, and all the participants must follow them.",
      "Rule 5: Participant selection is based on the round 1's Number of correct answers, time consumption and code efficiency.",
      "Rule 6: Participant selected from round 1 only will be able to go to round two.",
      "Rule 7: The decision made by the judging committee will be final and binding.",
      "Rule 8: Basic knowledge on Python, C and Java."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.",
      "Sharmila Devi - 9080969747",
      "Suba Shobika -  76038 57211",
      "Dilip kumar - 97042 08881"   
    ],
    judgingCriteria: []
  },
  event5: {
    rules: [
      "Round 1: College Remembering Theme",
      "- Participants must submit a photograph that captures a memorable moment or aspect of college life.",
      "- The photograph must be taken on the theme of 'College Remembering'.",
      "Round 2: Product Photography",
      "- Shortlisted participants from Round 1 will be required to take an advertisement photograph of any random object.",
      "- The object will be given by co-ordinators, and participants are encouraged to be creative with their composition and concept.",
      "General Rules",
      "- All photographs must have a watermark with the date, time, and device name.",
      "- Participants must ensure that their submissions are original and do not infringe on any copyrights or intellectual property rights.",
      "Prizes",
      "- The best competitor will receive an award for their outstanding photography skills.",
      "Disclaimer:",
      "1. The student co-ordinators reserve the right to modify or change the rules and regulations of the competition at any time without prior notice.",
      "2. The student co-ordinators' decisions regarding the competition, including the selection of winners, are final and binding.",
      "3. By participating in the competition, participants acknowledge that they have read, understood, and agreed to abide by the rules and regulations of the competition.",
      "4. The student co-ordinators are not responsible for any errors, omissions, or technical difficulties that may occur during the competition."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.",
      "Arunvel R - 88382 01979",
      "Govardhan S - 6369437174",
      "Harish R - 93427 77194"
    ],
    judgingCriteria: []
  },
  event6: {
    rules: [
      "Rule 1: Choose a location and format decide where to hide the treasure.",
      "Rule 2: Create a trial of clues that leads to place to place (4 location).",
      "Rule 3: Give the participants the first clue and encourage them to find the other."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.",
      "Pavithran: 6381329220",
      "Kabilan: 7200606487",
      "DHESHVANTH S: 8248988041"    
    ],
    judgingCriteria: []
  },
  event7: {
    rules: [
      "Game Contract: ",
      "☑ Each team should find the answer in the stipulated time.",
      "☑ Each team will be given chance based on the buzzer.",
      "☑ Mobile phones and all other devices of communication or IoT devices are restricted.",
      "☑ The organizing committee has every right to amend the existing rules or introduce new rules at any time before/during/after the contest. Any such rules would be communicated to the participants beforehand, and all the participants must follow them.",
      "☑ The decision made by the judging committee will be final and binding."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.",
      "Alekhya - 6381614897",
      "Arun - 7200105028"
    ],
    judgingCriteria: []
  },
  event8: {
    rules: [
      "ROUND 1: 'CRACK THE LINK-N-CHARM!'",
      "  o A paper and pen will be provided to each team.",
      "  o One team member will mime a movie theme without speaking, while the others guess the movie title.",
      "  o Each team will select a movie from a bowl of movies.",
      "  o Teams will work collaboratively to solve a puzzle and recreate the complete image.",
      "  o A reference picture will be displayed for 30 seconds before the solving phase begins.",
      "ROUND 2: 'BRAINIAC BONDING!'",
      "  o Buzzer System Access:",
      "    • Each team must nominate one participant to access the buzzer link provided.",
      "    • The nominated participant must open the link on their device and remain on the page throughout the round.",
      "  o Question Selection:",
      "    • Questions will be numbered and displayed sequentially or announced by the quizmaster.",
      "    • The team that buzzes first after the question is announced will have the opportunity to answer.",
      "  o Answering Process:",
      "    • If the first team answers incorrectly or fails to answer within the time frame, other teams will have the chance to answer.",
      "  o Scoring and Timekeeping:",
      "    • The quizmaster will note the time taken to press the buzzer and answer.",
      "    • The winning team will be determined based on accuracy, speed of buzzing, and the time taken to respond.",
      "  o Fair Play:",
      "    • Participants must not refresh or leave the buzzer page once the link is accessed.",
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.:",
      "Yeshwanthy A.B",
      "Harshavardhini P.P"
    ],
    judgingCriteria: []
  },
  event9: {
    rules: [
      "Quiz Contract: ",
      "● Events must start and End on Schedule with no delay or exceptions permitted.",
      "● Mobile phones and all other devices of communication or IoT devices are strictly prohibited.",
      "● The organising committee has every right to amend the existing rules or introduce new rules at any time before/during/after the contest. Any such rules would be communicated to the participants beforehand, and all the participants must follow them.",
      "● The decision made by the judging committee will be final and binding.",
      "● A participant can be disqualified by the organisers in case they are found to be breaking the event rules and Regulations."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.:",
      "Sashitha Thummagunta: 8248953048",
      "Yuthika.S : 97910 77501"
    ],
    judgingCriteria: []
  },
  event10: {
    rules: [
      "• We request all the candidates maintain their decorum while attending the session at VEC.",
      "• Take notes and carry the laptops during the workshop. Refer to these notes during and after the workshop.",
      "• Formal dress code is necessary.",
      "• The candidature of the participant will be cancelled by the organisers immediately in case they are found to be breaking the event rule/s, the code of conduct or other unsavoury behaviour.",
      "• Avoid side conversations and keep your phone at bay."
    ],
    coordinators: [
      "Student Coordinator: Name and contact details.: ",
      "Nandhini K - 9025014461",
      "Draviya M - 8610010843"
    ],
    judgingCriteria: []
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
      <img src="/img/eventbanner.png" alt="Banner" className="banner" />
      <><article className="cta">
        <img src='https://placehold.co/750x800' alt='Bluetit' />
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
      </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
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
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>Idea Ignition</h2>
            <p><strong>Team Description:</strong> A team can have 3-4 participants.</p>
            <ul>
              <strong>Event Rules:</strong>
              <br />
              <li>➼ The list of shortlisted candidates will be informed by e-mail or phone.</li>
              <li>➼ The Shortlisted teams should bring a softcopy of the PPT and hardcopy of the paper on the day of event(01.02.2025).</li>
              <li>➼ Teams will be given 8 minutes to present their paper followed by 2 minute QnA session. The paper must be the original work of the author(s).</li>
              <li>➼ Participants are requested to send their papers with the following details: Team members name, College Name, Contact Number, Mail ID to ideaignition.vec@gmail.com before 30.01.2025.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event3", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event3", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>Photography Competition</h2>
            <ul>
              <strong>Event Rules:</strong>
              <br />
              <li>➼ Round 1: College Remembering Theme</li>
              <li>➼ Participants must submit a photograph that captures a memorable moment or aspect of college life.</li>
              <li>➼ The photograph must be taken on the theme of "College Remembering".</li>
              <li>➼ Round 2: Product Photography</li>
              <li>➼ Shortlisted participants from Round 1 will be required to take an advertisement photograph of any random object.</li>
              <li>➼ The object will be given by co-ordinators, and participants are encouraged to be creative with their composition and concept.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event5", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event5", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>BYTE AND BREAK THROUGH</h2>
            <ul>
              <strong>Conduction Procedure:</strong>
              <br />
              <li>➼ Individual participation only.</li>
              <li>➼ There will be 2 rounds. 1st round consists of MCQ`s(pen paper mode) and 2nd round, the participant has to type the code in a platform.</li>
              <li>➼ A participant can be disqualified by the organizers in case they are found to be breaking the event rules, the code of conduct or other unsporting behaviour.</li>
              <li>➼ Participant selection is based on the round 1's Number of correct answers, time consumption and code efficiency.</li>
              <li>➼ Participant selected from round 1 only will be able to go to round two.</li>
              <li>➼ Basic knowledge on Python, C and Java are required.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event4", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event4", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>TREASURE AND HUNT</h2>
            <ul>
              <strong>Team Description:</strong>A team can have Permitted a maximum 3 members permitted.
            </ul>
            <ul>
              <strong>Conduction Procedure:</strong>
              <br />
              <li>➼ Round 1: Your quest begins with a unique QR code.</li>
              <li>➼ Scan this code with your device to unlock the next clue.</li>
              <li>➼ This round 1 consist of 3 clues.</li>
              <li>➼ Round 2: Make sure to be quick, This round will decide the winner.</li>
              <li>➼ Any of the team have the same time duration then tie breaker round will be conducted.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event6", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event6", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>Melody Madness</h2>
            <ul>
              <ul>
                <strong>Team Description:</strong> A team can have a maximum of 4 Members. Individual entry is not permitted.
              </ul>
              <strong>Conduction Procedure:</strong>
              <br />
              <li>➼ Round 1: SOUND TRUCK HUNT(2K songs)</li>
              <li>➼ Identify the songs from provided BGM clips to earn points. The participant with highest points will move to next round.</li>
              <li>➼ Round 2: ONE WORD MISSING(early 2K songs)</li>
              <li>➼ It’s an elimination round where each team is questioned and expected to answer within a given time limit.</li>
              <li>➼ Round 3: MUSICAL LINKUP (90’s songs)</li>
              <li>➼ Participant's should analyze pictures to decipher song lyrics. The first to correctly identify the most lyrics wins the game.</li>
              <li>➼ Note: Tiebreaker rounds will be conducted if necessary.</li>
            </ul>

            <button className="btn" onClick={() => openModal("event7", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event7", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>LINKED UP (CONNECTIONS)</h2>
            <ul>
              <li>Team Composition: Each team will consist of 2 to 3 members.</li>
            </ul>
            <ul>
              <strong>Conduction Procedure:</strong>
              <br />
              <li>➼ Round 1: 'Crack the Link-n-Charm!'</li>
              <li>➼ A maximum of 15 teams will qualify for the next round based on their performance and points scored.</li>
              <li>➼ Results will be declared via a WhatsApp group created exclusively for participants immediately after the round.</li>
              <li>➼ Round 2: 'Brainiac Bonding!'</li>
              <li>➼ A connections game designed around knowledge-based themes</li>
              <li>➼ Winners will be determined in this round based on their problem-solving skills and creative thinking.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event8", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event8", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>Technical Quiz</h2>
            <ul>
              <strong>Team Description:</strong>A team Can have a maximum of 3 members permitted.
            </ul>
            <ul>
              <strong>Conduction Procedure:</strong>
              <br />
              <li>➼ Round 1: PAPYRUS PUZZLE</li>
              <li>➼ This preliminary round is an elimination round. It is a pen and paper round where each team is provided with 25 questions. It is expected to finish within the 20 minutes time limit.</li>
              <li>➼ Round 2: FAST FRENZY</li>
              <li>➼ Each team will designate one member to use their mobile phone to join the game with a unique PIN, respond to MCQs displayed on the screen, and witness your answers and scores update in real-time on the same screen, with the top performers showcased on the leaderboard.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event9", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event9", "coordinators")}>Coordinators</button>
          </div>
        </article><article className="cta">
          <img src='https://placehold.co/750x800' alt='Bluetit' />
          <div className="cta__text-column">
            <h2>Workshop</h2>
            <ul>
              <strong>About Workshop:</strong>
              <br />
              <li>➼ The workshop will be conducted on the topic "Hands on KNIME tool : No code platform for Machine Learning".</li>
              <li>➼ Gain insights into the KNIME tool and its applications in Machine Learning.</li>
              <li>➼ Learn how to use the KNIME tool to create workflows and perform analysis.</li>    
            </ul>
              
            <ul>
              <strong>Resource Person:</strong>
              <br />
              <li>➼ Dr.E. ARUNKUMAR ETHIRAJ (Vice President Retech Solutions Private Ltd.)</li>
              <li>➼ A conscientious reliable and hardworking engineer expertise in Power Electronics and Drives, Power System, VLSI Design, Image Processing, Embedded Development, Robotics Design and Applications, Marketing management and Lean Product Development.</li>
            </ul>
            <button className="btn" onClick={() => openModal("event10", "rules")}>Event Rules</button>
            <button className="btn" onClick={() => openModal("event10", "coordinators")}>Coordinators</button>
          </div>
        </article></>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeModal.charAt(0).toUpperCase() + activeModal.slice(1)}</h2>
            <ul className="modal-scroll">
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