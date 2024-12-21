import React from "react";
import "../css/Events.css";

const EventsPage = () => {
  const events = [
    { name: "Paper Presentation", description: "Showcase your research and ideas." },
    { name: "Error 404", description: "Debugging and problem-solving challenge." },
    { name: "Workshop", description: "Hands-on learning sessions." },
  ];

  return (
    <div className="events-page">
      <h1>Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="event">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
