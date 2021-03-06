import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  state = {
    errorText: '',
    eventNumber: this.props.numberOfEvents
  };

  handleInputChanged = event => {
    let value = event.target.value;
    // If value is negative or greater 32, display an error, else update list of events
    if (value < 1 || value > 32) {
      this.setState({
        errorText: 'Select a number from 1 to 32',
        eventNumber: value,
      });
      return
    } else {
      this.setState({
        eventNumber: value, 
        errorText: ''
      });
    }
    this.props.updateEvents(undefined, value);
  }

  render() {
    return (

      <div className='numberOfEvents'>
        <label>Number of events to show:</label>
        <input
          type='number'
          className='number'
          placeholder='Number'
          onChange={this.handleInputChanged}
          value={this.state.eventNumber}
        />
        <ErrorAlert id='errorAlert' text={this.state.errorText} />
      </div>





    )
  }
}
//   render() {
//     return (
//       <div className="NumberOfEvents">
//         <input 
//           className="number-of-events"
//           type="number"
//           value={this.props.numberOfEvents}>
//         </input>
//       </div>
//     );
//   }
// }

export default NumberOfEvents;