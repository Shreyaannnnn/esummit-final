import React from "react";
import eventImg from '../assets/event.jpg'
import "./Event.css";
const Event = () => {
  return (
    <div className="our_event">
      <div className="contentOfEvent">
        <h2>Our Event</h2>
        <div className="eventImg">
          <img src={eventImg} alt="" />
        </div>
        <p>
        Innoveda is a launchpad for startup minded innovators and tech enthusiasts to create disruptive solutions that address real-world problems.
        </p>
      </div>

    </div>
  );
};
export default Event;
