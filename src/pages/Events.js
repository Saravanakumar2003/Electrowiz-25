import React from "react";
import EventsPage from "../components/EventsPage";
import MyCalendar from "../components/DayCalender";

const Events = () => {
  return (
    <div className="event">
      <EventsPage />
      <section className="day-calendar">
        <MyCalendar />
      </section>
    </div>
  );
};

export default Events;
