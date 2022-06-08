import React, { useState } from "react";

const Event = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { event } = props;

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="event">
      <h2>{event.summary}</h2>
      <div>
        <div>
          <p>{event.location}</p>
        </div>
        {showDetails && (
          <div className="extra-details">
            <p>{event.description}</p>
            <a href={event.htmlLink} rel="noreferrer" target="_blank">
              Open
            </a>
          </div>
        )}
        <button className="event__detailsButton" onClick={handleClick}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
};

export default Event;
