import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { event } = this.props;
    return (
      // <ul className="EventList">
      //     {events.map(event =>
      //       <li key={event.id}>
      //           <Event event={event} />
      //       </li>
      //     )}
      // </ul>
      <div>
        <h2>{event.summary}</h2>
      </div>
    );
  }
}

export default Event;