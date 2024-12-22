import React from "react";
import "../css/Events.css";

const EventsPage = () => {

  return (
    <div className="events-page">
      <article className="cta">
        <img src='https://images.unsplash.com/photo-1600078686889-8c42747c25fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzMjg5Nw&ixlib=rb-1.2.1&q=80&w=400' alt='Bluetit' />
        <div className="cta__text-column">
          <h2>Aspect ratio is great</h2>
          <p>This image has an aspect ratio of 3/2.</p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
        </div>
      </article>

      <article className="cta">
        <img src='https://images.unsplash.com/photo-1600078686889-8c42747c25fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzMjg5Nw&ixlib=rb-1.2.1&q=80&w=400' alt='Bluetit' />
        <div className="cta__text-column">
          <h2>Aspect ratio is great</h2>
          <p>This image has an aspect ratio of 3/2.</p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
        </div>
      </article>
    </div>
  );
};

export default EventsPage;
